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

### Vite+ 移行 (2026-04-09)

- `vp migrate --no-interactive` で移行実行
- ESLint → Oxlint に移行、lint 設定は `vite.config.ts` の `lint` ブロックに統合
- `eslint.config.js` 削除、ESLint 関連依存を削除
- `vite` → `vite-plus` に import 書き換え済み
- `vp install`, `vp check`, `vp build` は成功
- `vp test` は `@cloudflare/vite-plugin` が `resolve.external` を設定するため Vitest との互換性エラーあり（テストファイル未作成のため実影響なし）
- `@cloudflare/vite-plugin` が `optimizeDeps.esbuildOptions` を使っており deprecated 警告が出る（プラグイン側の対応待ち）
