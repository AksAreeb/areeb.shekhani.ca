import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const siteUrl = "https://shekhani.ca";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Areeb Shekhani | Backend Engineer & Frontend Specialist",
    template: "%s | Areeb Shekhani",
  },
  description:
    "Areeb Shekhani — Backend Engineer, Frontend Specialist, and Governance Enthusiast. Building software at QU Computing, Oakville. Expertise in Python, React, Docker, Next.js, and Go.",
  keywords: [
    "Areeb Shekhani",
    "Backend Engineer",
    "Frontend Developer",
    "Software Engineer",
    "QU Computing",
    "LicenseGuard",
    "Oakville",
    "Python",
    "React",
    "Next.js",
    "Docker",
    "Go",
  ],
  authors: [{ name: "Areeb Shekhani", url: siteUrl }],
  creator: "Areeb Shekhani",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteUrl,
    siteName: "Areeb Shekhani",
    title: "Areeb Shekhani | Backend Engineer & Frontend Specialist",
    description:
      "Backend Engineer, Frontend Specialist, and Governance Enthusiast. Building at QU Computing. Python, React, Next.js, Docker, Go.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Areeb Shekhani | Backend Engineer & Frontend Specialist",
    description:
      "Backend Engineer, Frontend Specialist, and Governance Enthusiast. Building at QU Computing.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
