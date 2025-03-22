import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Providers } from "./providers";
import Script from "next/script";
// import Img from "next/image";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SynGenData - AI-Powered Synthetic Data",
  description: "SynGenData - AI-Powered Synthetic Data",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (

    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ✅ GTM Script in Head */}
        {/* <Script id="gtm-head" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KMTJ8DMK');
          `}
        </Script> */}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}>

        {/* <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KMTJ8DMK"
          height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript> */}

        <Providers>
          <Navbar />
          {children}
        </Providers>

        {/* <Script
          src="//mapmyvisitors.com/map.js?d=lTf7LYZCw0KHlsHgbd4S92SPLsnPT7MNwxO8zuOHAgU&cl=ffffff&w=a"
          strategy="afterInteractive"
          type="text/javascript"
          id="mapmyvisitors"
        /> */}
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-KPNCJ0VYTV"
  strategy="afterInteractive"
/>
<Script
  id="ga-inline"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){ window.dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', 'G-KPNCJ0VYTV');
    `,
  }}
/>
      </body>
    </html>
  );
}
