import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Said Ahrikenchikh | Embedded & AI Engineer",
  description: "Portfolio of Said Ahrikenchikh, an Embedded Systems, AI, and Web Engineer crafting intelligent interfaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-slate-950 text-slate-300`}
      >
        {/* LAYOUT DEBUG BANNER - ABSOLUTELY ON TOP */}
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '50px', backgroundColor: 'purple', color: 'white', zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
          LAYOUT DEBUG: IF YOU SEE THIS, THE SITE IS LIVE
        </div>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
