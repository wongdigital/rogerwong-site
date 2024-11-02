import type { Metadata } from "next";
import type { ReactNode } from 'react';
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
import { Providers } from '@/components/Providers'
import Script from 'next/script'
import SkipToMain from '@/components/SkipToMain'
import { Analytics } from "@vercel/analytics/react"

const ibmPlexSans = IBM_Plex_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-ibm-plex-sans',
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-ibm-plex-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rogerwong.me'),
  title: {
    default: "Roger Wong - Design Leader & Creative Director",
    template: "%s | Roger Wong"
  },
  description: "Personal website of Roger Wong, design leader and creative director. Previously at Apple, Pixar, Razorfish, and TrueCar.",
  openGraph: {
    title: "Roger Wong - Design Leader & Creative Director",
    description: "Personal website of Roger Wong, design leader and creative director. Previously at Apple, Pixar, Razorfish, and TrueCar.",
    url: 'https://rogerwong.me',
    siteName: 'Roger Wong',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: 'summary_large_image',
    title: "Roger Wong - Design Leader & Creative Director",
    description: "Personal website of Roger Wong, design leader and creative director. Previously at Apple, Pixar, Razorfish, and TrueCar.",
  }
};

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Roger Wong",
    "url": "https://rogerwong.me",
    "description": "Personal website of Roger Wong, design leader and creative director",
    "author": {
      "@type": "Person",
      "name": "Roger Wong",
      "sameAs": [
        "https://linkedin.com/in/yourprofile",
        "https://twitter.com/yourprofile"
      ]
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="schema-markup"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-55TQ7WV');`,
          }}
        />
      </head>
      <body className={`${ibmPlexSans.variable} ${ibmPlexMono.variable}`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-55TQ7WV"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Providers>
          <div className="container mx-auto px-4">
            <SkipToMain />
            <header role="banner" className="py-2">
              <Header />
            </header>
            <main id="main-content" role="main">
              {children}
            </main>
            <footer role="contentinfo">
              <Footer />
            </footer>
          </div>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
