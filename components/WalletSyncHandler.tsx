"use client";

import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useAccount } from "wagmi";
import axios from "axios";

export default function WalletSyncHandler() {
  const { isConnected, address } = useAccount();
  const { user, isLoaded } = useUser();

  useEffect(() => {
    if (!isLoaded || !isConnected || !address || !user?.id) return;

    axios
      .post("http://localhost:3001/user/sync-wallet", {
        clerkId: user.id,
        email: user.emailAddresses[0]?.emailAddress,
        wallet: address,
      })
      .catch(console.error);
  }, [isConnected, address, isLoaded, user]);

  return null;
}
