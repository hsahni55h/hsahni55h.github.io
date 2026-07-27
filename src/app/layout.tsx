// © 2024-2026 Himanshu Sahni. Licensed under CC BY-NC 4.0.
// https://github.com/hsahni55h/hsahni55h.github.io — Attribution required.

import type { Metadata } from "next";
import Script from "next/script";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Sidebar } from "@/components/sidebar";
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
    default: "Himanshu Sahni — Data Scientist & AI Engineer",
    template: "%s | Himanshu Sahni",
  },
  description:
    "Portfolio of Himanshu Sahni — Data Scientist & AI Engineer at Volvo Group. Specializing in machine learning, generative AI, predictive modeling, and building production-ready data-driven solutions. Based in Gothenburg, Sweden.",
  keywords: [
    "Data Scientist",
    "AI Engineer",
    "Machine Learning",
    "Generative AI",
    "MLOps",
    "Deep Learning",
    "Predictive Modeling",
    "Portfolio",
    "Himanshu Sahni",
    "Volvo Group",
  ],
  authors: [{ name: "Himanshu Sahni" }],
  creator: "Himanshu Sahni",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Himanshu Sahni — Data Scientist & AI Engineer",
    description:
      "Data Scientist & AI Engineer specializing in machine learning, generative AI, and building production-ready solutions.",
    siteName: "Himanshu Sahni",
    images: [
      {
        url: `${siteUrl}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Himanshu Sahni — Data Scientist & AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Himanshu Sahni — Data Scientist & AI Engineer",
    description:
      "Data Scientist & AI Engineer specializing in machine learning, generative AI, and building production-ready solutions.",
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
      <body className="min-h-screen">
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
        <ThemeProvider>
          <Sidebar />
          <main id="main-content" className="md:ml-56 min-h-screen pt-16 md:pt-0">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}