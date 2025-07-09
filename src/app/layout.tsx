import type { Metadata } from "next";
import {
  Geologica,
  Kanit,
  MuseoModerno,
  Source_Code_Pro,
} from "next/font/google";
import "./globals.css";

const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
});

const kanit = Kanit({
  variable: "--font-kanit",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const geologica = Geologica({
  variable: "--font-geologica",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const museoModerno = MuseoModerno({
  variable: "--font-museo-moderno",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "mxerf — Full-stack разработчик",
  description:
    "Портфолио Full-stack разработчика: проекты на React, Next.js и Node.js, CMS-решения и eCommerce. Специализируюсь на современных веб-приложениях.",
  keywords: [
    "Fullstack разработчик",
    "разработка сайтов",
    "разработка приложений",
    "разработка сервисов",
    "разработка API",
    "разработка B2B",
    "разработка CMS",
    "разработка eCommerce",
    "разработка CRM",
    "разработка ботов",
    "React",
    "Next.js",
    "NestJS",
    "Node.js",
    "eCommerce",
    "portfolio",
    "web development",
  ],
  authors: [{ name: "mxerf", url: "https://mxerf.vercel.app" }],
  creator: "mxerf",
  applicationName: "mxerf Portfolio",
  referrer: "origin-when-cross-origin",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://mxerf.vercel.app",
    title: "mxerf — Full-stack разработчик",
    description:
      "Портфолио Full-stack разработчика: проекты на React, Next.js и Node.js, CMS-решения и eCommerce. Специализируюсь на современных веб-приложениях.",
    siteName: "mxerf.vercel.app",
    images: [
      {
        url: "https://mxerf.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Portfolio of mxerf",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "mxerf — Full-stack разработчик",
    description:
      "Портфолио Full-stack разработчика: проекты на React, Next.js и Node.js. Современные веб-приложения.",
    creator: "@mxerf",
    images: ["https://mxerf.vercel.app/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  alternates: {
    canonical: "https://mxerf.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourceCodePro.variable} ${kanit.variable} ${geologica.variable} ${museoModerno.variable} antialiased dark`}
      >
        {children}
      </body>
    </html>
  );
}
