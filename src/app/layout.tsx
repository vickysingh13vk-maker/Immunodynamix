"use client";

import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased`}>
      <head>
        <title>ImmunoDynamix | Premium Colostrum Experience</title>
        <meta
          name="description"
          content="Experience next-generation immune wellness with ImmunoDynamix premium bovine colostrum. Science-backed, beautifully crafted nutrition for modern families."
        />
      </head>
      <body
        className="min-h-full flex flex-col"
        style={{ fontFamily: "var(--font-outfit), sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
