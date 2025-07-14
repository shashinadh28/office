import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Montserrat, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from '@/components/navbar';
import FloatingButton from '@/components/FloatingButton';

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: 'swap',
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://gatewayworkforce.com'),
  title: "Gateway Workforce - Connecting Global Businesses to India's Talented Professionals",
  description: "Connect with India's top-tier talent through Gateway Workforce. We specialize in IT outsourcing, healthcare BPO, US taxation services, cloud solutions, SaaS expertise, AI solutions, and virtual assistance.",
  keywords: [
    "IT outsourcing India",
    "Healthcare BPO services", 
    "US taxation outsourcing",
    "Cloud solutions India",
    "SaaS experts",
    "AI solutions",
    "Virtual assistant services",
    "India talent acquisition",
    "Global workforce solutions",
    "Remote team India"
  ],
  authors: [{ name: "Gateway Workforce" }],
  creator: "Gateway Workforce",
  publisher: "Gateway Workforce",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gatewayworkforce.com',
    title: 'Gateway Workforce - India\'s Premier Talent Solutions',
    description: 'Connect with India\'s skilled professionals for IT, healthcare, taxation, and business solutions.',
    siteName: 'Gateway Workforce',
    images: [
      {
        url: '/optimized/images/gateway_workforce.webp',
        width: 1200,
        height: 630,
        alt: 'Gateway Workforce - Connecting Global Businesses to Indian Talent',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gateway Workforce - India\'s Premier Talent Solutions',
    description: 'Connect with India\'s skilled professionals for IT, healthcare, taxation, and business solutions.',
    images: ['/optimized/images/gateway_workforce.webp'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Critical Resource Preloads */}
        <link rel="preload" href="/home_img.webp" as="image" type="image/webp" />
        <link rel="preload" href="/optimized/images/gateway_workforce.webp" as="image" type="image/webp" />
        
        {/* DNS Prefetch for external domains */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//calendly.com" />
        
        {/* Preconnect to important third-party origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Performance and Security Headers */}
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/optimized/images/gateway_workforce.webp" type="image/webp" />
        <link rel="apple-touch-icon" href="/optimized/images/gateway_workforce.webp" />
      </head>
      <body
        className={`${geist.variable} ${geistMono.variable} ${montserrat.variable} ${ibmPlexSans.variable} antialiased`}
      >
        <Navbar />
        {children}
        <FloatingButton />
      </body>
    </html>
  );
}
