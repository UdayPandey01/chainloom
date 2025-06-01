import { Hono } from "hono";
import { prisma } from "../lib/db";
export const userRouter = new Hono();

userRouter.post("/sync-wallet", async (c) => {
  try {
    const { clerkId, email, wallet } = await c.req.json();

    const userData = await prisma.user.upsert({
      where: { clerkId },
      update: { email, walletAddress: wallet, isWalletLinked: true },
      create: {
        clerkId: clerkId,
        email: email,
        walletAddress: wallet,
        isWalletLinked: true,
      },
    });

    console.log("User synced:", userData);
    return c.json({ success: true, userData });
  } catch (e) {
    console.log("Sync wallet error", e);
    return c.json({ success: false, error: "Failed to sync wallet" }, 500);
  }
});
