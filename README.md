# Web Experiments & Integrations

Webのライブラリ・フレームワークを検証し、知見を蓄積するためのリポジトリ。

## 📁 Structure

```
.
├── experiments/   # 単体ライブラリの検証
├── integrations/  # 複数ライブラリの組み合わせ検証
└── README.md
```

### experiments/

- 1ライブラリ単位で検証するためのディレクトリ
- 例: React, Vue, Svelte, Zustand, TanStack Query など
- 各プロジェクトは独立して初期化する（Vite / Next.js など自由）

### integrations/

- 複数ライブラリを組み合わせた構成を検証するディレクトリ
- 実際のアプリ構成に近い形で検証する
- 例:
  - Next.js + Chakra UI + Auth0
  - Vite + React + Zustand + TanStack Query

## 🧭 Purpose

- 新しい技術のキャッチアップ
- 技術選定のための比較検証
- 実務導入前のリスク低減
- 知見のストック

## 📝 NOTE.md ルール

各プロジェクト配下には `NOTE.md` を作成する。

```
experiments/react/
  ├── NOTE.md
  └── ...
```

### テンプレート

````md
## 概要

- 技術:
- URL:

## セットアップ

```bash
pnpm create ...
cd ...
pnpm install
pnpm dev
```

## メモ

-
````

### 目的

- 後から再現できるようにする
- 判断材料を残す

## 🚀 運用ルール

- 小さく作ってすぐ試す
- 1プロジェクト = 1テーマを意識する
- 迷ったら `experiments` に置く
- 実用構成になったら `integrations` に昇格させる

## ✍️ 命名ルール（推奨）

```
experiments/
  react-basic/
  vue-router/
  zustand-basic/

integrations/
  nextjs-auth0-chakra/
  vite-react-query-zustand/
```

- 技術スタックが分かる名前にする
- ハイフン区切り
- 冗長になりすぎない
