import { usePathname } from "next/navigation";
import { menuItems } from "@/app/app";
import { useMemo } from "react";

export function useCurrentPageTitle() {
  const pathname = usePathname();

  const title = useMemo(() => {
    for (const section of menuItems) {
      for (const item of section.items) {
        if (item.path === pathname) {
          return item.title;
        }
      }
    }

    return ""; // fallback caso não encontre
  }, [pathname]);

  return title;
}
