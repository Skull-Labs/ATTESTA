# Attesta API

Node.js + TypeScript service for certificate metadata, IPFS pinning, and Stellar helpers.

## Scripts

```bash
npm run dev --workspace=@attesta/api
npm run build --workspace=@attesta/api
```

## Endpoints (scaffold)

| Method | Path | Description |
|--------|------|-------------|
| GET | `/health` | Liveness |
| POST | `/api/certificates/metadata` | Validate + (soon) pin metadata |
| GET | `/api/certificates/verify/:id` | On-chain verify (planned) |
