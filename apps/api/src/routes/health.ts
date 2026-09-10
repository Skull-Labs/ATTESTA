import { Router } from "express";

/**
 * routes/health.ts — liveness / readiness sample.
 * GET /health → { status: "ok" }
 */
export const healthRouter = Router();

healthRouter.get("/", (_req, res) => {
  res.json({
    status: "ok",
    service: "attesta-api",
    timestamp: new Date().toISOString(),
  });
});
