'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Lotus Icon
const LotusIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="20" cy="30" rx="8" ry="4" stroke="currentColor" strokeWidth="1" opacity="0.6" />
    <path d="M20 10 Q25 20 20 30 Q15 20 20 10" stroke="currentColor" strokeWidth="1" fill="none" />
    <path d="M12 15 Q20 22 28 15" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.7" />
    <path d="M8 22 Q20 28 32 22" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
  </svg>
);

export const TheAshramExperience = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section ref={sectionRef} className="py-32 bg-stone-950 text-stone-50 overflow-hidden relative">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-900 via-stone-950 to-stone-900 opacity-80" />

      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="ashram-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ashram-pattern)" />
        </svg>
      </div>

      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sage-900/30 rounded-full blur-[150px]" />
      <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-terracotta-900/20 rounded-full blur-[120px]" />

      <div className="container-wide relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Text Content */}
        <motion.div
          style={{ y: textY }}
          className="space-y-8 order-2 lg:order-1"
        >
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <span className="text-terracotta-400">
              <LotusIcon />
            </span>
            <span className="text-sage-400 uppercase tracking-[0.2em] text-xs font-bold">
              The Physical Sanctuary
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1]"
          >
            A rhythm of life{' '}
            <span className="text-sage-400 italic">aligned with nature.</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-stone-400 leading-relaxed max-w-lg text-lg"
          >
            Waking with the sun. Silent meals. Community work. Deep inquiry.
            The Ashram is not a retreat center; it is a <span className="text-terracotta-400">school for the soul</span>.
          </motion.p>

          {/* Features List */}
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-3 text-stone-400 text-sm"
          >
            {['5:00 AM morning meditation', 'Organic farm-to-table meals', 'Daily teachings & satsang', 'Work meditation (Karma Yoga)'].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-terracotta-500 rounded-full" />
                {item}
              </li>
            ))}
          </motion.ul>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="pt-4"
          >
            <button className="px-8 py-4 bg-terracotta-600 hover:bg-terracotta-500 text-white rounded-full text-sm uppercase tracking-widest font-bold transition-all duration-300 hover:shadow-lg hover:shadow-terracotta-900/50 hover:-translate-y-1">
              Explore Daily Life
            </button>
          </motion.div>
        </motion.div>

        {/* Image/Video Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{ y: imageY }}
          className="relative order-1 lg:order-2"
        >
          <div className="aspect-[4/5] rounded-3xl overflow-hidden relative">
            {/* Image with gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-sage-800 via-sage-900 to-stone-900">
              {/* Decorative sunrise pattern */}
              <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 500" preserveAspectRatio="none">
                <defs>
                  <radialGradient id="sunrise" cx="50%" cy="80%" r="60%">
                    <stop offset="0%" stopColor="#d4a84a" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <rect width="100%" height="100%" fill="url(#sunrise)" />
                <circle cx="200" cy="400" r="80" fill="none" stroke="#d4a84a" strokeWidth="0.5" opacity="0.3" />
                <circle cx="200" cy="400" r="120" fill="none" stroke="#d4a84a" strokeWidth="0.5" opacity="0.2" />
                <circle cx="200" cy="400" r="160" fill="none" stroke="#d4a84a" strokeWidth="0.5" opacity="0.1" />
              </svg>

              {/* Mountain silhouettes */}
              <svg className="absolute bottom-0 w-full opacity-30" viewBox="0 0 400 150" preserveAspectRatio="none">
                <path d="M0 150 L80 60 L160 100 L240 40 L320 80 L400 20 L400 150 Z" fill="#1c1917" />
                <path d="M0 150 L100 80 L200 110 L300 60 L400 90 L400 150 Z" fill="#292524" opacity="0.7" />
              </svg>
            </div>

            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
              >
                <svg className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </motion.button>
            </div>

            {/* Caption */}
            <div className="absolute bottom-6 left-6 right-6 text-center">
              <p className="text-stone-300 text-sm font-light italic">
                A glimpse into morning rituals at the ashram
              </p>
            </div>
          </div>

          {/* Decorative frame */}
          <div className="absolute -inset-4 border border-sage-800/30 rounded-[2rem] pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};
