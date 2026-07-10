import type { Metadata, Viewport } from "next";
import { Sora, Manrope, Fraunces } from "next/font/google";
import "./globals.css";
import ClientRoot from "@/components/ClientRoot";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["500"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thefrequencyawakening.com"),
  title: "The Frequency Awakening — Discover Knowledge, Insight & Wellness",
  description:
    "Explore consciousness, astrology, and holistic wellness through AlephTalks, Astrology, and OlyLife — three guided paths for personal growth and awakening.",
  keywords: [
    "frequency awakening",
    "consciousness",
    "spiritual awakening",
    "astrology",
    "birth chart",
    "holistic wellness",
    "personal development",
    "AlephTalks",
    "OlyLife",
  ],
  authors: [{ name: "The Frequency Awakening" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://thefrequencyawakening.com/",
    title: "The Frequency Awakening — Discover Knowledge, Insight & Wellness",
    description:
      "Explore consciousness, astrology, and holistic wellness through three guided paths built for people who want to understand before they arrive.",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Frequency Awakening",
    description:
      "Discover Knowledge, Insight & Wellness — explore the paths that inspire your journey.",
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFBF6",
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "The Frequency Awakening",
  url: "https://thefrequencyawakening.com/",
  description:
    "A hub for consciousness, astrology, and holistic wellness — home to AlephTalks, Astrology, and OlyLife.",
  sameAs: [],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is The Frequency Awakening?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Frequency Awakening is a hub for consciousness, astrology, and holistic wellness content, bringing together three platforms — AlephTalks, Astrology, and OlyLife — under one guided experience.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need experience with astrology or wellness practices to start?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Each platform is built for beginners as well as experienced practitioners, with content organized from introductory to advanced.",
      },
    },
    {
      "@type": "Question",
      name: "Are the OlyLife products medical devices?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. OlyLife products are wellness devices and are not intended to diagnose, treat, cure, or prevent any disease.",
      },
    },
    {
      "@type": "Question",
      name: "How often is new content published?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "New videos, readings, and articles are published regularly across all three platforms — subscribe to the newsletter to get notified.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sora.variable} ${manrope.variable} ${fraunces.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var t=localStorage.getItem('tfa-theme')||'light';document.documentElement.setAttribute('data-theme',t);}catch(e){}})();",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body>
        <ClientRoot>{children}</ClientRoot>
      </body>
    </html>
  );
}
