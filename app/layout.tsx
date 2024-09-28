import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";
import Navigation from "./ui/components/navigation/navigation";

const orbitron = Orbitron({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s | CyberSauce',
    default: 'CyberSauce'
  },
  description: "", // description
  openGraph: {
    title: {
      template: '%s | CyberSauce',
      default: 'CyberSauce'
    },
    url: 'https://cybersauce-website.vercel.app/', // production url
    description: "", // description
    siteName: 'CyberSauce',
    images: [
      {
        url: '/link.jpg',
        width: 1200,
        height: 630
      }
    ],
    type: 'website',
  },
  keywords: [], // keywords for SEO
  twitter: {
    card: 'summary_large_image',
    title: 'CyberSauce',
    description: "", // description
    creator: '@CodedByCoffeCup',
    images: ['link.jpg'], // Must be an absolute URL
  },
  metadataBase: new URL('https://cybersauce-website.vercel.app/'), // production url
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={orbitron.className}>
        <Navigation />
        {children}
        </body>
    </html>
  );
}
