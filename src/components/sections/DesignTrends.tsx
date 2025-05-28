"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "../animations/FadeIn";

// Trend data
const designTrends = [
  {
    id: 1,
    title: "Show, Don't Tell",
    description: "The most successful websites let their design and interactions do the talking. Users don't want to read walls of text—they want to experience the information. Focus on strong visual elements, immersive storytelling through design, and cut the fluff. If a picture (or animation) can explain it, use that instead of text. A clean, visual-first approach keeps users engaged and leaves a lasting impression."
  },
  {
    id: 2,
    title: "Function Over Form",
    description: "Before getting fancy with visuals, make sure your site works. Prioritize functionality over aesthetics, ensuring seamless navigation, intuitive user flows, and clear calls to action. A visually stunning site is worthless if users can't easily achieve their goals. Once you've nailed the core user experience, you can layer on the creativity."
  },
  {
    id: 3,
    title: "Max Width for Big Screens: Often Overlooked",
    description: "As more people dock their laptops into larger monitors, ensuring your design scales well on big screens is crucial. Many websites overlook setting a maximum width, resulting in layouts that stretch awkwardly on larger displays. A responsive design should account for this and provide an optimal viewing experience, regardless of screen size."
  },
  {
    id: 4,
    title: "Smooth Scroll Makes a Huge Difference",
    description: "Smooth scrolling isn't yet a standard feature on most websites, but it should be. It's one of the easiest ways to make your site feel smoother and more premium. By implementing smooth scroll, you instantly elevate the browsing experience, giving users that fluid, effortless flow that feels high-end. However, it's important not to overdo it—animations should remain subtle and elegant. When done right, smooth scroll adds a polished layer to the design without overwhelming the user."
  },
  {
    id: 5,
    title: "Micro-Animations Bring Sites to Life",
    description: "Micro-animations are key to creating a dynamic, engaging experience. These small interactions—like hover effects, button animations, or scroll-triggered movements—give a sense of interactivity and polish that makes a website feel alive. It's a subtle but powerful way to differentiate your design and keep users engaged."
  },
  {
    id: 6,
    title: "Subtle Use of Sound",
    description: "While sound is often overlooked in web design, subtle feedback sounds can add a tactile layer to the experience. For instance, the snappy clicking sound when hovering over buttons on the ToyFight site is incredibly satisfying. It's a small, elegant detail that enhances user interaction without being overwhelming. The key is keeping it subtle and refined."
  },
  {
    id: 7,
    title: "Hotkeys in Action",
    description: "Another emerging trend is the inclusion of hotkeys to trigger actions on websites. This feature can significantly improve navigation, especially for power users who appreciate keyboard shortcuts. By integrating hotkeys into your design, you provide an added layer of convenience and enhance the overall usability of the site."
  }
];

export default function DesignTrends() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative py-20 overflow-hidden"
    >
      {/* Background pattern */}
      <motion.div
        className="absolute inset-0 bg-[hsl(var(--rimbo-light))] opacity-50 z-0"
        style={{ opacity: backgroundOpacity }}
      >
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(hsl(var(--rimbo-dark) / 0.03) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--rimbo-dark) / 0.03) 1px, transparent 1px)",
          backgroundSize: "20px 20px"
        }} />
      </motion.div>

      <div className="container-wide relative z-10">
        <FadeIn delay={0.1}>
          <h2 className="heading-lg text-center mb-2">Common Trends I Found in the Curation Process</h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="body-text text-center max-w-3xl mx-auto mb-12">
            After analyzing the top websites for 2024, several design trends stood out. These trends are reshaping how we experience web design, and prioritizing them can significantly elevate your own projects.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="body-text text-center mb-12">Let's break them down in order of importance:</p>
        </FadeIn>

        <div className="space-y-16 mt-16">
          {designTrends.map((trend, index) => (
            <FadeIn key={trend.id} delay={0.1 * index} className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Trend number */}
                <motion.div
                  className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full bg-[hsl(var(--rimbo-dark))] text-white flex items-center justify-center heading-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  {trend.id}
                </motion.div>

                <div>
                  <h3 className="heading-md text-[hsl(var(--rimbo-dark))] mb-3">
                    {trend.title}
                  </h3>
                  <p className="body-text">{trend.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5} className="mt-16 text-center">
          <a
            href="https://coda.io/@rimbout-bobeldijk/the-best-sites-october-2024"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[hsl(var(--rimbo-dark))] hover:bg-[hsl(var(--rimbo-dark))/0.9] text-white py-3 px-6 rounded-md transition-colors duration-300"
          >
            <span>Access to full top 50 list here</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
