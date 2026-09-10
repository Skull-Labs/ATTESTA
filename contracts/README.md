# Attesta contracts (Soroban)

Rust workspace with two contracts:

| Crate | Purpose |
|-------|---------|
| `roles` | Admin / Director / Student role registry |
| `certificate` | Mint and query certificate records + ownership |

## Commands

From the **repo root**:

```bash
npm run contracts:test
npm run contracts:build
```

Or from this directory:

```bash
cargo test
stellar contract build
```

## Deploy (Testnet)

1. Create and fund an identity (`stellar keys generate` + Friendbot).
2. Build WASM, then:

```bash
stellar contract deploy \
  --wasm target/wasm32v1-none/release/roles.wasm \
  --source-account <ALIAS> \
  --network testnet

stellar contract deploy \
  --wasm target/wasm32v1-none/release/certificate.wasm \
  --source-account <ALIAS> \
  --network testnet
```

3. Call `initialize` on each contract with the admin address.
4. Put contract IDs into `apps/web/.env.local` and `apps/api/.env`.
