# Architecture

## Layers

| Layer | Package | Responsibility |
|-------|---------|----------------|
| Presentation | `apps/web` | Landing, role dashboards, verify pages, wallet UX |
| Application API | `apps/api` | Metadata validation, IPFS pin, helpers that should not run in the browser |
| Shared types | `packages/shared` | Cross-app TypeScript models |
| Settlement | `contracts/` | Roles + certificate Soroban programs |

## Trust boundaries

- **Browser** talks to Stellar RPC / wallets for signing; never holds issuer secrets for production minting beyond the user's own key.
- **API** holds Pinata credentials and may later hold server-side indexing; it does not replace on-chain verification.
- **Contracts** are source of truth for “was this certificate issued and who owns it?”

## Contracts

### `roles`

- `initialize(admin)`
- `grant_director` / `grant_student`
- `is_director` / `is_student` / `get_admin`

### `certificate`

- `initialize(admin)`
- `mint(issuer, student, metadata_uri) -> id`
- `get_certificate(id)`
- `owns(student, id)`

Cross-contract role checks (certificate calling roles) are intentionally deferred until deploy addresses are known; the scaffold keeps contracts independent for early testing.

## Storage model

1. Certificate image → IPFS CID  
2. Metadata JSON (student, course, institution, `image` CID) → IPFS CID  
3. `metadata_uri` (e.g. `ipfs://…`) stored in the certificate contract  

## Mapping from CertifyChain (EVM)

| CertifyChain | Attesta |
|--------------|---------|
| Solidity + Hardhat | Rust + Soroban |
| ERC-721 | Soroban certificate records (NFT-like) |
| Roles.sol | `roles` contract |
| Wagmi / MetaMask | Freighter / Stellar wallet kit (planned) |
| Somnia Testnet | Stellar Testnet |
| Vite React SPA | Next.js App Router |
| Separate FE/BE repos | npm workspaces monorepo |
