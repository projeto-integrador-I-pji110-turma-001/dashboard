"use client";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

export function MarginWidthWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isAuthPath = pathname.includes("reguladora/auth");
  return (
    <div
      className={`w-full h-full ${
        isAuthPath ? "ml-0 pl-0" : "flex pl-20"
      } flex-col  lg:ml-0 relative`}
    >
      {children}
    </div>
  );
}
