## 概要

- URL:
  - https://developers.cloudflare.com/workers/framework-guides/web-apps/more-web-frameworks/hono/

## セットアップ

```bash
pnpm create cloudflare@latest hono-react-spa-cloudflare --template=cloudflare/templates/vite-react-template
```

## メモ

- [RPC - Hono](https://hono.dev/docs/guides/rpc) を導入済み
  - サーバー側でルートをチェインし `AppType` をエクスポート
  - クライアント側で `hc<AppType>` を使い型安全に API を呼び出し
  - `tsconfig.app.json` に worker ディレクトリと `worker-configuration.d.ts` を追加して型解決
- Cloudflare SPA このあたりの設定が入ってそう
  - [Single Page Application (SPA) · Cloudflare Workers docs](https://developers.cloudflare.com/workers/static-assets/routing/single-page-application/)
  - [Tutorial - React SPA with an API · Cloudflare Workers docs](https://developers.cloudflare.com/workers/vite-plugin/tutorial/)
