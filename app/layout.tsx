import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { TopNavigation } from "@/components/top-navigation";
import { Toaster } from "@/components/ui/toaster";
import { ClerkProvider } from "@clerk/nextjs";
import { Web3Provider } from "./providers";
import WalletSyncHandler from "@/components/WalletSyncHandler";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chainloom - Programmable Automation Platform",
  description:
    "Create, schedule, and monitor automation jobs with webhooks and smart contracts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <Web3Provider>
        <html lang="en" className="light">
          <body className={inter.className}>
            <SidebarProvider defaultOpen={true}>
              <div className="flex min-h-screen bg-gray-50/30">
                <AppSidebar />
                <div className="flex-1 flex flex-col w-full transition-all duration-300 ease-in-out">
                  <TopNavigation />
                  <WalletSyncHandler/>
                  <main className="flex-1 p-6 w-full max-w-[2000px] mx-auto">
                    {children}
                  </main>
                </div>
              </div>
              <Toaster />
            </SidebarProvider>
          </body>
        </html>
      </Web3Provider>
    </ClerkProvider>
  );
}
