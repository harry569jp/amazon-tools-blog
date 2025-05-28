"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useMousePosition } from "@/hooks/useMousePosition";

interface GradientBlurProps {
  className?: string;
  colors?: string[];
  intensity?: number;
  speed?: number;
}

export default function GradientBlur({
  className = "",
  colors = ["#8a6681", "#65958b", "#dabe4e"],
  intensity = 0.3,
  speed = 0.2,
}: GradientBlurProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { x, y } = useMousePosition();

  useEffect(() => {
    if (!ref.current) return;

    const moveGradient = (mouseX: number, mouseY: number) => {
      if (!ref.current) return;

      const { width, height, left, top } = ref.current.getBoundingClientRect();

      // Calculate positions relative to the element
      const relativeX = mouseX - left;
      const relativeY = mouseY - top;

      // Calculate positions as percentages
      const xPercent = Math.max(0, Math.min(100, (relativeX / width) * 100));
      const yPercent = Math.max(0, Math.min(100, (relativeY / height) * 100));

      gsap.to(ref.current, {
        background: `radial-gradient(circle at ${xPercent}% ${yPercent}%, ${colors.join(", ")})`,
        duration: speed,
        ease: "power2.out",
      });
    };

    if (x && y) {
      moveGradient(x, y);
    }
  }, [x, y, colors, speed]);

  return (
    <div
      ref={ref}
      className={`absolute inset-0 opacity-${Math.round(intensity * 100)} blur-xl pointer-events-none ${className}`}
      style={{
        background: `radial-gradient(circle at 50% 50%, ${colors.join(", ")})`,
      }}
    />
  );
}
