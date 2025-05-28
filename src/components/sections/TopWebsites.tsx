"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import FadeIn from "../animations/FadeIn";
import ParallaxScroll from "../animations/ParallaxScroll";

// Top websites data
const topWebsites = [
  {
    id: 1,
    name: "Locomotive",
    url: "https://locomotive.ca/en",
    description: "For six years running, Locomotive has been crowned Agency of the Year by Awwwards. It's no surprise they're at the top of my list—these guys are the undisputed champions of the web. With an extensive library of outstanding projects, Locomotive continues to set industry standards. Keep a close eye on them; they're shaping the future of digital experiences.",
    image: "https://ext.same-assets.com/1465116211/1876713715.webp"
  },
  {
    id: 2,
    name: "KPR-verse",
    url: "https://kprverse.com/",
    description: "This site is a masterpiece. From the intricate details in the artwork to the seamless storytelling, UI/UX design, and creative animations, KPR-verse offers an immersive experience that will leave you in awe.",
    image: "https://ext.same-assets.com/1465116211/194949480.webp"
  },
  {
    id: 3,
    name: "ToyFight",
    url: "https://toyfight.co/",
    description: "ToyFight strikes the perfect balance between professionalism and playfulness. Every interaction on the site feels thoughtful and delightful. The micro-sound effects are a rare and brilliant touch that elevates the overall user experience. This is a trend to watch!",
    image: "https://ext.same-assets.com/1465116211/3896727384.webp"
  },
  {
    id: 4,
    name: "Metalab",
    url: "https://www.metalab.com/",
    description: "At MetaLab, everything feels connected. Navigation is intuitive, and the site exudes a high-end, premium feel. It's a masterclass in delivering a cohesive and luxurious user experience.",
    image: "https://ext.same-assets.com/1465116211/3244996305.webp"
  },
  {
    id: 5,
    name: "Redis",
    url: "https://www.redis.agency/",
    description: "This site is the epitome of simplicity, but with tons of character that makes it stand out. The infinite scroll and stunning 3D animations are not only impressive but also add to the overall fun factor. This site genuinely brings joy :)",
    image: "https://ext.same-assets.com/1465116211/783610001.webp"
  },
  {
    id: 6,
    name: "Lusion",
    url: "https://lusion.co/",
    description: "Lusion is all about smoothness and fluidity. Every element feels alive, and interacting with this site is an absolute pleasure. It's a perfect example of how motion can breathe life into a digital experience.",
    image: "https://ext.same-assets.com/1465116211/3545645995.webp"
  },
  {
    id: 7,
    name: "Opal",
    url: "https://opalcamera.com/",
    description: "As my favorite e-commerce site, Opal nails the brand-to-product connection. The aesthetic and presentation are seamless, making it a perfect example of how to create a shopping experience that feels both natural and sophisticated.",
    image: "https://ext.same-assets.com/1465116211/1121866462.webp"
  },
  {
    id: 8,
    name: "GSAP",
    url: "https://gsap.com/",
    description: "GSAP is the king of web animation. As a code library dedicated to animations, the way they showcase their own capabilities is nothing short of wild. Prepare to be amazed by what's possible with GSAP.",
    image: "https://ext.same-assets.com/1465116211/633413488.webp"
  },
  {
    id: 9,
    name: "OFF BRAND",
    url: "https://www.itsoffbrand.com/",
    description: "OFFF BRAND delivers world-class interactions and animations, raising the bar for digital design. Every detail feels meticulously crafted.",
    image: "https://ext.same-assets.com/1465116211/3921538562.webp"
  },
  {
    id: 10,
    name: "PLAYGROUND",
    url: "https://www.playground.it/en",
    description: "Playground wraps up our top 10 with a clean and well-designed experience. The site pulls off impressive effects effortlessly, proving that simplicity and elegance can go hand-in-hand.",
    image: "https://ext.same-assets.com/1465116211/2563456005.webp"
  }
];

const WebsiteCard = ({ website, index }: { website: typeof topWebsites[0], index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });

  return (
    <FadeIn delay={0.1 * index} className="mb-20">
      <div
        ref={cardRef}
        className="group"
      >
        <h3 className="heading-md mb-2 flex items-baseline gap-2">
          <span className="text-gray-400">#{website.id}</span>
          <a
            href={website.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[hsl(var(--rimbo-purple))] transition-colors duration-300"
          >
            {website.name}
          </a>
        </h3>

        <motion.div
          className="mb-4 overflow-hidden rounded-lg"
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <ParallaxScroll speed={0.05} className="relative block overflow-hidden rounded-lg">
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={website.image}
                alt={website.name}
                className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-700 group-hover:scale-[1.01]"
              />
            </motion.div>
          </ParallaxScroll>
        </motion.div>

        <p className="body-text max-w-3xl">{website.description}</p>
      </div>
    </FadeIn>
  );
};

export default function TopWebsites() {
  return (
    <section className="py-16 bg-white">
      <div className="container-wide">
        <FadeIn>
          <h2 className="heading-lg text-center mb-8">Let's break down the top 10 best.</h2>
        </FadeIn>

        <div className="mt-12">
          {topWebsites.map((website, index) => (
            <WebsiteCard key={website.id} website={website} index={index} />
          ))}
        </div>

        <FadeIn delay={0.5} className="mt-12 text-center">
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
