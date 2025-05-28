"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import FadeIn from "../animations/FadeIn";

export default function CtaSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const arrowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    hover: {
      x: 5,
      transition: {
        repeat: Infinity,
        repeatType: "reverse" as const,
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-16 bg-white">
      <div ref={ref} className="container-wide">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="heading-lg text-center mb-8">Transform Your Online Presence!</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <motion.a
                href="https://www.rimbodesigns.com/post/rimbo-referral-program"
                className="block bg-white hover:bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100 transition-colors duration-300 h-full"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-sm text-gray-500 mb-1">May 22, 2025 | 2 min | Online Marketing</div>
                <h3 className="heading-md mb-2">Rimbo Referral Program</h3>
                <p className="body-text mb-4">Know someone who needs branding or a website? Refer them and earn 5%—usually $200–500+.</p>
                <div className="text-[hsl(var(--rimbo-dark))] font-medium">Online Marketing</div>
              </motion.a>
            </FadeIn>

            <FadeIn delay={0.2}>
              <motion.a
                href="https://www.rimbodesigns.com/post/how-to-build-a-brand-that-stands-out"
                className="block bg-white hover:bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100 transition-colors duration-300 h-full"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-sm text-gray-500 mb-1">November 16, 2024 | 8 min | Branding</div>
                <h3 className="heading-md mb-2">How to Build a Brand That Stands Out</h3>
                <p className="body-text mb-4">Discover my proven process for building a powerful brand. Learn the steps to professional, successful branding!</p>
                <div className="text-[hsl(var(--rimbo-dark))] font-medium">Branding</div>
              </motion.a>
            </FadeIn>

            <FadeIn delay={0.3}>
              <motion.a
                href="https://www.rimbodesigns.com/post/top-50-best-websites-2025"
                className="block bg-white hover:bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100 transition-colors duration-300 h-full"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-sm text-gray-500 mb-1">May 10, 2025 | 6 min | UI/UX Design</div>
                <h3 className="heading-md mb-2">Top 50 Best Websites 2025: Get inspired.</h3>
                <p className="body-text mb-4">Take your UI/UX skills to the next level, this curated list of cutting-edge websites will ignite your creativity!</p>
                <div className="text-[hsl(var(--rimbo-dark))] font-medium">UI/UX Design</div>
              </motion.a>
            </FadeIn>
          </div>

          <FadeIn delay={0.4} className="mt-12 text-center">
            <a
              href="/resources"
              className="inline-flex items-center text-[hsl(var(--rimbo-dark))] font-medium hover:underline"
            >
              See All Resources
            </a>
          </FadeIn>

          <FadeIn delay={0.5} className="mt-16">
            <motion.a
              href="https://calendly.com/rimbodesigns/30min"
              className="relative block p-8 md:p-12 bg-[hsl(var(--rimbo-dark))] rounded-xl text-white overflow-hidden group"
              whileHover="hover"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <div className="relative z-10">
                <motion.h3
                  className="heading-lg mb-2"
                  variants={textVariants}
                >
                  Start a new project today!
                </motion.h3>
                <motion.p
                  className="body-text text-white/80 mb-6"
                  variants={textVariants}
                >
                  2 spots left
                </motion.p>
                <motion.div
                  className="flex items-center gap-3 text-[hsl(var(--rimbo-yellow))] font-medium"
                  variants={textVariants}
                >
                  <span>Book a call</span>
                  <motion.span variants={arrowVariants}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.span>
                </motion.div>
              </div>

              {/* Background decoration */}
              <div className="absolute -right-4 -bottom-4 w-32 h-32 transform -rotate-12 bg-gradient-to-tr from-[hsl(var(--rimbo-purple))/20] to-[hsl(var(--rimbo-yellow))/20] rounded-full blur-xl group-hover:scale-125 transition-transform duration-700"></div>
              <div className="absolute right-20 top-4 w-20 h-20 transform rotate-45 bg-gradient-to-tr from-[hsl(var(--rimbo-purple))/10] to-[hsl(var(--rimbo-yellow))/10] rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
            </motion.a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
