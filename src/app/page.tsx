"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { products, powderProducts, tabletProducts } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ═══════════════════════════════════════════
   SHARED
   ═══════════════════════════════════════════ */
function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }} className={className}
    >{children}</motion.div>
  );
}

function Label({ text, light }: { text: string; light?: boolean }) {
  return <span className={`inline-block text-[11px] font-bold uppercase tracking-[0.22em] mb-4 ${light ? "text-[#EDC9FA]" : "text-[#C490E0]"}`}>{text}</span>;
}

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let s = 0;
    const d = 1800;
    const step = (t: number) => { if (!s) s = t; const p = Math.min((t - s) / d, 1); setCount(Math.floor((1 - Math.pow(1 - p, 3)) * target)); if (p < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  }, [inView, target]);
  return <span ref={ref}>{count.toLocaleString("en-IN")}{suffix}</span>;
}

/* ═══════════════════════════════════════════
   1. HERO — Cinematic dark with product
   ═══════════════════════════════════════════ */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden section-dark">
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover"
        poster="/images/chocolate-powder/ezgif-frame-020.jpg">
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 hero-overlay" />

      {/* Gradient blobs */}
      <div className="blob-lavender w-[500px] h-[500px] top-[10%] left-[-10%] absolute" />
      <div className="blob-cyan w-[400px] h-[400px] bottom-[10%] right-[-5%] absolute" />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-32 lg:py-0">
          {/* Text */}
          <div>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
              <Label text="Premium Bovine Colostrum" light />
              <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold tracking-tight text-white leading-[1.05] mb-6">
                Your Revival<br />of <span className="gradient-text">Health</span>
              </h1>
            </motion.div>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.15 }}
              className="text-white/55 text-base md:text-[17px] leading-relaxed max-w-md mb-8">
              With a matrix of 400+ bioactive nutrients, ImmunoDynamix colostrum
              works with your body for gut, immunity, metabolism, and overall wellness.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.3 }} className="flex flex-wrap gap-4 mb-10">
              <motion.a href="#products" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                className="px-8 py-4 rounded-full font-bold text-[#2D1B3D] text-sm"
                style={{ background: "linear-gradient(135deg, #EDC9FA 0%, #50F2FF 100%)", boxShadow: "0 4px 30px rgba(237,201,250,0.35)" }}>
                Shop ARMRA
              </motion.a>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-white/40">
              {["IgG 20% Standardized", "FSSAI Licensed", "Ages 3+"].map((t) => (
                <span key={t} className="flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 text-[#50F2FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>{t}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Product visual */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex items-center justify-center relative">
            <div className="blob-lavender w-[350px] h-[350px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <div className="relative w-[320px] h-[400px] rounded-3xl img-placeholder border border-white/10 flex items-center justify-center backdrop-blur-sm">
              <span className="text-white/15 text-xs text-center px-6">Product Image<br/>/images/hero-product.png</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll */}
      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center pt-2">
          <motion.div className="w-1.5 h-1.5 rounded-full bg-white/40" animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }} />
        </div>
      </motion.div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   2. SOCIAL PROOF — Reviews + customer photos
   ═══════════════════════════════════════════ */
function SocialProof() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#2D1B3D] mb-3">
            <AnimatedCounter target={10000} suffix="+" /> five-star reviews.
          </h2>
          <p className="text-[#535353] text-base">Trusted by families across India.</p>
        </Reveal>
        {/* Customer photo strip placeholder */}
        <Reveal delay={0.1}>
          <div className="flex justify-center gap-3 mt-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-14 h-14 md:w-16 md:h-16 rounded-full img-placeholder border-2 border-white shadow-md" />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   3. PROBLEM — Split with icons (ARMRA "Modern living breaks down…")
   ═══════════════════════════════════════════ */
