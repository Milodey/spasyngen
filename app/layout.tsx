import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Providers } from "./providers";
// import Script from "next/script";
import Img from "next/image";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SynGenData - AI-Powered Synthetic Data",
  description: "SynGenData - AI-Powered Synthetic Data",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
        <div style={{ display: "none" }}>
          <Img
            src="https://mapmyvisitors.com/tracker?d=8pIo1DxatCrgyeeAmdc9crsQpdHQ_zPx8fpKNhwnfgw"
            width="1"
            height="1"
            alt="Visitor tracker"
          />
        </div>
        {/* <Script
          src="//mapmyvisitors.com/map.js?d=lTf7LYZCw0KHlsHgbd4S92SPLsnPT7MNwxO8zuOHAgU&cl=ffffff&w=a"
          strategy="afterInteractive"
          type="text/javascript"
          id="mapmyvisitors"
        /> */}
      </body>
    </html>
  );
}
