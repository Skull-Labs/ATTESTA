/**
 * config/ — app configuration loaded from environment variables.
 * Team: add contract IDs, Pinata keys, RPC URLs, etc.
 */
export const env = {
  port: Number(process.env.PORT ?? 4000),
  corsOrigin: process.env.CORS_ORIGIN ?? "http://localhost:3000",
  stellarNetwork: process.env.STELLAR_NETWORK ?? "testnet",
  stellarRpcUrl:
    process.env.STELLAR_RPC_URL ?? "https://soroban-testnet.stellar.org",
  rolesContractId: process.env.ROLES_CONTRACT_ID ?? "",
  certificateContractId: process.env.CERTIFICATE_CONTRACT_ID ?? "",
  pinataJwt: process.env.PINATA_JWT ?? "",
  pinataGateway: process.env.PINATA_GATEWAY ?? "",
};
