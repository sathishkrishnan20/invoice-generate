import { ThemeProvider } from "@/providers/theme-provider";
import Navbar from "./components/navbar/Navbar";

import "./globals.css";
import { League_Spartan } from "next/font/google";

const inter = League_Spartan({ subsets: ["latin"] });

export const metadata = {
  title: "Invoice App",
  description: "Invoice App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="bg-background" lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}