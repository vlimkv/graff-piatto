// app/HeaderFooterWrapper.tsx
"use client";
import { usePathname } from "next/navigation";
import { GraffHeader } from "@/components/layout/GraffHeader";
import { GraffFooter } from "@/components/layout/GraffFooter";
import type { ReactNode } from "react";

export default function HeaderFooterWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  return (
    <div className="flex min-h-screen flex-col">
      {!isAdmin && <GraffHeader />}
      <main className={`flex-1 ${!isAdmin ? "" : ""}`}>
        {children}
      </main>
      {!isAdmin && <GraffFooter />}
    </div>
  );
}