/**
 * services/stellar.ts — Soroban / RPC helpers (sample stub).
 *
 * Team: read certificate + roles contracts via Stellar RPC.
 */
export async function getCertificate(_id: string): Promise<unknown> {
  // TODO(team): invoke certificate contract get_* with STELLAR_RPC_URL
  throw new Error("Sample stub — implement Soroban certificate read");
}

export async function isDirector(_address: string): Promise<boolean> {
  // TODO(team): invoke roles contract is_director
  throw new Error("Sample stub — implement roles check");
}
