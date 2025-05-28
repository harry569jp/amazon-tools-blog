"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxScrollProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: "up" | "down" | "left" | "right";
  offset?: [number, number];
}

export default function ParallaxScroll({
  children,
  className = "",
  speed = 0.1,
  direction = "up",
  offset = [0, 1],
}: ParallaxScrollProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  });

  // 总是创建所有transform，但只使用我们需要的那个
  const yUp = useTransform(scrollYProgress, [0, 1], ["0%", `${-speed * 100}%`]);
  const yDown = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);
  const xLeft = useTransform(scrollYProgress, [0, 1], ["0%", `${-speed * 100}%`]);
  const xRight = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);

  // 选择正确的transform
  let transform = {};
  if (direction === "up") {
    transform = { y: yUp };
  } else if (direction === "down") {
    transform = { y: yDown };
  } else if (direction === "left") {
    transform = { x: xLeft };
  } else if (direction === "right") {
    transform = { x: xRight };
  }

  return (
    <motion.div
      ref={ref}
      style={transform}
      className={className}
    >
      {children}
    </motion.div>
  );
}
