import { Calendar, Home, Inbox, LogOut, NotebookIcon, Pencil, Search, Settings } from "lucide-react"
import { RiGraduationCapFill } from "react-icons/ri";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "Payment Info",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Register courses",
    url: "#",
    icon: Pencil,
  },
  {
    title: "Courses",
    url: "#",
    icon: NotebookIcon,
  },
  {
    title: "Logout",
    url: "#",
    icon: LogOut,
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="block">
      <SidebarContent className="bg-purple-700 block">
        <SidebarGroup>
          <div className="flex justify-center"><RiGraduationCapFill className="text-white mb-20 mt-10" size={55} /></div>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="mb-8 text-white">
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="p-5">
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}