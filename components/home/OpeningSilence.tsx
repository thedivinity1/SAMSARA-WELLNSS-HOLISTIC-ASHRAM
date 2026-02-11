'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export const OpeningSilence = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="h-screen w-full relative overflow-hidden bg-stone-900 pointer-events-auto">
      {/* Parallax Background Image */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
          style={{ backgroundImage: "url('/hero.png')" }}
        />
        <div className="absolute inset-0 bg-stone-900/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/30 via-transparent to-stone-900/90" />
      </motion.div>

      {/* CSS Noise Overlay */}
      <div className="absolute inset-0 pointer-events-none z-[1] opacity-[0.03] mix-blend-overlay">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8 max-w-4xl mx-auto"
        >
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "circOut" }}
              className="text-stone-300 uppercase tracking-[0.4em] text-xs md:text-sm font-medium"
            >
              Since 2024 • Global Sanctuary
            </motion.p>
          </div>

          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-stone-50 leading-[0.9] tracking-tight">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                Silence is
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="block italic font-light text-sage-200"
              >
                the Beginning.
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="text-stone-300 text-lg md:text-xl font-light max-w-xl mx-auto leading-relaxed"
          >
            A registered NGO & living ashram bridging ancient wisdom with modern science.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="pt-8 flex flex-col md:flex-row gap-6 justify-center items-center"
          >
            <Button size="lg" className="bg-sage-600 hover:bg-sage-500 text-white rounded-full px-10 py-7 text-lg tracking-wide transition-all duration-500 hover:scale-105">
              Begin the Journey
            </Button>
            <button className="text-stone-300 hover:text-white transition-colors tracking-widest text-sm uppercase border-b border-transparent hover:border-stone-50 pb-1">
              Watch the Film
            </button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-stone-400 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-stone-400 to-transparent" />
      </motion.div>
    </section>
  );
};
