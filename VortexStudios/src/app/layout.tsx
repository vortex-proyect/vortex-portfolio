import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VortexStudios — Automate Everything. Intelligent Web Systems.",
  description:
    "Digital agency specializing in modern web development, AI automation, and premium design. We create fast, secure, and visually impactful pages for enterprises, restaurants, startups, and brands.",
  keywords: [
    "digital agency",
    "web development",
    "AI automation",
    "premium web design",
    "Next.js",
    "VortexStudios",
    "web automation",
  ],
  authors: [{ name: "VortexStudios" }],
  creator: "VortexStudios",
  openGraph: {
    title: "VortexStudios — Automation Meets Design",
    description:
      "Built for Scale. Web automation studio focused on fast, secure, and visually impactful sites.",
    type: "website",
    locale: "en_US",
    siteName: "VortexStudios",
  },
  twitter: {
    card: "summary_large_image",
    title: "VortexStudios — Intelligent Web Systems",
    description:
      "Modern web development, AI automation, and premium design.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
