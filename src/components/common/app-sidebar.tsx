import {
  ChartBar,
  Users,
  FileText,
  Calendar,
  Settings,
  Home,
  Paperclip,
  CalendarClock,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";

export const menuItems = [
  {
    title: "Visão geral",
    icon: Home,
    url: "/",
  },
  {
    title: "Pacientes",
    icon: Users,
    url: "/pacientes",
  },
  {
    title: "Atendimentos",
    icon: CalendarClock,
    url: "/atendimentos",
  },
  {
    title: "Doações",
    icon: ChartBar,
    url: "/doacoes",
  },
  {
    title: "Empréstimos",
    icon: FileText,
    url: "/emprestimos",
  },
  {
    title: "Calendário",
    icon: Calendar,
    url: "/calendario",
  },
  
];

export function AppSidebar() {
  return (
    <Sidebar className="p-4 bg-sidebar">
      <SidebarHeader className="flex">
        <Image
          src="/assets/logo/logo-hospital.png"
          alt="Logo"
          width={180}
          height={50}
        />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="flex justify-center gap-4">
          <SidebarGroupLabel>MENU</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="flex justify-center gap-4">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
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
  );
}
