'use client';
import React from 'react';
import { motion } from 'framer-motion';

// Decorative lotus/mandala SVG
const LotusMandala = () => (
  <svg
    viewBox="0 0 200 200"
    className="w-full h-full"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
    <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
    <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
    <circle cx="100" cy="100" r="20" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
    {/* Lotus petals */}
    {[...Array(12)].map((_, i) => (
      <ellipse
        key={i}
        cx="100"
        cy="30"
        rx="15"
        ry="30"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.3"
        transform={`rotate(${i * 30} 100 100)`}
      />
    ))}
    {/* Inner lotus petals */}
    {[...Array(8)].map((_, i) => (
      <ellipse
        key={`inner-${i}`}
        cx="100"
        cy="50"
        rx="10"
        ry="20"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.4"
        transform={`rotate(${i * 45} 100 100)`}
      />
    ))}
  </svg>
);

export const PurposeManifesto = () => {
  return (
    <section className="py-32 lg:py-48 px-6 bg-gradient-to-b from-stone-50 via-stone-50 to-stone-100 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-sage-100 to-transparent rounded-full blur-[100px] opacity-60 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-terracotta-100 to-transparent rounded-full blur-[100px] opacity-40 translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      {/* Lotus Mandala - Left Side */}
      <motion.div
        initial={{ opacity: 0, rotate: -10 }}
        whileInView={{ opacity: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] text-sage-300 opacity-30 hidden lg:block"
      >
        <LotusMandala />
      </motion.div>

      {/* Lotus Mandala - Right Side */}
      <motion.div
        initial={{ opacity: 0, rotate: 10 }}
        whileInView={{ opacity: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-[400px] h-[400px] text-terracotta-300 opacity-20 hidden lg:block"
      >
        <LotusMandala />
      </motion.div>

      <div className="container-wide max-w-5xl mx-auto text-center space-y-16 relative z-10">
        {/* Top Decorative Element */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4"
        >
          <div className="h-20 w-[1px] bg-gradient-to-b from-transparent via-sage-400 to-sage-600" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="w-3 h-3 border border-terracotta-400 rotate-45"
          />
          <span className="block text-terracotta-600 uppercase tracking-[0.3em] text-xs font-bold mt-2">
            Our Purpose
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.15] text-stone-900 tracking-tight"
        >
          We believe wellness is not a product, but a{' '}
          <span className="relative inline-block">
            <span className="italic font-light text-sage-700">
              return to self
            </span>
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ delay: 1, duration: 1, ease: "circOut" }}
              className="absolute bottom-2 left-0 h-[3px] bg-gradient-to-r from-sage-300 via-terracotta-300 to-sage-300"
            />
          </span>.
        </motion.h2>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-stone-500 font-light text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto leading-relaxed"
        >
          Samsara bridges <span className="text-sage-600 font-normal">ancient wisdom</span> with <span className="text-terracotta-500 font-normal">modern living</span>.
        </motion.p>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="max-w-lg mx-auto pt-8 space-y-6"
        >
          <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-stone-300 to-transparent mx-auto" />
          <p className="text-stone-400 text-sm md:text-base leading-relaxed font-medium italic">
            "Creating a world where spiritual growth is accessible, grounded, and deeply community-driven."
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="pt-8"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-stone-300 rounded-full mx-auto flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-terracotta-400 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
