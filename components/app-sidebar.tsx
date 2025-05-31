"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  Plus,
  FileText,
  Layers,
  Settings,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Create Job",
    url: "/create",
    icon: Plus,
  },
  {
    title: "Job Logs",
    url: "/logs",
    icon: FileText,
  },
  {
    title: "Templates",
    url: "/templates",
    icon: Layers,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="border-r border-gray-200/60 transition-all duration-300 ease-in-out bg-white/50 backdrop-blur-sm">
      <SidebarHeader className="p-6 border-b border-gray-200/60">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-violet-600 rounded-lg flex items-center justify-center shadow-sm">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-lg tracking-tight bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              ChainMesh
            </span>
          </div>
          <SidebarTrigger className="md:hidden hover:bg-gray-100 rounded-md" />
        </div>
      </SidebarHeader>
      <SidebarContent className="p-4">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.url}
                    tooltip={item.title}
                    className="h-10 px-3 rounded-lg transition-all duration-200 hover:bg-gray-100/80 data-[active=true]:bg-blue-50/80 data-[active=true]:text-blue-700 data-[active=true]:border-l-2 data-[active=true]:border-blue-500 group"
                  >
                    <Link href={item.url} className="flex items-center gap-3">
                      <item.icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                      <span className="font-medium">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
