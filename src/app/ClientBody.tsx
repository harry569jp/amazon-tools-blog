"use client";

import { useEffect, useState } from "react";
import Lenis from 'lenis';
import { AnimatePresence } from "framer-motion";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  // Initialize smooth scroll
  useEffect(() => {
    // Remove any extension-added classes during hydration
    document.body.className = "antialiased";

    // 简化Lenis配置以避免类型错误
    const lenisInstance = new Lenis();

    setLenis(lenisInstance);

    function raf(time: number) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisInstance.destroy();
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      <div className="antialiased">{children}</div>
    </AnimatePresence>
  );
}
