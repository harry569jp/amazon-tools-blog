"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import FadeIn from "../animations/FadeIn";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  // Handle parallax effect on hero images
  useEffect(() => {
    if (!heroRef.current || !imageWrapperRef.current) return;

    const updateParallax = () => {
      const scrollPosition = window.scrollY;
      const parallaxValue = scrollPosition * 0.3; // Adjust speed as needed

      if (imageWrapperRef.current) {
        gsap.to(imageWrapperRef.current, {
          y: parallaxValue,
          duration: 0.5,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("scroll", updateParallax);
    return () => window.removeEventListener("scroll", updateParallax);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden"
      id="top-of-page"
    >
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[hsl(var(--rimbo-light))] opacity-50">
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(hsl(var(--rimbo-dark) / 0.03) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--rimbo-dark) / 0.03) 1px, transparent 1px)",
          backgroundSize: "20px 20px"
        }} />
      </div>

      {/* Content container */}
      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-6">
            <FadeIn delay={0.1}>
              <motion.div
                className="inline-block bg-[hsl(var(--rimbo-dark))] text-white py-1 px-3 mono-text"
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                UI/UX Design
              </motion.div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="heading-xl text-[hsl(var(--rimbo-dark))]">
                Top 50 Best Websites 2025: Get inspired!
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="body-text text-xl max-w-xl">
                Upgrading the quality of your inspiration is the fastest way to level up your design skills. I've spent years curating the most inspiring websites to empower you with the best resources at your fingertips.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex items-center gap-4 pt-4">
                {/* Author info */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                    <motion.img
                      src="https://ext.same-assets.com/1465116211/1167133332.avif"
                      alt="Rimbout Bobeldijk"
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <div>
                    <div className="font-medium">Rimbout Bobeldijk</div>
                    <div className="text-sm text-gray-600">10 April 2025 · 6 min</div>
                  </div>
                </div>

                {/* Social links */}
                <div className="flex items-center gap-2">
                  <motion.a
                    href="https://www.linkedin.com/in/rimbout-bobeldijk-9836ba168/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.a>
                  <motion.a
                    href="https://twitter.com/rimbodesigns"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-1-4.8 4-8 7.9-4.9 1.2 1 2 2.4 2.1 4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.a>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="pt-6">
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
              </div>
            </FadeIn>
          </div>

          {/* Image collage */}
          <div
            ref={imageWrapperRef}
            className="relative h-[500px] md:h-[550px] lg:h-[600px]"
          >
            <FadeIn delay={0.3} direction="right" className="absolute top-0 right-0 w-4/5 h-auto z-20">
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                className="shadow-xl rounded-md overflow-hidden"
              >
                <img
                  src="https://ext.same-assets.com/1465116211/1876713715.webp"
                  alt="Locomotive website"
                  className="w-full h-auto"
                />
              </motion.div>
            </FadeIn>

            <FadeIn delay={0.5} direction="left" className="absolute top-1/4 left-0 w-2/3 h-auto z-10">
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                className="shadow-xl rounded-md overflow-hidden"
              >
                <img
                  src="https://ext.same-assets.com/1465116211/194949480.webp"
                  alt="KPR-verse website"
                  className="w-full h-auto"
                />
              </motion.div>
            </FadeIn>

            <FadeIn delay={0.7} direction="right" className="absolute bottom-0 right-1/4 w-3/5 h-auto z-30">
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                className="shadow-xl rounded-md overflow-hidden"
              >
                <img
                  src="https://ext.same-assets.com/1465116211/3896727384.webp"
                  alt="ToyFight website"
                  className="w-full h-auto"
                />
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