function ProblemSection() {
  const barriers = [
    { icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z", label: "Stress" },
    { icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064", label: "Pollution" },
    { icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z", label: "Poor Diet" },
    { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", label: "Fatigue" },
  ];

  return (
    <section className="gradient-mesh-1 py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <Reveal>
            <h2 className="text-3xl md:text-[2.8rem] lg:text-5xl font-extrabold text-[#2D1B3D] tracking-tight leading-[1.1] mb-6">
              Modern living breaks down your immune barrier
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-4 gap-4 mb-8">
              {barriers.map((b) => (
                <div key={b.label} className="text-center">
                  <div className="w-12 h-12 mx-auto rounded-xl bg-[#EDC9FA]/15 border border-[#EDC9FA]/25 flex items-center justify-center mb-2">
                    <svg className="w-5 h-5 text-[#C490E0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={b.icon} />
                    </svg>
                  </div>
                  <span className="text-xs text-[#535353] font-medium">{b.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div>
          <Reveal delay={0.15}>
            <p className="text-[#535353] text-base md:text-[17px] leading-relaxed mb-6">
              ImmunoDynamix Colostrum is the single food that fortifies your inner
              immune shield, harnessing the power of over 400+ bioactive
              nutrients in every serving.
            </p>
            <p className="text-[#535353] text-base leading-relaxed mb-8">
              Strengthen your immune barriers, nourish your gut ecosystem,
              and revitalize energy with the blueprint of wellness straight
              from nature.
            </p>
            <motion.a href="#products" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              className="inline-flex px-7 py-3.5 rounded-full font-bold text-sm text-[#2D1B3D] shadow-md"
              style={{ background: "linear-gradient(135deg, #EDC9FA 0%, #50F2FF 100%)" }}>
              Shop Now
            </motion.a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   4. THE BARRIERS — Split with image (ARMRA "The barriers")
   ═══════════════════════════════════════════ */
function BarriersSection() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-white relative overflow-hidden">
      <div className="blob-cyan w-[300px] h-[300px] top-[20%] right-[-5%]" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <Reveal>
          <div className="relative">
            <div className="w-full aspect-[4/3] rounded-3xl img-placeholder border border-[#E8E0EE] overflow-hidden flex items-center justify-center">
              <span className="text-[#8A8A8A] text-sm">Lifestyle Image</span>
            </div>
          </div>
        </Reveal>
        {/* Text */}
        <div>
          <Reveal>
            <Label text="The Science" />
            <h2 className="text-3xl md:text-[2.8rem] font-extrabold text-[#2D1B3D] tracking-tight leading-[1.1] mb-6">
              The barriers
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[#535353] text-base leading-relaxed mb-4">
              Modern exposures like antibiotics, chemicals, and ultra-processed food
              erode the protective mucosal barriers that line your gut, sinuses,
              and respiratory system.
            </p>
            <p className="text-[#535353] text-base leading-relaxed mb-4">
              A weakened mucosal barrier means the integrity of the gut
              lining is compromised — allowing irritants to seep into
              your body to affect health and vitality.
            </p>
            <p className="text-[#2D1B3D] font-semibold text-base">
              ImmunoDynamix colostrum helps restore and strengthen these
              natural protective barriers.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   5. TESTIMONIAL HIGHLIGHT — Single quote (ARMRA style)
   ═══════════════════════════════════════════ */
function TestimonialHighlight() {
  return (
    <section className="py-16 px-6 bg-[#FDF8FF]">
      <Reveal>
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-[#C490E0]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-[#323233] text-lg md:text-xl leading-relaxed italic mb-4">
            &ldquo;My family uses ImmunoDynamix daily. The improvement in energy
            and fewer sick days has been remarkable. It&apos;s become an essential
            part of our morning routine.&rdquo;
          </p>
          <p className="text-[#535353] text-sm font-semibold">— Priya S., Parent</p>
        </div>
      </Reveal>
    </section>
  );
}

/* ═══════════════════════════════════════════
   6. BEST SELLERS — Product cards (ARMRA style)
   ═══════════════════════════════════════════ */
function BestSellers() {
  const [filter, setFilter] = useState<"all" | "powder" | "tablet">("all");
  const filtered = filter === "powder" ? powderProducts : filter === "tablet" ? tabletProducts : products;

  return (
    <section id="products" className="py-24 md:py-32 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <Label text="Products" />
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#2D1B3D] tracking-tight">Best sellers</h2>
            </div>
            <div className="mt-4 md:mt-0 inline-flex rounded-full bg-[#F8F5FC] p-1 border border-[#E8E0EE]">
              {(["all", "powder", "tablet"] as const).map((f) => (
                <button key={f} onClick={() => setFilter(f)}
                  className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${filter === f ? "text-[#2D1B3D] shadow-sm" : "text-[#8A8A8A]"}`}
                  style={filter === f ? { background: "linear-gradient(135deg, #EDC9FA 0%, #50F2FF 100%)" } : {}}>
                  {f === "all" ? "All" : f === "powder" ? "Powders" : "Tablets"}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div key={filter} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((p, i) => (
              <Reveal key={p.id} delay={0.05 * i}>
                <div className="rounded-2xl border border-[#E8E0EE] bg-white group hover:shadow-[0_16px_48px_rgba(45,27,61,0.08)] hover:-translate-y-1 transition-all duration-400 overflow-hidden">
                  {/* Image */}
                  <div className="w-full aspect-square img-placeholder relative">
                    {p.id === "chocolate-powder" && (
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[9px] uppercase tracking-widest font-bold bg-[#2D1B3D] text-white">Best Seller</span>
                    )}
                  </div>
                  {/* Info */}
                  <div className="p-5">
                    <div className="flex gap-1 mb-2">
                      {[...Array(5)].map((_, j) => (
                        <svg key={j} className="w-3 h-3 text-[#C490E0]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <h3 className="text-[#2D1B3D] font-bold text-sm mb-0.5">{p.name}</h3>
                    <p className="text-[#8A8A8A] text-xs mb-3">{p.weight}</p>
                    <div className="text-[#2D1B3D] font-extrabold text-lg mb-3">{p.price}</div>
                    <div className="flex gap-2">
                      <button className="flex-1 py-2.5 rounded-lg border border-[#E8E0EE] text-[11px] font-bold uppercase tracking-wider text-[#535353] hover:border-[#C490E0] transition-colors">
                        Full Details
                      </button>
                      <button className="flex-1 py-2.5 rounded-lg text-[11px] font-bold uppercase tracking-wider text-[#2D1B3D]"
                        style={{ background: "linear-gradient(135deg, #EDC9FA 0%, #50F2FF 100%)" }}>
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   7. AS SEEN IN — Press strip (ARMRA style)
   ═══════════════════════════════════════════ */
function AsSeenIn() {
  return (
    <section className="py-12 px-6 border-y border-[#E8E0EE]">
      <Reveal>
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-[#8A8A8A] font-bold mb-6">Trusted & Recognized</p>
          <div className="press-strip flex flex-wrap items-center justify-center gap-8 md:gap-14">
            {["FSSAI", "Made in India", "GMP Certified", "Lab Tested", "ISO Standard"].map((name) => (
              <span key={name} className="text-sm font-bold text-[#8A8A8A]/40 uppercase tracking-wider">{name}</span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ═══════════════════════════════════════════
   8. CLINICALLY BACKED — Stats section (ARMRA style)
   ═══════════════════════════════════════════ */
function ClinicalSection() {
  const stats = [
    { pct: "20%", label: "IgG standardized in every batch" },
    { pct: "400+", label: "Bioactive nutrients naturally present" },
    { pct: "100%", label: "FSSAI licensed manufacturing" },
    { pct: "5", label: "Delicious flavour variants" },
  ];

  return (
    <section className="gradient-mesh-dark py-24 md:py-32 px-6 md:px-12 section-dark relative overflow-hidden">
      <div className="blob-lavender w-[400px] h-[400px] top-[-10%] right-[10%]" />
      <div className="max-w-5xl mx-auto relative z-10">
        <Reveal>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
              Clinically backed.<br />Quality tested.
            </h2>
            <p className="text-white/40 text-sm">Every batch verified for potency, purity, and safety.</p>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={0.08 * i}>
              <div className="text-center p-6 rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm">
                <div className="text-4xl md:text-5xl font-extrabold gradient-text mb-2">{s.pct}</div>
                <p className="text-white/50 text-xs leading-relaxed">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   9. INNOVATION — Split with gradient mesh bg (ARMRA "An innovation in colostrum")
   ═══════════════════════════════════════════ */
function InnovationSection() {
  return (
    <section className="gradient-mesh-2 py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
      <div className="blob-lavender w-[500px] h-[500px] bottom-[-20%] left-[-10%]" />
      <div className="blob-cyan w-[300px] h-[300px] top-[10%] right-[5%]" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Image */}
        <Reveal>
          <div className="w-full aspect-[4/3] rounded-3xl img-placeholder border border-[#E8E0EE] overflow-hidden flex items-center justify-center shadow-[0_16px_48px_rgba(45,27,61,0.06)]">
            <span className="text-[#8A8A8A] text-sm">Innovation / Product Image</span>
          </div>
        </Reveal>
        {/* Text */}
        <div>
          <Reveal>
            <Label text="Innovation" />
            <h2 className="text-3xl md:text-[2.8rem] font-extrabold text-[#2D1B3D] tracking-tight leading-[1.1] mb-6">
              An innovation in colostrum
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[#535353] text-base leading-relaxed mb-6">
              ImmunoDynamix brings cutting-edge science to ancient bovine colostrum.
              Our proprietary extraction concentrates immune-activating
              bioactives — immunoglobulins, lactoferrin, and growth peptides — into
              convenient daily formats.
            </p>
            <div className="flex flex-wrap gap-3">
              <motion.a href="#products" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="px-7 py-3.5 rounded-full font-bold text-sm text-[#2D1B3D]"
                style={{ background: "linear-gradient(135deg, #EDC9FA 0%, #50F2FF 100%)" }}>
                Shop Now
              </motion.a>
              <motion.a href="#how-it-works" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="px-7 py-3.5 rounded-full font-bold text-sm text-[#535353] border border-[#E8E0EE] hover:border-[#C490E0] transition-colors">
                Learn More
              </motion.a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   10. HOW IT WORKS — Tabbed
   ═══════════════════════════════════════════ */
function HowItWorks() {
  const [tab, setTab] = useState<"powder" | "tablet">("powder");
  const powderSteps = [
    { num: "01", title: "Measure", desc: "Scoop the recommended serving (1 scoop ≈ 5g)" },
    { num: "02", title: "Mix", desc: "Add to milk or water and stir until smooth" },
    { num: "03", title: "Enjoy", desc: "Drink once or twice daily for best results" },
  ];
  const tabletSteps = [
    { num: "01", title: "Take", desc: "Take out the recommended number of tablets" },
    { num: "02", title: "Chew", desc: "Chew thoroughly for best absorption" },
    { num: "03", title: "Repeat", desc: "Take twice daily as part of your routine" },
  ];
  const steps = tab === "powder" ? powderSteps : tabletSteps;

  return (
    <section id="how-it-works" className="py-24 md:py-32 px-6 md:px-12 bg-white">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="text-center mb-12">
            <Label text="How It Works" />
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#2D1B3D] tracking-tight mb-8">Simple Daily Routine</h2>
            <div className="inline-flex rounded-full bg-[#F8F5FC] p-1 border border-[#E8E0EE]">
              {(["powder", "tablet"] as const).map((t) => (
                <button key={t} onClick={() => setTab(t)}
                  className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${tab === t ? "text-[#2D1B3D] shadow-sm" : "text-[#8A8A8A]"}`}
                  style={tab === t ? { background: "linear-gradient(135deg, #EDC9FA 0%, #50F2FF 100%)" } : {}}>
                  {t === "powder" ? "Powder" : "Tablets"}
                </button>
              ))}
            </div>
          </div>
        </Reveal>
        <AnimatePresence mode="wait">
          <motion.div key={tab} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <div key={s.num} className="relative">
                <div className="rounded-2xl border border-[#E8E0EE] bg-white p-8 text-center h-full shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                  <div className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center text-base font-extrabold text-[#2D1B3D]"
                    style={{ background: "linear-gradient(135deg, #EDC9FA 0%, #50F2FF 100%)" }}>
                    {s.num}
                  </div>
                  <h3 className="text-[#2D1B3D] font-bold text-xl mb-2">{s.title}</h3>
                  <p className="text-[#535353] text-sm leading-relaxed">{s.desc}</p>
                </div>
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 -translate-y-1/2 z-10 text-[#EDC9FA]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14m-4-4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   11. EXPLORE COLLECTION — Full-width gradient CTA (ARMRA style)
   ═══════════════════════════════════════════ */
function ExploreCollection() {
  return (
    <section className="relative py-28 md:py-36 px-6 overflow-hidden">
      {/* Gradient mesh bg */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #EDC9FA 0%, #B8F0FF 40%, #50F2FF 100%)" }} />
      <div className="blob-lavender w-[600px] h-[600px] top-[-20%] left-[-10%] opacity-40" />
      <div className="blob-cyan w-[400px] h-[400px] bottom-[-20%] right-[-10%] opacity-40" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Image */}
        <Reveal>
          <div className="w-full aspect-[4/3] rounded-3xl img-placeholder border border-white/30 overflow-hidden flex items-center justify-center backdrop-blur-sm shadow-2xl">
            <span className="text-white/40 text-sm">Collection Image</span>
          </div>
        </Reveal>
        {/* Text */}
        <div>
          <Reveal>
            <h2 className="text-3xl md:text-[2.8rem] font-extrabold text-[#2D1B3D] tracking-tight leading-[1.1] mb-6">
              Explore our Health Revival collection
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[#2D1B3D]/70 text-base leading-relaxed mb-8">
              Health as we know it is a state of robustness. ImmunoDynamix works
              holistically by strengthening mucosal barriers, nourishing gut
              microbiome, and activating your body&apos;s innate immune intelligence.
            </p>
            <motion.a href="#products" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              className="inline-flex px-8 py-4 rounded-full font-bold text-sm bg-[#2D1B3D] text-white shadow-lg">
              Explore ImmunoDynamix
            </motion.a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   12. FAQ
   ═══════════════════════════════════════════ */
function FAQSection() {
  const faqs = [
    { q: "What is bovine colostrum?", a: "Bovine colostrum is the first milk produced by cows after giving birth. It is naturally rich in immunoglobulins (IgG), lactoferrin, growth factors, and 400+ bioactive nutrients." },
    { q: "Who can use ImmunoDynamix?", a: "Tablets are suitable for ages 3+ and powders for ages 8+. Designed for children, teens, adults, and seniors." },
    { q: "Is it safe for daily use?", a: "Yes. It is a nutritional supplement, FSSAI licensed, manufactured under strict quality standards." },
    { q: "How should I consume the powder?", a: "Mix 1 scoop (≈5g) with milk or water. Children (8-12): 1 scoop twice daily. Teens & Adults: 1-2 scoops twice daily." },
    { q: "Are the tablets chewable?", a: "Yes. Available in Strawberry and American Ice Cream flavours." },
    { q: "Does it taste good?", a: "Absolutely. 4 delicious flavours plus a mild, neutral unflavoured Pure variant." },
    { q: "How should I store it?", a: "Cool, dry place. Keep tightly closed. Consume within 2 months once opened." },
  ];

  return (
    <section id="faq" className="py-24 md:py-32 px-6 md:px-12 bg-white">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <div className="text-center mb-3">
            <Label text="FAQ" />
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#2D1B3D] tracking-tight mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-[#8A8A8A] text-sm">Have a question we didn&apos;t answer? <a href="#" className="underline text-[#C490E0]">Contact Us</a></p>
          </div>
        </Reveal>
        <div className="mt-10 space-y-3">
          {faqs.map((faq, i) => (
            <Reveal key={faq.q} delay={0.03 * i}>
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer rounded-xl border border-[#E8E0EE] bg-white px-6 py-5 text-[#2D1B3D] font-semibold text-[15px] hover:border-[#EDC9FA] transition-colors">
                  {faq.q}
                  <svg className="w-5 h-5 text-[#C490E0] shrink-0 ml-4 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 py-4 text-[#535353] text-sm leading-relaxed">{faq.a}</div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   13. FINAL CTA — Dark with gradient overlay
   ═══════════════════════════════════════════ */
function FinalCTA() {
  return (
    <section className="gradient-mesh-dark py-28 md:py-36 px-6 section-dark relative overflow-hidden">
      <div className="blob-lavender w-[500px] h-[500px] top-[-20%] left-[20%] opacity-50" />
      <div className="blob-cyan w-[400px] h-[400px] bottom-[-20%] right-[10%] opacity-30" />
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <Reveal>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            Your Revival of Health Starts Here
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-white/50 text-base md:text-lg leading-relaxed mb-10 max-w-lg mx-auto">
            Give your body the natural nutritional support it deserves.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <motion.a href="#products" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            className="inline-block px-10 py-4 rounded-full font-bold text-lg text-[#2D1B3D]"
            style={{ background: "linear-gradient(135deg, #EDC9FA 0%, #50F2FF 100%)", boxShadow: "0 4px 40px rgba(237,201,250,0.35)" }}>
            Shop Now
          </motion.a>
        </Reveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════ */
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <ProblemSection />
        <BarriersSection />
        <TestimonialHighlight />
        <BestSellers />
        <AsSeenIn />
        <ClinicalSection />
        <InnovationSection />
        <ExploreCollection />
        <HowItWorks />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
