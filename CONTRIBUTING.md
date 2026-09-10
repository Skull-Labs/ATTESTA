# Contributing to Attesta

Thanks for helping build verifiable credentials on Stellar.

## Workflow

1. Fork and clone the repo (or work on a feature branch from `main`).
2. Create a branch: `feat/short-description` or `fix/short-description`.
3. Install deps: `npm install`.
4. Make a focused change; add tests when you touch contract or API logic.
5. Run relevant checks (`npm run lint`, `npm run contracts:test`, etc.).
6. Open a PR with a clear summary and test plan.

## Commit style

Use imperative, specific subjects (e.g. `Add Freighter connect to student dashboard`). Prefer one logical feature per commit when practical.

## Code standards

- **TypeScript** for `apps/*` and `packages/*`
- **Rust + Soroban** for `contracts/`
- Match existing naming, imports, and comment density
- Do not commit secrets, build artifacts, or drive-by refactors

## Questions

Open a GitHub issue in [Skull-Labs/ATTESTA](https://github.com/Skull-Labs/ATTESTA).
