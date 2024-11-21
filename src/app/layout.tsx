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
import { SpeedInsights } from '@vercel/speed-insights/next';
import { headers } from 'next/headers'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const ibmPlexSans = IBM_Plex_Sans({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-ibm-plex-sans',
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500'],
  style: ['normal', 'italic'],
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
    images: [{
      url: '/images/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Roger Wong - Design Leader & Creative Director'
    }],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: 'summary_large_image',
    title: "Roger Wong - Design Leader & Creative Director",
    description: "Personal website of Roger Wong, design leader and creative director. Previously at Apple, Pixar, Razorfish, and TrueCar.",
    images: ['/images/og-image.jpg'],
  }
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  const headersList = await headers()
  const nonce = headersList.get('x-nonce')

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
          nonce={nonce ?? undefined}
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema)
          }}
        />
      </head>
      <body className={`${ibmPlexSans.variable} ${ibmPlexMono.variable}`}>
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
        <SpeedInsights />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
