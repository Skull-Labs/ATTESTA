# Attesta Web — folder guide (samples)

Next.js App Router + TypeScript + Tailwind. Sample files show **what belongs where**.

## Folder map

```
apps/web/
├── .env.example
├── public/                 # Static assets (logos, images)
├── src/
│   ├── app/                # Routes (App Router)
│   │   ├── layout.tsx
│   │   ├── page.tsx              ✅ sample landing
│   │   └── verify/page.tsx       ✅ sample verify route
│   ├── components/         # Reusable UI
│   │   ├── Header.tsx
│   │   └── CertificateCard.tsx
│   ├── config/             # Env / network config
│   │   └── stellar.ts
│   ├── hooks/              # React hooks
│   │   └── useWallet.ts          ⬜ Freighter stub
│   ├── lib/                # Non-UI helpers
│   │   └── api.ts                ✅ sample /health client
│   └── types/              # TS models
│       └── certificate.ts
```

## Run

```bash
npm run dev --workspace=@attesta/web
# http://localhost:3000
# http://localhost:3000/verify
```
