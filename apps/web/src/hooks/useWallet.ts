"use client";

import { useState } from "react";
import type { UserRole } from "@/types/certificate";

/**
 * hooks/useWallet.ts — Freighter / Stellar wallet sample stub.
 * Team: connect Freighter (or Wallets Kit), detect role on-chain.
 */
export function useWallet() {
  const [address, setAddress] = useState<string | null>(null);
  const [role, setRole] = useState<UserRole>("none");

  async function connect() {
    // TODO(team): open Freighter, set address, query roles contract
    setAddress("G...SAMPLE_PUBLIC_KEY");
    setRole("none");
  }

  function disconnect() {
    setAddress(null);
    setRole("none");
  }

  return { address, role, connect, disconnect };
}
