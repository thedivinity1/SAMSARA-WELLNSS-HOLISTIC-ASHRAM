'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const WhatIsSamsara = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={sectionRef} className="py-32 bg-stone-50 overflow-hidden relative">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-100/50 via-transparent to-sage-50/30" />

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-20 space-y-6">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-terracotta-500 uppercase tracking-[0.3em] text-xs font-bold inline-flex items-center gap-3"
          >
            <span className="w-8 h-[2px] bg-terracotta-400" />
            Our Foundation
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-serif text-5xl md:text-6xl text-stone-900 leading-[1.1]"
          >
            Not just an app. <br />
            <span className="text-sage-500 italic font-light">A living ecosystem.</span>
          </motion.h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-5 h-auto lg:h-[850px]">

          {/* Card 1: Main Feature (Large) - Living Ashram */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-6 lg:col-span-8 row-span-2 relative bg-stone-800 rounded-2xl overflow-hidden group min-h-[450px]"
          >
            {/* Parallax Background Image */}
            <motion.div
              style={{ y: backgroundY }}
              className="absolute inset-0 bg-cover bg-center scale-110"
            // Using a premium gradient pattern as placeholder - replace with actual image
            >
              <div className="absolute inset-0 bg-gradient-to-br from-sage-900 via-sage-800 to-stone-900" />
              {/* Mountain silhouette SVG */}
              <svg className="absolute bottom-0 w-full h-auto opacity-20" viewBox="0 0 1200 300" preserveAspectRatio="none">
                <path d="M0 300L200 150L350 200L500 100L700 180L850 80L1000 150L1200 50L1200 300Z" fill="currentColor" className="text-stone-950" />
              </svg>
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-900/50 to-transparent group-hover:via-stone-900/40 transition-all duration-700" />

            {/* Decorative Elements */}
            <div className="absolute top-8 right-8 w-20 h-20 border border-sage-500/20 rounded-full group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute top-10 right-10 w-16 h-16 border border-terracotta-500/20 rounded-full group-hover:scale-110 transition-transform duration-700 delay-100" />

            <div className="absolute bottom-10 left-10 right-10 text-white space-y-4 z-10">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 60 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="h-[2px] bg-terracotta-400"
              />
              <h3 className="font-serif text-4xl md:text-5xl tracking-tight">Living Ashram</h3>
              <p className="text-stone-300 border-l-2 border-terracotta-500/50 pl-4 py-1 max-w-lg text-lg font-light">
                A physical sanctuary in the Himalayas for deep immersion, retreat, and transformation.
              </p>
              <button className="mt-4 text-sm uppercase tracking-wider text-terracotta-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group/btn">
                <span>Explore the Ashram</span>
                <span className="group-hover/btn:translate-x-2 transition-transform duration-300">→</span>
              </button>
            </div>
          </motion.div>

          {/* Card 2: Transparency (Medium) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="col-span-1 md:col-span-3 lg:col-span-4 row-span-1 bg-gradient-to-br from-sage-700 via-sage-800 to-sage-900 text-sage-50 p-8 flex flex-col justify-between rounded-2xl relative overflow-hidden group min-h-[220px]"
          >
            {/* Glassmorphism overlay on hover */}
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Pattern */}
            <svg className="absolute top-0 right-0 w-32 h-32 text-sage-600 opacity-30" viewBox="0 0 100 100">
              <circle cx="80" cy="20" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="80" cy="20" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </svg>

            <div className="relative z-10">
              <div className="text-5xl font-serif font-light tracking-tight text-white">100%</div>
            </div>
            <div className="relative z-10">
              <h3 className="uppercase tracking-[0.2em] text-xs mb-2 text-sage-300 font-bold">Governance</h3>
              <p className="font-serif text-2xl text-white">Registered Non-Profit</p>
            </div>
          </motion.div>

          {/* Card 3: Digital (Medium) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="col-span-1 md:col-span-3 lg:col-span-4 row-span-1 bg-white p-8 flex flex-col justify-between rounded-2xl border border-stone-200 hover:border-terracotta-300/50 hover:shadow-xl hover:shadow-terracotta-100/50 transition-all duration-500 group relative overflow-hidden min-h-[220px]"
          >
            {/* Gradient corner accent */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-bl from-terracotta-100 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="w-14 h-14 rounded-full border-2 border-terracotta-300 flex items-center justify-center text-terracotta-500 group-hover:border-terracotta-400 transition-colors duration-300 relative z-10"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
            </motion.div>
            <div className="relative z-10">
              <h3 className="uppercase tracking-[0.2em] text-xs mb-2 text-stone-400 font-bold">Access</h3>
              <p className="font-serif text-2xl text-stone-800">Digital Sanctuary</p>
              <p className="text-stone-500 text-sm mt-1">Practice anywhere, anytime</p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
