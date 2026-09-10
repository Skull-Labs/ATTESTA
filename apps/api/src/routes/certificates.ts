import { Router } from "express";
import { z } from "zod";

export const certificatesRouter = Router();

const metadataSchema = z.object({
  studentName: z.string().min(1),
  studentAddress: z.string().min(1),
  course: z.string().min(1),
  institution: z.string().min(1),
  issuedAt: z.string().datetime().optional(),
  imageCid: z.string().optional(),
});

/**
 * Placeholder metadata endpoint.
 * Will upload certificate JSON to IPFS (Pinata) and return a CID.
 */
certificatesRouter.post("/metadata", (req, res) => {
  const parsed = metadataSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.flatten() });
    return;
  }

  res.status(501).json({
    message:
      "IPFS/Pinata upload not wired yet. Metadata validated successfully.",
    metadata: {
      ...parsed.data,
      issuedAt: parsed.data.issuedAt ?? new Date().toISOString(),
      platform: "Attesta",
      chain: "stellar",
    },
  });
});

certificatesRouter.get("/verify/:id", (req, res) => {
  res.status(501).json({
    message: "On-chain verification will query the Soroban certificate contract.",
    certificateId: req.params.id,
  });
});
