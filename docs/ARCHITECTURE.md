# Architecture

## Layers

| Layer | Package | Responsibility |
|-------|---------|----------------|
| Presentation | `apps/web` | Landing, role dashboards, verify pages, wallet UX |
| Application API | `apps/api` | Metadata validation, IPFS pin, server helpers |
| Shared types | `packages/shared` | Cross-app TypeScript models |
| Settlement | `contracts/` | Roles + certificate Soroban programs |

## Trust boundaries

- **Browser** talks to Stellar RPC / wallets for signing; never holds issuer secrets for production minting beyond the user's own key.
- **API** holds Pinata credentials and may later hold server-side indexing; it does not replace on-chain verification.
- **Contracts** are source of truth for “was this certificate issued and who owns it?”

## Planned contracts

### `roles`
- Initialize admin
- Grant / check Director and Student roles

### `certificate`
- Mint certificate record with metadata URI
- Query certificate + ownership

## Storage model

1. Certificate image → IPFS CID  
2. Metadata JSON → IPFS CID  
3. `metadata_uri` stored in the certificate contract  

## Stack choices

| Concern | Choice |
|---------|--------|
| Smart contracts | Rust + Soroban |
| Certificate records | Soroban on-chain data |
| Access control | `roles` contract |
| Wallet | Freighter / Stellar wallet kit |
| Network | Stellar Testnet |
| Frontend | Next.js App Router |
| Repo layout | npm workspaces monorepo |
