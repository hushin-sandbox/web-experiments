## 概要

- 技術:
  - vite-plus
  - @tanstack/start
- URL:
  - https://viteplus.dev/guide/create
  - https://tanstack.com/start/latest

## セットアップ

```bash
vp create @tanstack/start


┌  Let's configure your TanStack Start application
│
◇  What would you like to name your project?
│  vite-plus-tanstack-start
│
◇  Select deployment adapter
│  Cloudflare
│
◇  Would you like to include demo/example pages?
│  Yes
│
◇  Keyboard Shortcuts ────────────────────────────────────────────────╮
│                                                                     │
│  Use ↑/↓ to navigate • Space to select/deselect • Enter to confirm  │
│                                                                     │
├─────────────────────────────────────────────────────────────────────╯
│
◇  What add-ons would you like for your project?
│  Drizzle, Form, oRPC, Shadcn, Better Auth, Storybook
│
◇  Would you like an example?
│  Events
│
◇  Drizzle: Database Provider
│  SQLite
│
◇  Would you like to initialize a new git repository?
│  No
│
◇  Dependency installation skipped

```

vp check でエラーになる箇所を除外する

```
// experiments/vite-plus-tanstack-start/vite.config.ts
  fmt: {
    ignorePatterns: ['.content-collections/**'],
  },
```

https://www.content-collections.dev/docs/quickstart/tanstack-start

.content-collections を .gitignore に追加

## メモ

- add-ons の種類が豊富

pnpm dev

```
The plugin "vite-tsconfig-paths" is detected. Vite now supports tsconfig paths resolution natively via the resolve.tsconfigPaths option. You can remove the plugin and set resolve.tsconfigPaths: true in your Vite config instead.
```

が出るのが気になる。

ブラウザで動作確認すると
