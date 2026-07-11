import type { Metadata } from "next";
import Hero from "@/components/card/Hero";
import { cardProfile } from "@/lib/cardProfile";

export const metadata: Metadata = {
  title: `${cardProfile.name} | ${cardProfile.brand}`,
  description: `${cardProfile.serviceLine}. ${cardProfile.taglineLine1} ${cardProfile.taglineLine2}`,
  alternates: {
    canonical: "https://tokan.tech/card",
  },
  openGraph: {
    title: `${cardProfile.name} | ${cardProfile.brand}`,
    description: `${cardProfile.serviceLine}. ${cardProfile.taglineLine1} ${cardProfile.taglineLine2}`,
    url: "https://tokan.tech/card",
    siteName: cardProfile.brand,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${cardProfile.name} | ${cardProfile.brand}`,
    description: `${cardProfile.serviceLine}. ${cardProfile.taglineLine1} ${cardProfile.taglineLine2}`,
  },
};

export default function CardPage() {
  return (
    <main className="min-h-screen bg-[#1C1C1E] text-white">
      <Hero />
    </main>
  );
}