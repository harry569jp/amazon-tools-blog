"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/service", label: "Service" },
  { href: "/work", label: "Work" },
  { href: "/resources", label: "Resources" },
  { href: "/my-story", label: "My Story" },
  { href: "/contact", label: "Contact" },
  { href: "/rimbo-quiz", label: "Rimbo Quiz" },
  { href: "/locations", label: "Locations" },
];

const socialLinks = [
  { href: "https://www.instagram.com/rimbodesigns_/", icon: <Instagram className="w-4 h-4" /> },
  { href: "https://www.linkedin.com/in/rimbout-bobeldijk-9836ba168/", icon: <Linkedin className="w-4 h-4" /> },
  { href: "https://twitter.com/rimbodesigns", icon: <Twitter className="w-4 h-4" /> },
  { href: "https://www.youtube.com/channel/UCc4hdQHoJp6KBOb2187392Q", icon: <Youtube className="w-4 h-4" /> },
];

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-10">
      <div className="container-wide">
        {/* Back to top button */}
        <motion.div
          className="flex justify-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <a
            href="#top-of-page"
            className="flex items-center gap-2 text-sm hover:text-zinc-300 transition-colors duration-300"
          >
            <span className="sr-only">Back to top</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18 11L12 5L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>

        {/* Footer links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {footerLinks.map((link, i) => (
            <motion.div
              key={link.href}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUpVariants}
            >
              <Link
                href={link.href}
                className="text-sm hover:text-zinc-300 transition-colors duration-300"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Social links and copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-zinc-800">
          <motion.div
            className="flex gap-4 mb-4 md:mb-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors duration-300"
              >
                {social.icon}
                <span className="sr-only">Social link</span>
              </a>
            ))}
          </motion.div>

          <motion.div
            className="text-xs text-zinc-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            &copy; {new Date().getFullYear()} Rimbo Designs. All rights reserved.
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
