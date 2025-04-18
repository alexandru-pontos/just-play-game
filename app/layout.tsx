// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";
import Providers from './providers';

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className="bg-white text-black dark:bg-zinc-900 dark:text-white">
          <Providers>
            <TopBar />
            <Navbar />
            <main className="px-4 py-6 max-w-screen-xl mx-auto">{children}</main>
          </Providers>
        </body>
      </html>
    );
  }