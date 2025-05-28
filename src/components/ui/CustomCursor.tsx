"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useMousePosition } from "@/hooks/useMousePosition";

interface CustomCursorProps {
  variant?: "default" | "highlight" | "text" | "link";
}

// 定义特定的mixBlendMode类型
type MixBlendMode =
  | "normal"
  | "multiply"
  | "screen"
  | "overlay"
  | "darken"
  | "lighten"
  | "color-dodge"
  | "color-burn"
  | "hard-light"
  | "soft-light"
  | "difference"
  | "exclusion"
  | "hue"
  | "saturation"
  | "color"
  | "luminosity";

export default function CustomCursor({ variant = "default" }: CustomCursorProps) {
  const { x, y } = useMousePosition();
  const cursorOuterRef = useRef<HTMLDivElement>(null);
  const cursorInnerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorVariant, setCursorVariant] = useState(variant);

  // Define cursor states/variants
  const cursorVariants = {
    default: {
      height: 30,
      width: 30,
      backgroundColor: "rgba(255, 255, 255, 0)",
      border: "1px solid rgba(0, 0, 0, 0.5)",
    },
    highlight: {
      height: 60,
      width: 60,
      backgroundColor: "rgba(29, 33, 55, 0.1)",
      border: "1px solid rgba(29, 33, 55, 0.2)",
    },
    text: {
      height: 80,
      width: 80,
      backgroundColor: "rgba(29, 33, 55, 0.05)",
      border: "1px solid rgba(29, 33, 55, 0.1)",
      mixBlendMode: "difference" as MixBlendMode, // 使用类型断言
    },
    link: {
      height: 40,
      width: 40,
      backgroundColor: "rgba(29, 33, 55, 0.2)",
      border: "none",
    },
  };

  const innerCursorVariants = {
    default: {
      height: 6,
      width: 6,
      backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
    highlight: {
      height: 8,
      width: 8,
      backgroundColor: "rgba(29, 33, 55, 0.6)",
    },
    text: {
      height: 10,
      width: 10,
      backgroundColor: "rgba(29, 33, 55, 0.6)",
    },
    link: {
      height: 15,
      width: 15,
      backgroundColor: "rgba(29, 33, 55, 0.8)",
    },
  };

  useEffect(() => {
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Handle hovering over different elements
    const handleLinkHover = () => setCursorVariant("link");
    const handleTextHover = () => setCursorVariant("text");
    const handleButtonHover = () => setCursorVariant("highlight");
    const handleDefaultHover = () => setCursorVariant("default");

    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    const links = document.querySelectorAll("a, button, [role=button]");
    const textBlocks = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, li, blockquote");

    links.forEach(link => {
      link.addEventListener("mouseenter", handleLinkHover);
      link.addEventListener("mouseleave", handleDefaultHover);
    });

    textBlocks.forEach(text => {
      text.addEventListener("mouseenter", handleTextHover);
      text.addEventListener("mouseleave", handleDefaultHover);
    });

    return () => {
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);

      links.forEach(link => {
        link.removeEventListener("mouseenter", handleLinkHover);
        link.removeEventListener("mouseleave", handleDefaultHover);
      });

      textBlocks.forEach(text => {
        text.removeEventListener("mouseenter", handleTextHover);
        text.removeEventListener("mouseleave", handleDefaultHover);
      });
    };
  }, []);

  return (
    <>
      {isVisible && (
        <>
          <motion.div
            ref={cursorOuterRef}
            className="fixed top-0 left-0 z-50 pointer-events-none rounded-full"
            animate={cursorVariant}
            variants={cursorVariants}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 300,
              mass: 0.5,
            }}
            style={{
              transform: `translate(${x ? x - 15 : -100}px, ${y ? y - 15 : -100}px)`,
            }}
          />
          <motion.div
            ref={cursorInnerRef}
            className="fixed top-0 left-0 z-50 pointer-events-none rounded-full"
            animate={cursorVariant}
            variants={innerCursorVariants}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 400,
              mass: 0.2,
            }}
            style={{
              transform: `translate(${x ? x - 3 : -100}px, ${y ? y - 3 : -100}px)`,
            }}
          />
        </>
      )}
    </>
  );
}
