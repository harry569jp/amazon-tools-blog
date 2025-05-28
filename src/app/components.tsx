"use client";

import dynamic from "next/dynamic";

// 客户端组件包装器
export const HeaderWrapper = dynamic(() => import("@/components/layout/Header"), { ssr: true });
export const FooterWrapper = dynamic(() => import("@/components/layout/Footer"), { ssr: true });
export const HeroWrapper = dynamic(() => import("@/components/sections/HeroSection"), {
  ssr: true,
  loading: () => <div className="min-h-[90vh] bg-gray-100" />
});
export const TopWebsitesWrapper = dynamic(() => import("@/components/sections/TopWebsites"), { ssr: true });
export const DesignTrendsWrapper = dynamic(() => import("@/components/sections/DesignTrends"), { ssr: true });
export const NewsletterSectionWrapper = dynamic(() => import("@/components/sections/NewsletterSection"), { ssr: true });
export const CtaSectionWrapper = dynamic(() => import("@/components/sections/CtaSection"), { ssr: true });
export const CustomCursorWrapper = dynamic(() => import("@/components/ui/CustomCursor"), { ssr: true });
