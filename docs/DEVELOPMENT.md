# Development guide

## Monorepo layout

| Path | Stack | Port |
|------|--------|------|
| `apps/web` | Next.js + TypeScript + Tailwind | 3000 |
| `apps/api` | Node + Express + TypeScript | 4000 |
| `packages/shared` | Shared TS types | — |
| `contracts/` | Rust Soroban workspace | — |

Root uses **npm workspaces**. Run scripts from the repo root unless noted.

## First-time setup

```bash
npm install
cp apps/web/.env.example apps/web/.env.local
cp apps/api/.env.example apps/api/.env
```

Install [Rust](https://rustup.rs/) and the [Stellar CLI](https://developers.stellar.org/docs/tools/cli). Add the Soroban WASM target if needed:

```bash
rustup target add wasm32v1-none
```

## Common scripts

```bash
npm run dev:web          # Next.js
npm run dev:api          # Express API
npm run build            # All JS packages that define build
npm run lint             # Workspace lint / typecheck
npm run contracts:test   # cargo test in contracts/
npm run contracts:build  # stellar contract build
```

## Conventions

- Prefer editing an existing package over adding a new workspace.
- Keep secrets in `.env` / `.env.local` — never commit them.
- Contract public APIs get short docs only where neighbors already do.
- Frontend wallet code belongs under `apps/web/src/lib` or `hooks`.
- Pinata / IPFS server logic belongs under `apps/api/src/services`.

## Suggested feature order

1. Deploy `roles` + `certificate` to Stellar Testnet; put IDs in env files.
2. Wire Freighter (or Stellar Wallets Kit) in `apps/web`.
3. Implement Pinata upload in the API; call it from the director mint flow.
4. Student dashboard + public `/verify/[id]` page.
