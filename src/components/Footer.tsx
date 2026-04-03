"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#F8F5FC] border-t border-[#E8E0EE]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src="/images/logo.png" alt="ImmunoDynamix" className="h-8 w-auto mb-4" />
            <p className="text-sm text-[#535353] leading-relaxed max-w-xs mb-5">
              Premium bovine colostrum nutrition for modern families.
              Science-backed daily wellness support.
            </p>
            <div className="flex gap-3">
              {/* Instagram */}
              <a href="#" className="w-8 h-8 rounded-full bg-[#EDC9FA]/20 flex items-center justify-center text-[#C490E0] hover:bg-[#EDC9FA]/40 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              {/* Twitter/X */}
              <a href="#" className="w-8 h-8 rounded-full bg-[#EDC9FA]/20 flex items-center justify-center text-[#C490E0] hover:bg-[#EDC9FA]/40 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#323233] mb-5">
              Products
            </h4>
            <ul className="space-y-3">
              {[
                "Pure Colostrum Powder",
                "Vanilla Colostrum Powder",
                "Chocolate Colostrum Powder",
                "Strawberry Tablets",
                "American Ice Cream Tablets",
              ].map((item) => (
                <li key={item}>
                  <a href="#products" className="text-sm text-[#535353] hover:text-[#323233] transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#323233] mb-5">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-[#535353]">
              <li>info@sahalekhalinnovations.com</li>
              <li>+91 9923769900</li>
              <li>Sahalekha Innovations LLP</li>
              <li className="text-[#8A8A8A] text-xs leading-relaxed">
                Plot 993/1, Trimurti Kamatwade Rd, CIDCO, Nashik — 422009, MH, India
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#323233] mb-5">
              Stay Updated
            </h4>
            <p className="text-sm text-[#535353] mb-4">
              New products, offers & wellness tips.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-white border border-[#E8E0EE] rounded-lg px-4 py-2.5 text-sm text-[#323233] placeholder-[#8A8A8A] focus:outline-none focus:border-[#EDC9FA] transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2.5 rounded-lg text-sm font-semibold text-[#323233]"
                style={{ background: "linear-gradient(135deg, #EDC9FA 0%, #50F2FF 100%)" }}
              >
                Join
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-[#E8E0EE] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#8A8A8A]">
            &copy; 2026 ImmunoDynamix. All rights reserved. | FSSAI Lic: 1071804000044 | Made in India
          </p>
          <div className="flex gap-6">
            {["Terms", "Privacy", "Shipping"].map((item) => (
              <a key={item} href="#" className="text-xs text-[#8A8A8A] hover:text-[#535353] transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
