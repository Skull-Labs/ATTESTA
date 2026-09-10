import { Router } from "express";

/**
 * routes/certificates.ts — certificate HTTP API (sample stubs).
 *
 * Team should implement:
 * - POST /metadata  → validate body, pin JSON/image to IPFS, return CID
 * - GET  /verify/:id → look up on-chain certificate + return metadata
 */
export const certificatesRouter = Router();

certificatesRouter.post("/metadata", (_req, res) => {
  // TODO(team): validate request body, call services/ipfs.ts
  res.status(501).json({
    message: "Sample stub — implement Pinata metadata upload here",
  });
});

certificatesRouter.get("/verify/:id", (req, res) => {
  // TODO(team): call services/stellar.ts then fetch IPFS metadata
  res.status(501).json({
    message: "Sample stub — implement on-chain + IPFS verify here",
    certificateId: req.params.id,
  });
});
