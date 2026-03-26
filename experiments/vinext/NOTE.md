## 概要

- 技術: vinext
- URL: https://github.com/cloudflare/vinext

## セットアップ

```bash
npm create next-app@latest
cd vinext/
npm install -D vinext vite @vitejs/plugin-react
npx vinext init
```

Replace next with vinext in your scripts:

```
{
  "scripts": {
    "dev": "vinext dev",
    "build": "vinext build",
    "start": "vinext start"
  }
}
```

Claude Code で `migrate this project to vinext`

## セットアップ手順

2. `vinext check` で互換性チェック（92% compatible）
3. `next` を dependencies から削除、`vinext` を dependencies に追加
4. `vite`, `@vitejs/plugin-react`, `@vitejs/plugin-rsc`, `react-server-dom-webpack` を devDependencies に追加
5. `vite.config.ts` を作成（`vinext()` プラグインのみ）
6. `package.json` の scripts を `vinext dev/build/start` に変更
7. `eslint-config-next` を削除し、ESLint 設定をシンプル化
8. `next-env.d.ts` を削除、`tsconfig.json` から Next.js 固有設定を除去

## 実験内容

- Next.js (App Router) プロジェクトを vinext に移行
- `next/image`, `next/font/google` などの互換性を確認

## 結果

- 成功: `vinext dev` でサーバー正常起動（http://localhost:3000）
- `next/*` インポートの書き換えは不要（vinext が自動的にシムを提供）
- `next/font/google` はビルド時セルフホストではなく CDN 配信に変わる（部分的サポート）

## 学び

### 良い点

- 移行が非常にシンプル（パッケージ差し替え + 設定ファイル追加のみ）
- アプリケーションコードの変更が不要
- `vinext check` で事前に互換性を確認できる
- Vite 8 ベースで HMR が高速

### 注意点

- `next/font/google` はセルフホストではなく CDN 配信になる
- `next/image` は `@unpic/react` を使用（ビルド時最適化なし）
- webpack/Turbopack 設定は Vite プラグインに置き換える必要がある
