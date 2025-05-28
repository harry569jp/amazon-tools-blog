"use client";

import { useState } from "react";
import SplashScreen from "@/components/sections/SplashScreen";
import HeroSection from "@/components/sections/HeroSection";
import {
  TopWebsitesWrapper,
  DesignTrendsWrapper,
  NewsletterSectionWrapper,
  CtaSectionWrapper
} from "./components";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="min-h-screen">
      <SplashScreen onLoadingComplete={() => setIsLoading(false)} />
      {!isLoading && (
        <>
          <HeroSection />
          <TopWebsitesWrapper />
          <DesignTrendsWrapper />
          <NewsletterSectionWrapper />
          <CtaSectionWrapper />
        </>
      )}
    </main>
  );
}
