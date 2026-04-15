## 概要

- URL:
  - https://github.com/cloudflare/templates/tree/main/react-router-hono-fullstack-template

## セットアップ

```bash
pnpm create cloudflare@latest cloudflare-react-router-hono-fullstack --template=cloudflare/templates/react-router-hono-fullstack-template
```

## メモ

- ドキュメントにはSPAとあるが、wrangler.jsonc に assets が設定されていない。
  - worker で `virtual:react-router/server-build` を使用。
  - React Router の `loader` も使っているし、SSRでは？
- `/api/` 定義されていない
