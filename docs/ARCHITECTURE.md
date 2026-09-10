# Architecture

## Layers (planned)

| Layer | Package | Responsibility |
|-------|---------|----------------|
| Presentation | `apps/web` | Landing, role dashboards, verify pages, wallet UX |
| Application API | `apps/api` | Metadata validation, IPFS pin, server helpers |
| Shared types | `packages/shared` | Cross-app TypeScript models |
| Settlement | `contracts/` | Roles + certificate Soroban programs |

> This repo is a **documentation + template scaffold**. Application and contract logic are owned by the team — crates and apps currently contain placeholders only.

## Trust boundaries (target design)

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

## Storage model (target)

1. Certificate image → IPFS CID  
2. Metadata JSON → IPFS CID  
3. `metadata_uri` stored in the certificate contract  

## Mapping from CertifyChain (EVM)

| CertifyChain | Attesta |
|--------------|---------|
| Solidity + Hardhat | Rust + Soroban |
| ERC-721 | Soroban certificate records |
| Roles.sol | `roles` contract |
| Wagmi / MetaMask | Freighter / Stellar wallet kit |
| Somnia Testnet | Stellar Testnet |
| Vite React SPA | Next.js App Router |
| Separate FE/BE repos | npm workspaces monorepo |
