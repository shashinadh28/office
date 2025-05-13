import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from '@/components/navbar';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Import fonts from Google Fonts
import { Kanit, Montserrat, Poppins } from 'next/font/google';

// Initialize Kanit font
const kanit = Kanit({
  weight: ['500'],
  subsets: ['latin'],
  display: 'swap', // Use 'swap' to prevent FOUT (Flash of Unstyled Text)
});

// Initialize Montserrat font with multiple weights
// Make sure to include ALL weights and styles you need
const montserrat = Montserrat({
  weight: ['400', '500', '700'], // Include all weights you'll use
  subsets: ['latin'],
  display: 'swap', // Prevents FOUT
  variable: '--font-montserrat', // CSS variable for Tailwind
  style: ['normal', 'italic'], // Include both normal and italic styles
});

// Initialize Poppins font with ALL required weights
// IMPORTANT: Must include all weights and styles you'll use in the app
const poppins = Poppins({
  weight: ['400', '500', '600', '700'], // Including multiple weights for consistency
  subsets: ['latin'],
  display: 'swap', // Prevents FOUT
  variable: '--font-poppins', // CSS variable that Tailwind will use
  style: ['normal', 'italic'], // Make sure to include italic style for headings
});

export const metadata: Metadata = {
  title: "Gateway Workforce",
  description: "Gateway Workforce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* Apply ALL font variables to the body */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${poppins.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
