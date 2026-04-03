"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Benefits", href: "#benefits" },
  { label: "Products", href: "#products" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const textColor = scrolled ? "text-[#323233]" : "text-white";
  const mutedColor = scrolled ? "text-[#535353]" : "text-white/70";
  const barColor = scrolled ? "bg-[#323233]" : "bg-white";

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 transition-all duration-500"
        style={{
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          backgroundColor: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(232,224,238,0.6)" : "1px solid transparent",
        }}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <img
            src="/images/logo.png"
            alt="ImmunoDynamix"
            className="h-6 w-auto transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}
              className={`text-sm font-medium transition-colors duration-300 hover:text-[#EDC9FA] ${mutedColor}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <motion.a href="#products" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            className="hidden sm:inline-flex px-6 py-2.5 rounded-full text-sm font-semibold text-[#2D1B3D] transition-shadow duration-300"
            style={{ background: "linear-gradient(135deg, #EDC9FA 0%, #50F2FF 100%)", boxShadow: "0 0 20px rgba(237,201,250,0.25)" }}
          >
            Order Now
          </motion.a>

          {/* Mobile hamburger */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden flex flex-col gap-1.5 p-2" aria-label="Menu">
            <motion.span animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className={`block w-5 h-0.5 ${barColor} origin-center transition-colors duration-300`} />
            <motion.span animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }} className={`block w-5 h-0.5 ${barColor} transition-colors duration-300`} />
            <motion.span animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className={`block w-5 h-0.5 ${barColor} origin-center transition-colors duration-300`} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[64px] left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-b border-[#E8E0EE] px-6 py-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
                  className="text-base text-[#323233] font-medium py-2"
                >
                  {link.label}
                </a>
              ))}
              <a href="#products" onClick={() => setMobileOpen(false)}
                className="mt-2 text-center px-6 py-3 rounded-full text-sm font-semibold text-[#2D1B3D]"
                style={{ background: "linear-gradient(135deg, #EDC9FA 0%, #50F2FF 100%)" }}
              >
                Order Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
