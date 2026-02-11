import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Samsara Wellness | A Living Ashram & Global Community",
  description: "A registered NGO, wellness ashram, and digital sanctuary merging ancient wisdom with modern science.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://samsarawellness.org",
    title: "Samsara Wellness | A Living Ashram & Global Community",
    description: "A registered NGO, wellness ashram, and digital sanctuary merging ancient wisdom with modern science.",
    siteName: "Samsara Wellness",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "name": "Samsara Wellness",
    "url": "https://samsarawellness.org",
    "logo": "https://samsarawellness.org/logo.png",
    "description": "A registered NGO, wellness ashram, and digital sanctuary merging ancient wisdom with modern science.",
    "foundingDate": "2024",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Global"
    },
    "sameAs": [
      "https://facebook.com/samsarawellness",
      "https://instagram.com/samsarawellness"
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-stone-50 text-stone-900 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
