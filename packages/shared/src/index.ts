export type UserRole = "admin" | "director" | "student" | "none";

export interface CertificateMetadata {
  studentName: string;
  studentAddress: string;
  course: string;
  institution: string;
  issuedAt: string;
  imageCid?: string;
  metadataCid?: string;
  platform: "Attesta";
  chain: "stellar";
}

export interface NetworkConfig {
  name: "testnet" | "futurenet" | "mainnet" | "standalone";
  rpcUrl: string;
  networkPassphrase: string;
}

export const STELLAR_TESTNET: NetworkConfig = {
  name: "testnet",
  rpcUrl: "https://soroban-testnet.stellar.org",
  networkPassphrase: "Test SDF Network ; September 2015",
};

export const ROLES = ["admin", "director", "student"] as const;
