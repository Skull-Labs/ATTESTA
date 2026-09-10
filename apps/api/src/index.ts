import "dotenv/config";
import express from "express";

/**
 * Attesta API template.
 * Team: add routes, Pinata/IPFS, and Stellar helpers here.
 */
const app = express();
const port = Number(process.env.PORT ?? 4000);

app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.listen(port, () => {
  console.log(`Attesta API template on http://localhost:${port}`);
});
