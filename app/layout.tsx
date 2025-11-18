// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Manrope, Playfair_Display } from "next/font/google";
import { GraffHeader } from "@/components/layout/GraffHeader";
import { GraffFooter } from "@/components/layout/GraffFooter";
import type { ReactNode } from "react";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Graff Piatto",
  description: "Дом столовых нарядов премиального качества",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="ru"
      className={`${manrope.variable} ${playfair.variable}`}
    >
      <body
        className={`${manrope.className} bg-white text-[#303F56] antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <GraffHeader />

          <main className="flex-1 pt-16 xl:pt-20">
            {children}
          </main>

          <GraffFooter />
        </div>
      </body>
    </html>
  );
}