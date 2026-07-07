import type { Metadata } from "next";
import { Inter, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

const siteUrl = "https://harshitagarwal.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Harshit Agarwal — Software Engineer & AI/ML Engineer",
  description:
    "Portfolio of Harshit Agarwal, aspiring Software Engineer and AI/ML Engineer. B.Tech ECE student at JGEC, Research Intern at IIT Guwahati, building scalable software and applied ML systems.",
  keywords: [
    "Harshit Agarwal",
    "Software Engineer",
    "AI/ML Engineer",
    "Full Stack Developer",
    "JGEC",
    "IIT Guwahati",
    "Portfolio",
  ],
  authors: [{ name: "Harshit Agarwal" }],
  openGraph: {
    title: "Harshit Agarwal — Software Engineer & AI/ML Engineer",
    description:
      "Aspiring Software Engineer and AI/ML Engineer. B.Tech ECE at JGEC, Research Intern at IIT Guwahati.",
    url: siteUrl,
    siteName: "Harshit Agarwal",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harshit Agarwal — Software Engineer & AI/ML Engineer",
    description:
      "Aspiring Software Engineer and AI/ML Engineer. B.Tech ECE at JGEC, Research Intern at IIT Guwahati.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
