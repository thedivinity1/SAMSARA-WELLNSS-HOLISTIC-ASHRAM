'use client';
import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    title: "Curiosity",
    desc: "Your first breath of stillness. Discover what draws you here.",
    icon: "🌱"
  },
  {
    title: "Immersion",
    desc: "Deep dive into practice through retreats and daily discipline.",
    icon: "🌊"
  },
  {
    title: "Integration",
    desc: "Weave wisdom into your daily life. Transform ordinary moments.",
    icon: "🌿"
  },
  {
    title: "Service",
    desc: "Give back to the community. Become a guide for others.",
    icon: "🕊️"
  },
];

export const InteractiveTimeline = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-sage-50 via-sage-100/50 to-stone-50 overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-sage-200 rounded-full blur-[150px] opacity-30" />

      <div className="container-wide relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 space-y-4"
        >
          <span className="text-terracotta-500 uppercase tracking-[0.3em] text-xs font-bold">
            The Path
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900">
            Your <span className="italic text-sage-600">Journey</span>
          </h2>
          <p className="text-stone-500 max-w-md mx-auto">
            From seeker to guide. A lifelong path of growth and service.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute top-20 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-sage-300 to-transparent hidden md:block" />

          {/* Animated Progress Line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute top-20 left-0 h-[2px] bg-gradient-to-r from-terracotta-400 via-sage-500 to-terracotta-400 hidden md:block"
          />

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                className="text-center group"
              >
                {/* Circle */}
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 bg-white border-2 border-sage-400 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl shadow-lg shadow-sage-200/50 relative z-20 group-hover:border-terracotta-400 group-hover:shadow-terracotta-200/50 transition-all duration-300"
                >
                  {step.icon}
                </motion.div>

                {/* Content */}
                <h3 className="font-serif text-xl text-stone-800 mb-3 group-hover:text-sage-700 transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-stone-500 max-w-[180px] mx-auto leading-relaxed">
                  {step.desc}
                </p>

                {/* Step Number */}
                <div className="mt-4 text-xs text-stone-300 font-bold uppercase tracking-widest">
                  Step {idx + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
