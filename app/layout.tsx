import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Pranay Srivastava | Entrepreneur",
  description:
    "Personal website of Pranay Srivastava. Building web apps, startups, and useful products.",
  alternates: {
    canonical: "https://pranaysrivastava.com"
  },
  openGraph: {
    title: "Pranay Srivastava",
    description:
      "Building products people actually use.",
    url: "https://pranaysrivastava.com",
    siteName: "Pranay Srivastava",
    images: ["/pranay1.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pranay Srivastava",
    description: "Building products people actually use.",
    images: ["/pranay1.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Pranay Srivastava",
            url: "https://pranaysrivastava.com",
            image: "https://pranaysrivastava.com/pranay1.png",
            sameAs: [
              "https://github.com/Pranay-Builds",
              "https://x.com/prnysrivastava",
              "https://instagram.com/prnysrivastava",
              "https://instagram.com/pranay._srivastava"
            ]
          })
        }}
      />
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
