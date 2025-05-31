"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search, Bell, User, Settings, LogOut, Command } from "lucide-react"
import { SidebarTrigger } from "@/components/ui/sidebar"

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
            <Badge className="absolute items-center -top-1 -right-1 h-5 w-5 p-0 text-xs bg-blue-500">3</Badge>
          </Button>

          {/* Profile */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-9 px-2">
                <Avatar className="h-7 w-7">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback className="text-xs">JD</AvatarFallback>
                </Avatar>
                <span className="ml-2 text-sm font-medium">John Doe</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600">
                <LogOut className="mr-2 h-4 w-4" />
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
