'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const GuidedMicroPractice = () => {
  const [active, setActive] = useState(false);
  const [phase, setPhase] = useState('Breathe');
  const [countdown, setCountdown] = useState(4);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (active) {
      const cycle = async () => {
        // Inhale, Hold, Exhale, Hold logic...
        // Note: The async loop continues even if unmounted, but React handles state updates on unmounted components gracefully in recent versions (or ignores them).
        // For a micro practice, this is acceptable complexity.
        setPhase('Inhale');
        for (let i = 4; i > 0; i--) { setCountdown(i); await new Promise(r => setTimeout(r, 1000)); }
        setPhase('Hold');
        for (let i = 4; i > 0; i--) { setCountdown(i); await new Promise(r => setTimeout(r, 1000)); }
        setPhase('Exhale');
        for (let i = 4; i > 0; i--) { setCountdown(i); await new Promise(r => setTimeout(r, 1000)); }
        setPhase('Hold');
        for (let i = 4; i > 0; i--) { setCountdown(i); await new Promise(r => setTimeout(r, 1000)); }
      };

      cycle();
      interval = setInterval(cycle, 16000);
    } else {
      setPhase('Breathe');
      setCountdown(4);
    }

    return () => {
      clearInterval(interval);
    };
  }, [active]);

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-100 via-sage-50/50 to-stone-50" />

      {/* Decorative Circles */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-sage-300 rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.03, 1], opacity: [0.08, 0.12, 0.08] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] border border-sage-200 rounded-full"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-sage-100 rounded-full opacity-50" />
      </div>

      {/* Sound Wave Elements */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <AnimatePresence>
          {active && (
            <>
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 2 + i * 0.5, opacity: [0, 0.2, 0] }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 4, repeat: Infinity, delay: i * 1, ease: "easeOut" }}
                  className="absolute w-48 h-48 border border-terracotta-300 rounded-full"
                />
              ))}
            </>
          )}
        </AnimatePresence>
      </div>

      <div className="container-wide relative z-10">
        <div className="max-w-xl mx-auto text-center space-y-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <span className="text-terracotta-500 uppercase tracking-[0.3em] text-xs font-bold">
              Micro Practice
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-800">
              Pause for a <span className="italic text-sage-600">moment</span>.
            </h2>
            <p className="text-stone-500 max-w-sm mx-auto text-lg font-light">
              Re-center yourself with a simple box breathing practice.
            </p>
          </motion.div>

          {/* Breathing Circle */}
          <div className="relative flex items-center justify-center h-80">
            <motion.button
              className="w-56 h-56 rounded-full flex items-center justify-center relative outline-none focus:outline-none"
              onClick={() => setActive(!active)}
              animate={active ? {
                scale: phase === 'Inhale' ? 1.4 : phase === 'Exhale' ? 1 : (phase === 'Hold' ? (countdown > 2 ? 1.4 : 1.4) : 1),
              } : { scale: 1 }}
              transition={{ duration: 4, ease: "easeInOut" }}
            >
              {/* Outer glow */}
              <motion.div
                className={`absolute inset-0 rounded-full transition-all duration-1000 ${active
                  ? 'bg-gradient-to-br from-sage-500 via-sage-600 to-terracotta-500 shadow-2xl shadow-sage-500/30'
                  : 'bg-gradient-to-br from-stone-200 to-stone-300 hover:from-stone-300 hover:to-stone-400'
                  }`}
              />

              {/* Inner circle */}
              <div className={`absolute inset-3 rounded-full transition-colors duration-500 ${active ? 'bg-sage-600' : 'bg-stone-200'
                }`} />

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center space-y-2">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={phase}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`font-serif text-2xl md:text-3xl italic ${active ? 'text-white' : 'text-stone-600'
                      }`}
                  >
                    {active ? phase : "Start"}
                  </motion.span>
                </AnimatePresence>

                {active ? (
                  <motion.span
                    key={countdown}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-white/80 text-4xl font-light"
                  >
                    {countdown}
                  </motion.span>
                ) : (
                  <span className="text-[10px] uppercase tracking-widest text-stone-400">
                    Tap to Begin
                  </span>
                )}
              </div>
            </motion.button>
          </div>

          {/* Instructions */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center gap-8 text-stone-400 text-xs uppercase tracking-wider"
          >
            <span className={phase === 'Inhale' && active ? 'text-sage-600 font-bold' : ''}>Inhale 4s</span>
            <span className={phase === 'Hold' && active ? 'text-terracotta-500 font-bold' : ''}>Hold 4s</span>
            <span className={phase === 'Exhale' && active ? 'text-sage-600 font-bold' : ''}>Exhale 4s</span>
            <span className={phase === 'Hold' && active ? 'text-terracotta-500 font-bold' : ''}>Hold 4s</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
