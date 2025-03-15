import TooltipCursor from "@/components/ui/cursor";
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
  title: "mxerf | portfolio",
  description: "mxerf's portfolio site",
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
        <TooltipCursor />
        {children}
      </body>
    </html>
  );
}
