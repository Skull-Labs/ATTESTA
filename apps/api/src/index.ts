import "dotenv/config";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { env } from "./config/env";
import { healthRouter } from "./routes/health";
import { certificatesRouter } from "./routes/certificates";

const app = express();

app.use(helmet());
app.use(
  cors({
    origin: env.CORS_ORIGIN,
  }),
);
app.use(morgan("dev"));
app.use(express.json({ limit: "2mb" }));

app.use("/health", healthRouter);
app.use("/api/certificates", certificatesRouter);

app.get("/", (_req, res) => {
  res.json({
    name: "Attesta API",
    version: "0.1.0",
    network: env.STELLAR_NETWORK,
  });
});

app.listen(env.PORT, () => {
  console.log(`Attesta API listening on http://localhost:${env.PORT}`);
});
