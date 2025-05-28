"use client";

import { useState, useEffect } from "react";

export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState<{ x: number | null; y: number | null }>({
    x: null,
    y: null,
  });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Use debounce for better performance
    let timeoutId: NodeJS.Timeout;
    const debouncedUpdateMousePosition = (e: MouseEvent) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        updateMousePosition(e);
      }, 10); // 10ms debounce
    };

    window.addEventListener("mousemove", debouncedUpdateMousePosition);

    return () => {
      window.removeEventListener("mousemove", debouncedUpdateMousePosition);
      clearTimeout(timeoutId);
    };
  }, []);

  return mousePosition;
}
