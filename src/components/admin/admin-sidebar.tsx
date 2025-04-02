"use client"

import * as React from "react"
import {

  IconChartBar,
  IconDashboard,

  IconListDetails,

  IconSettings,

} from "@tabler/icons-react"


import { NavMain } from "@/components/admin/nav-main"
import { NavSecondary } from "@/components/admin/nav-secondary"
import { NavUser } from "@/components/admin/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Logo from "../logo/logo"
import Link from "next/link"
import { useAuth } from "@/context/auth-context"


const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/admin/dashboard/",
      icon: IconDashboard,
    },
    {
      title: "Users",
      url: "/admin/user/",
      icon: IconListDetails,
    },
    {
      title: "Blogs",
      url: "/admin/blog/",
      icon: IconChartBar,
    },
   
  ],
  
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: IconSettings,
    },

  ],

}

export function AdminSideBar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user,logout } = useAuth()
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <Link href="/">
                
                <Logo/>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} handleLogout={logout}/>
      </SidebarFooter>
    </Sidebar>
  )
}


