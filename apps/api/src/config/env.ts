import { z } from "zod";

const envSchema = z.object({
  PORT: z.coerce.number().default(4000),
  CORS_ORIGIN: z.string().default("http://localhost:3000"),
  STELLAR_NETWORK: z
    .enum(["testnet", "futurenet", "mainnet", "standalone"])
    .default("testnet"),
  STELLAR_RPC_URL: z
    .string()
    .default("https://soroban-testnet.stellar.org"),
  ROLES_CONTRACT_ID: z.string().optional(),
  CERTIFICATE_CONTRACT_ID: z.string().optional(),
  PINATA_JWT: z.string().optional(),
  PINATA_GATEWAY: z.string().optional(),
});

export const env = envSchema.parse(process.env);
