// © 2024-2026 Himanshu Sahni. Licensed under CC BY-NC 4.0.
// https://github.com/hsahni55h/hsahni55h.github.io — Attribution required.

import type { Metadata } from "next";
import Script from "next/script";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const GA_ID = "G-QS4E19ZC52";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const siteUrl = "https://hsahni55h.github.io";

export const metadata: Metadata = {
  title: {
    default: "Himanshu Sahni — AI & Robotics Engineer",
    template: "%s | Himanshu Sahni",
  },
  description:
    "Portfolio of Himanshu Sahni — AI & Robotics Engineer specializing in machine learning, autonomous systems, SLAM, and data science. Based in Gothenburg, Sweden.",
  keywords: [
    "AI Engineer",
    "Robotics Engineer",
    "Machine Learning",
    "Data Science",
    "SLAM",
    "ROS",
    "Deep Learning",
    "Portfolio",
    "Himanshu Sahni",
  ],
  authors: [{ name: "Himanshu Sahni" }],
  creator: "Himanshu Sahni",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Himanshu Sahni — AI & Robotics Engineer",
    description:
      "AI & Robotics Engineer specializing in machine learning, autonomous systems, and data science.",
    siteName: "Himanshu Sahni",
    images: [
      {
        url: `${siteUrl}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Himanshu Sahni — AI & Robotics Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Himanshu Sahni — AI & Robotics Engineer",
    description:
      "AI & Robotics Engineer specializing in machine learning, autonomous systems, and data science.",
    images: [`${siteUrl}/images/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
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
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <meta
          name="author"
          content="Himanshu Sahni — https://github.com/hsahni55h"
        />
        <meta
          name="copyright"
          content="© 2024-2026 Himanshu Sahni. CC BY-NC 4.0 — Attribution required."
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-blue-500 focus:text-white focus:rounded-lg"
        >
          Skip to content
        </a>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}