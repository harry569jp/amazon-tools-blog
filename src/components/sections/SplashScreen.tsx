"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface SplashScreenProps {
  onLoadingComplete: () => void;
}

// 将文字转换为像素块
const textToPixels = (text: string) => {
  return text.split("").map((char, index) => ({
    char,
    id: index,
  }));
};

export default function SplashScreen({ onLoadingComplete }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // 3秒后触发加载完成
    const timer = setTimeout(() => {
      setIsVisible(false);
      onLoadingComplete();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  const harryPixels = textToPixels("HARRY");
  const blogPixels = textToPixels("BLOG");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.02,
        staggerDirection: -1,
      },
    },
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      x: [-20, 20, -10, 10, 0],
      y: [-20, 20, -10, 10, 0],
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      x: [0, 30, -30, 50],
      y: [0, 30, -30, 50],
      scale: 0.3,
      transition: { duration: 0.5, ease: "easeIn" },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[hsl(var(--rimbo-light))]"
    >
      <div className="text-center space-y-6">
        <motion.div
          variants={containerVariants}
          className="flex justify-center space-x-1"
        >
          {harryPixels.map(({ char, id }) => (
            <motion.span
              key={`harry-${id}`}
              variants={letterVariants}
              className="text-6xl md:text-7xl font-bold text-[hsl(var(--rimbo-dark))] inline-block"
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
        <motion.div
          variants={containerVariants}
          className="flex justify-center space-x-1"
        >
          {blogPixels.map(({ char, id }) => (
            <motion.span
              key={`blog-${id}`}
              variants={letterVariants}
              className="text-4xl md:text-5xl font-light text-[hsl(var(--rimbo-dark))] inline-block"
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
} 