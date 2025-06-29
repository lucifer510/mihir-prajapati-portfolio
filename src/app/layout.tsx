import { PostHogProvider } from "@/components/PostHogProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Space_Grotesk({ subsets: ["latin"], weight: ["500", "600", "700"] });

export const metadata: Metadata = {
  title: "Mihir Prajapati",
  description: "Portfolio of Mihir Prajapati, a passionate Java developer specializing in modern web technologies, React, Next.js, and innovative digital solutions.",
  keywords: "Mihir Prajapati, Full Stack Developer, React, Next.js, Web Development, Portfolio, PowerBI",
  authors: [{ name: "Mihir Prajapati" }],
  openGraph: {
    title: "Mihir Prajapati",
    description: "Portfolio of Mihir Prajapati, a passionate Java developer specializing in modern web technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <PostHogProvider>
          <ThemeProvider>
            {/* <AnimatedBackground /> */}
            {children}
          </ThemeProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}