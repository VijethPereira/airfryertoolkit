import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import { EmailMessage } from 'cloudflare:email';
import { createMimeMessage, Mailbox } from 'mimetext';

const SENDER = 'contact@airfryertoolkit.com';
const RECIPIENT = 'pereiravijeth@gmail.com';
const MAX_PER_HOUR = 5;

// Strip CR/LF so free-text fields can't inject extra MIME headers.
const clean = (s: string) => s.replace(/[\r\n]+/g, ' ').trim();

export const POST: APIRoute = async ({ request }) => {
  const ip = request.headers.get('CF-Connecting-IP') ?? 'unknown';

  // Rate limit (skipped gracefully if KV not bound)
  if (env.RATE_KV) {
    const key = `rl:${ip}`;
    const count = parseInt((await env.RATE_KV.get(key)) ?? '0', 10);
    if (count >= MAX_PER_HOUR) return json({ error: 'Too many requests. Try again later.' }, 429);
    await env.RATE_KV.put(key, String(count + 1), { expirationTtl: 3600 });
  }

  let body: Record<string, string>;
  try { body = await request.json(); } catch { return json({ error: 'Bad request' }, 400); }

  const { name, email, subject, message, turnstileToken } = body;
  if (!name || !email || !message || !turnstileToken) return json({ error: 'Missing fields' }, 400);
  if (name.length > 200 || email.length > 200 || message.length > 5000) return json({ error: 'Too long' }, 400);

  // Verify Turnstile server-side
  const verify = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ secret: env.TURNSTILE_SECRET, response: turnstileToken, remoteip: ip }),
  });
  const outcome = await verify.json() as { success: boolean };
  if (!outcome.success) return json({ error: 'CAPTCHA failed. Please retry.' }, 403);

  // Send directly through Cloudflare Email Routing — avoids relying on a
  // third-party relay that may block/flag Workers' egress IPs.
  const mime = createMimeMessage();
  mime.setSender({ name: 'Air Fryer Toolkit Contact Form', addr: SENDER });
  mime.setRecipient(RECIPIENT);
  mime.setHeader('Reply-To', new Mailbox({ addr: clean(email) }));
  mime.setSubject(`Air Fryer Toolkit Contact — ${clean(subject || 'General')}`);
  mime.addMessage({
    contentType: 'text/plain',
    data: `Name: ${clean(name)}\nEmail: ${clean(email)}\nSubject: ${clean(subject || '—')}\n\n${message}`,
  });

  try {
    await env.EMAIL.send(new EmailMessage(SENDER, RECIPIENT, mime.asRaw()));
    return json({ ok: true });
  } catch {
    return json({ error: 'Delivery failed' }, 502);
  }
};

function json(obj: unknown, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
    },
  });
}
