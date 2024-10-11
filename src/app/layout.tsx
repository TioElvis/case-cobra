import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// @components
import { Navbar } from "./components/navbar";

const inter = Inter({ weight: ["500"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Case-Cobra | custom high-quality phone cases",
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang="it">
      <body className={inter.className}>
        <Navbar />
        <main className="flex grainy-light flex-col min-h-[calc(100vh-3.5rem-1px)]">
          {children}
        </main>
      </body>
    </html>
  );
}
