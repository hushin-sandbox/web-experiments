## Cloudflare Workers

See [docs/cloudflare-workers.md](docs/cloudflare-workers.md) for API references, limits, and error handling.

## Commands

| Command               | Purpose                             |
| --------------------- | ----------------------------------- |
| `pnpm dev`            | Local development                   |
| `pnpm run deploy`     | Deploy to Cloudflare                |
| `pnpm run cf-typegen` | Generate TypeScript types           |
| `pnpm run build`      | Production build                    |
| `pnpm run check`      | Type check + build + dry-run deploy |

Run `pnpm run cf-typegen` after changing bindings in wrangler.jsonc.

## Quality Checks

| Command          | Purpose                       |
| ---------------- | ----------------------------- |
| `pnpm run lint`  | Lint (Oxlint via Vite+)       |
| `pnpm run fmt`   | Format (Vite+)                |
| `pnpm run test`  | Run tests (Vitest via Vite+)  |
| `pnpm run check` | lint + build + dry-run deploy |
