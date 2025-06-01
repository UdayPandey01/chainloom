"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Search, Bell, User, Settings, LogOut, Command } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  ClerkLoaded,
  ClerkLoading,
  UserButton,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export function TopNavigation() {
  return (
    <header className="h-16 border-b border-gray-200/60 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="flex items-center justify-between h-full px-6">
        <div className="flex items-center gap-4">
          <SidebarTrigger />
        </div>

        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search jobs..."
              className="w-80 pl-10 pr-16 h-9 bg-gray-50 border-gray-200 focus:bg-white transition-colors"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
              <Command className="w-3 h-3 text-gray-400" />
              <span className="text-xs text-gray-400">K</span>
            </div>
          </div>

          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative h-9 w-9">
            <Bell className="w-4 h-4" />
            <Badge className="absolute items-center -top-1 -right-1 h-5 w-5 p-0 text-xs bg-blue-500">
              3
            </Badge>
          </Button>

          <SignedIn>
            <ClerkLoaded>
              <div className="flex items-center gap-4">
                <ConnectButton />
                <UserButton afterSignOutUrl="/" />
              </div>
            </ClerkLoaded>
            <ClerkLoading>
              <Loader2 className="size-8 animate-spin text-slate-400" />
            </ClerkLoading>
          </SignedIn>
          <SignedOut>
            <div className="flex items-center gap-2">
              <Link href="/sign-in">
                <Button variant="ghost" size="sm">
                  Sign in
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button size="sm">Sign up</Button>
              </Link>
            </div>
          </SignedOut>
        </div>
      </div>
    </header>
  );
}
