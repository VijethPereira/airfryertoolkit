// Notifies IndexNow (Bing, Yandex, Seznam, Naver, etc.) that our URLs changed.
// Key file lives at public/<KEY>.txt and must match KEY below.
const SITE = 'https://airfryertoolkit.com';
const HOST = 'airfryertoolkit.com';
const KEY = 'a08bbfbfbe7c59d1024869293df4bdba';
const KEY_LOCATION = `${SITE}/${KEY}.txt`;

async function main() {
  const sitemapRes = await fetch(`${SITE}/sitemap.xml`);
  if (!sitemapRes.ok) {
    throw new Error(`Failed to fetch sitemap.xml: ${sitemapRes.status}`);
  }
  const xml = await sitemapRes.text();
  const urlList = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);

  if (urlList.length === 0) {
    throw new Error('No URLs found in sitemap.xml');
  }

  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`IndexNow submission failed: ${res.status} ${text}`);
  }

  console.log(`IndexNow: submitted ${urlList.length} URLs (status ${res.status})`);
}

main().catch(err => {
  console.error(err.message);
  process.exit(1);
});
