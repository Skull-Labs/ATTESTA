/**
 * services/ipfs.ts — Pinata / IPFS uploads (sample stub).
 *
 * Team: pin certificate images + metadata JSON; return CIDs / ipfs:// URIs.
 */
export async function pinJson(_data: unknown): Promise<string> {
  // TODO(team): use PINATA_JWT from config/env.ts
  throw new Error("Sample stub — implement Pinata JSON pin");
}

export async function pinFile(_file: Buffer, _filename: string): Promise<string> {
  // TODO(team): upload image bytes to Pinata
  throw new Error("Sample stub — implement Pinata file pin");
}
