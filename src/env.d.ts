// Secrets added via `wrangler secret put` don't appear in wrangler.toml
// and therefore aren't picked up by `wrangler types`. Declare them here.
interface Env {
  TURNSTILE_SECRET: string;
}
declare namespace Cloudflare {
  interface Env {
    TURNSTILE_SECRET: string;
  }
}
