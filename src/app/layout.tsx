import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';

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
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${ibmPlexSans.variable} ${ibmPlexMono.variable}`}>
      <body>
        <div className="container mx-auto">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
