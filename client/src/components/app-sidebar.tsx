import * as React from "react";
import {
  BookOpen,
  Bot,
  Command,

  LifeBuoy,
  

  Send,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";

import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "Daoud_DX",
    email: "daoudhdj@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "age of visitors",
      url: "/age-of-visitors",
      icon: SquareTerminal,
      isActive: true,
      items: [],
    },
    {
      title: " total visitors-area",
      url: "/number-of-visitors-area",
      icon: Bot,
      items: [],
    },
    {
      title: "total visitors-area-bar",
      url: "/number-of-visitors-bar",
      icon: BookOpen,
      items: [],
    },
    {
      title: "users",
      url: "/users",
      icon: Settings2,
      items: [
        
      ],
    },
    {
      title: "users-location",
      url: "/location",
      icon: Settings2,
      items: [
        
      ],
    },
   
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
  projects: [
    
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <a href="/">
                    <span className="truncate font-semibold">Brand X</span>
                  </a>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
       
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
