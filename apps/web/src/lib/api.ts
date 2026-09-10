import { stellarConfig } from "@/config/stellar";

/**
 * lib/api.ts — helpers to call apps/api (sample).
 * Team: add typed clients for metadata upload, verify, etc.
 */
export async function checkApiHealth(): Promise<{ status: string }> {
  const res = await fetch(`${stellarConfig.apiUrl}/health`);
  if (!res.ok) {
    throw new Error(`API health failed: ${res.status}`);
  }
  return res.json();
}
