import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeModeScript } from "flowbite-react";
import { Nav } from "./component/nav"; // Import the header
import { FooterCmp } from "./component/footer"; // Import the footer
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Flowbite React",
  description: "Generated by create flowbite react",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>
      <body className={inter.className}>
        <Nav /> {/* Include the header */}
        {children}
        <FooterCmp /> {/* Include the footer */}
      </body>
    </html>
  );
}
