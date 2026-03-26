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
experiments/vite-plus-tanstack-start/src/routeTree.gen.ts

```
// experiments/vite-plus-tanstack-start/vite.config.ts
  fmt: {
    ignorePatterns: ['.content-collections/**', 'src/routeTree.gen.ts'],
  },
```

https://www.content-collections.dev/docs/quickstart/tanstack-start

```
echo .content-collections >> .gitignore
git rm -r .content-collections/
```

## メモ

- add-ons の種類が豊富

### pnpm dev

```
The plugin "vite-tsconfig-paths" is detected. Vite now supports tsconfig paths resolution natively via the resolve.tsconfigPaths option. You can remove the plugin and set resolve.tsconfigPaths: true in your Vite config instead.
```

が出るのが気になる。

ブラウザで動作確認すると /about などに遷移したときに
destroy is not a function というエラーが出る。

### vp check --fix

```
VITE+ - The Unified Toolchain for the Web

Starting content-collections with config content-collections.ts
! eslint(no-unused-vars): Catch parameter 'err' is caught but never used.
     ,-[src/routes/demo/better-auth.tsx:105:14]
 104 |       }
 105 |     } catch (err) {
     :              ^|^
     :               `-- 'err' is declared here
 106 |       setError("An unexpected error occurred");
     `----
  help: Consider handling this error.

  ! eslint(no-unused-vars): Variable 'data' is declared but never used. Unused variables should start with a '_'.
    ,-[src/routes/api.remy-chat.ts:31:17]
 30 |           const { messages, speakerSlug, talkSlug } = body;
 31 |           const data = body.data || {};
    :                 ^^|^
    :                   `-- 'data' is declared here
 32 |
    `----
  help: Consider removing this declaration.

  x typescript(tsconfig-error): Invalid tsconfig
   ,-[tsconfig.json:7:5]
 6 |     "module": "ESNext",
 7 |     "baseUrl": ".",
   :     ^^^^^^^^^
 8 |     "paths": {
   `----
  help: Option 'baseUrl' has been removed. Please remove it from your configuration.
        See https://github.com/oxc-project/tsgolint/issues/351 for more information.

  x typescript(TS2882): Cannot find module or type declarations for side-effect import of '../src/styles.css'.
   ,-[.storybook/preview.ts:2:8]
 1 | import type { Preview } from "@storybook/react-vite";
 2 | import "../src/styles.css";
   :        ^^^^^^^^^^^^^^^^^^^
 3 |
   `----

Found 2 errors and 2 warnings in 64 files (1.0s, 24 threads)
```

### vp test

```
The plugin "vite-tsconfig-paths" is detected. Vite now supports tsconfig paths resolution natively via the resolve.tsconfigPaths option. You can remove the plugin and set resolve.tsconfigPaths: true in your Vite config instead.

[31m⎯⎯⎯⎯⎯⎯⎯[39m[1m[41m Startup Error [49m[22m[31m⎯⎯⎯⎯⎯⎯⎯⎯[39m
Error: The following environment options are incompatible with the Cloudflare Vite plugin:
	- "ssr" environment: `resolve.external`: ["_http_agent","_http_client","_http_common","_http_incoming","_http_outgoing","_http_server","_stream_duplex","_stream_passthrough","_stream_readable","_stream_transform","_stream_wrap","_stream_writable","_tls_common","_tls_wrap","assert","assert/strict","async_hooks","buffer","child_process","cluster","console","constants","crypto","dgram","diagnostics_channel","dns","dns/promises","domain","events","fs","fs/promises","http","http2","https","inspector","inspector/promises","module","net","os","path","path/posix","path/win32","perf_hooks","process","punycode","querystring","readline","readline/promises","repl","stream","stream/consumers","stream/promises","stream/web","string_decoder","sys","timers","timers/promises","tls","trace_events","tty","url","util","util/types","v8","vm","wasi","worker_threads","zlib","node:sea","node:sqlite","node:test","node:test/reporters","node:_http_agent","node:_http_client","node:_http_common","node:_http_incoming","node:_http_outgoing","node:_http_server","node:_stream_duplex","node:_stream_passthrough","node:_stream_readable","node:_stream_transform","node:_stream_wrap","node:_stream_writable","node:_tls_common","node:_tls_wrap","node:assert","node:assert/strict","node:async_hooks","node:buffer","node:child_process","node:cluster","node:console","node:constants","node:crypto","node:dgram","node:diagnostics_channel","node:dns","node:dns/promises","node:domain","node:events","node:fs","node:fs/promises","node:http","node:http2","node:https","node:inspector","node:inspector/promises","node:module","node:net","node:os","node:path","node:path/posix","node:path/win32","node:perf_hooks","node:process","node:punycode","node:querystring","node:readline","node:readline/promises","node:repl","node:stream","node:stream/consumers","node:stream/promises","node:stream/web","node:string_decoder","node:sys","node:timers","node:timers/promises","node:tls","node:trace_events","node:tty","node:url","node:util","node:util/types","node:v8","node:vm","node:wasi","node:worker_threads","node:zlib","node:node:sea","node:node:sqlite","node:node:test","node:node:test/reporters"]
To resolve this issue, avoid setting `resolve.external` in your Cloudflare Worker environments.

```
