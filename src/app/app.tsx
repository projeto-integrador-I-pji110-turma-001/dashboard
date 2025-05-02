"use client";
import { Header } from "@/components/common/header";
import { AppProvider, useAppContext } from "@/context/app-context";
import { AuthProvider } from "@/context/auth-context";
import { useHasMounted } from "@/hooks/use-has-mounted";
import { usePathname } from "next/navigation";
import {
  BarChart,
  CalendarClock,
  CreditCard,
  Home,
  Landmark,
  Settings,
} from "lucide-react";
import { SideNav } from "@/components/common/side-nav";
import { SideNavSection } from "@/types/side-nav";
import { MarginWidthWrapper } from "@/components/common/margin-width-wrapper";
import { useCurrentPageTitle } from "@/hooks/use-current-page-title";

export const menuItems: SideNavSection[] = [
  {
    section: "Menu",
    items: [
      {
        title: "Visão Geral",
        path: "/",
        icon: <Home size={20} strokeWidth={1.5} />,
      },
    ],
  },
  {
    section: "Ativo",
    items: [
      {
        title: "Lastros",
        path: "/reguladora/lastros",
        icon: <Landmark size={20} strokeWidth={1.5} />,
      },
    ],
  },
  {
    section: "Passivo",
    items: [
      {
        title: "Fundos",
        path: "/reguladora/tokens-securitizados",
        icon: <BarChart size={20} strokeWidth={1.5} />,
      },
      {
        title: "Contas a pagar",
        path: "",
        icon: <CreditCard size={20} strokeWidth={1.5} />,
      },
      {
        title: "Pagamentos diários",
        path: "",
        icon: <CalendarClock size={20} strokeWidth={1.5} />,
      },
    ],
  },

  {
    section: "Ajustes",
    items: [
      {
        title: "Configurações",
        path: "/reguladora/configuracoes",
        icon: <Settings size={20} strokeWidth={1.5} />,
      },
    ],
  },
];

export default function App({ children }: { children: React.ReactNode }) {
  const { hasMounted } = useHasMounted();

  const title = useCurrentPageTitle();
  const isAuthPath = usePathname().startsWith("/auth");

  if (!hasMounted) {
    return <LoadingScreen />;
  }

  function LoadingScreen() {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <span className="text-center text-lg">Carregando...</span>
      </div>
    );
  }

  return (
    <AuthProvider>
      <AppProvider>
        <SideNav menuItems={menuItems} />
        <MarginWidthWrapper>
          {!isAuthPath && <Header title={title} />}
          <div>
            {hasMounted ? (
              <>
                <div className={`flex flex-col min-h-screen `}>
                  <main className="flex-grow w-full">{children}</main>
                </div>
              </>
            ) : (
              <LoadingScreen />
            )}
          </div>
        </MarginWidthWrapper>
      </AppProvider>
    </AuthProvider>
  );
}
