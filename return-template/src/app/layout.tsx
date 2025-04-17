// app/layout.tsx - Server Component
import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ThemeProviderWrapper } from "@/components/Themes/ThemeProviderWrapper";

// Load Inter font
const inter = Inter({ subsets: ["latin"] });

// Metadata can only be exported from a Server Component
export const metadata: Metadata = {
  title: "John Doe | Full Stack Developer",
  description:
    "Portfolio of John Doe, a Full Stack Developer specializing in React and Node.js",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8FAFC" },
    { media: "(prefers-color-scheme: dark)", color: "#0F172A" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.className}>
      <body>
        <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
      </body>
    </html>
  );
}
