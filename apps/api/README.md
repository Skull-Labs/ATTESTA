# Attesta API — folder guide (samples)

Node.js + Express + TypeScript. Sample files show **what belongs where**.
Replace stubs marked `TODO(team)` with real logic.

## Folder map

```
apps/api/
├── .env.example          # Copy to .env
├── package.json
├── src/
│   ├── index.ts          # App entry — mount routers
│   ├── config/           # Environment & constants
│   │   └── env.ts
│   ├── middleware/       # Express middleware
│   │   └── errorHandler.ts
│   ├── routes/           # HTTP routes
│   │   ├── health.ts           ✅ sample health check
│   │   └── certificates.ts     ⬜ stubs for metadata + verify
│   └── services/         # Business / external APIs
│       ├── ipfs.ts             ⬜ Pinata stub
│       └── stellar.ts          ⬜ Soroban RPC stub
```

## Try the sample health check

```bash
npm run dev --workspace=@attesta/api
curl http://localhost:4000/health
```
