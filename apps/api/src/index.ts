import "dotenv/config";
import express from "express";
import { env } from "./config/env";
import { errorHandler } from "./middleware/errorHandler";
import { healthRouter } from "./routes/health";
import { certificatesRouter } from "./routes/certificates";

/**
 * apps/api entrypoint (sample wiring).
 *
 * Folders:
 * - config/     → env + constants
 * - middleware/ → Express middleware
 * - routes/     → HTTP route handlers
 * - services/   → IPFS, Stellar, DB, etc.
 */
const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    name: "Attesta API",
    docs: "See apps/api/README.md for folder guide",
    samples: ["/health", "/api/certificates/metadata", "/api/certificates/verify/:id"],
  });
});

app.use("/health", healthRouter);
app.use("/api/certificates", certificatesRouter);

app.use(errorHandler);

app.listen(env.port, () => {
  console.log(`Attesta API sample on http://localhost:${env.port}`);
});
