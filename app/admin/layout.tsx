import type { ReactNode } from "react";
import { Manrope, Playfair_Display } from "next/font/google";
import "./../globals.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["300","400","500","600","700","800"],
  variable: "--font-manrope",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500","700"],
  variable: "--font-playfair",
});

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <main className={`${manrope.className} ${playfair.className} bg-gray-50 text-[#303F56] antialiased min-h-screen`}>
      {children}
    </main>
  );
}