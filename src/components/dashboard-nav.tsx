"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  MessageSquare,
  UserCircle,
  Settings,
  LogOut,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/hooks/use-auth";

const links = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/assistant", label: "Asisten AI", icon: MessageSquare },
  { href: "/dashboard/profile", label: "Profil", icon: UserCircle },
];

export function DashboardNav() {
  const pathname = usePathname();
  const { user, logOut } = useAuth();

  const getInitials = (name?: string | null) => {
    if (!name) return "U";
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  };

  return (
    <>
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src={user?.photoURL || ''} alt={user?.displayName || 'User'} data-ai-hint="user avatar" />
            <AvatarFallback>{getInitials(user?.displayName)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col truncate">
            <span className="font-semibold text-sm truncate">{user?.displayName || "Pengguna"}</span>
            <span className="text-xs text-muted-foreground truncate">{user?.email || ""}</span>
          </div>
          <SidebarTrigger className="ml-auto" />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {links.map((link) => (
            <SidebarMenuItem key={link.href}>
              <Link href={link.href}>
                <SidebarMenuButton
                  isActive={pathname === link.href}
                  tooltip={link.label}
                >
                  <link.icon className="h-4 w-4" />
                  <span>{link.label}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Pengaturan">
              <Settings className="h-4 w-4" />
              <span>Pengaturan</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
              <SidebarMenuButton tooltip="Keluar" onClick={() => logOut()}>
                <LogOut className="h-4 w-4" />
                <span>Keluar</span>
              </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </>
  );
}
