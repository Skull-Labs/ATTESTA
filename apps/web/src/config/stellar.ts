/**
 * Stellar / Soroban network settings for the Attesta frontend.
 */
export const stellarConfig = {
  network: process.env.NEXT_PUBLIC_STELLAR_NETWORK ?? "testnet",
  rpcUrl:
    process.env.NEXT_PUBLIC_STELLAR_RPC_URL ??
    "https://soroban-testnet.stellar.org",
  networkPassphrase: "Test SDF Network ; September 2015",
  rolesContractId: process.env.NEXT_PUBLIC_ROLES_CONTRACT_ID ?? "",
  certificateContractId:
    process.env.NEXT_PUBLIC_CERTIFICATE_CONTRACT_ID ?? "",
  apiUrl: process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000",
} as const;
