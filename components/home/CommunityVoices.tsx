'use client';
import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Samsara isn't just a place. It's a remembering of who we truly are.",
    author: "Elena Reyes",
    role: "Member since 2021",
    initials: "ER",
    bgColor: "bg-terracotta-100"
  },
  {
    quote: "The transparency here changed how I view giving. Every rupee is sacred.",
    author: "Marcus Thompson",
    role: "Donor Partner",
    initials: "MT",
    bgColor: "bg-sage-100"
  },
  {
    quote: "Deep, rigorous, and completely devoid of fluff. This is real work.",
    author: "Sarah Liu",
    role: "Retreat Participant",
    initials: "SL",
    bgColor: "bg-gold-100"
  },
];

export const CommunityVoices = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-stone-50 to-stone-100 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-sage-200 rounded-full opacity-40" />
      <div className="absolute bottom-20 right-10 w-48 h-48 border border-terracotta-200 rounded-full opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sage-50 rounded-full blur-[150px] opacity-50" />

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 space-y-6"
        >
          <span className="text-terracotta-500 uppercase tracking-[0.3em] text-xs font-bold">
            Testimonials
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900">
            Voices from the <span className="italic text-sage-600">Path</span>
          </h2>
          <p className="text-stone-500 max-w-md mx-auto">
            Real stories from seekers who have walked with us
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg shadow-stone-200/50 border border-stone-100 hover:shadow-xl hover:shadow-stone-200/70 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                {/* Large Quote Mark */}
                <div className="text-7xl font-serif text-terracotta-200 leading-none -mt-2 -ml-2 select-none group-hover:text-terracotta-300 transition-colors duration-300">
                  "
                </div>

                {/* Quote */}
                <p className="font-serif text-xl lg:text-2xl text-stone-700 italic leading-relaxed flex-grow -mt-6">
                  {t.quote}
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 mt-8 pt-6 border-t border-stone-100">
                  {/* Avatar */}
                  <div className={`w-14 h-14 rounded-full ${t.bgColor} flex items-center justify-center font-serif text-xl text-stone-600 group-hover:scale-110 transition-transform duration-300`}>
                    {t.initials}
                  </div>

                  <div>
                    <div className="font-semibold text-stone-900 text-base">{t.author}</div>
                    <div className="text-stone-500 text-sm uppercase tracking-wider">{t.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <button className="px-8 py-4 border-2 border-sage-600 text-sage-700 hover:bg-sage-600 hover:text-white rounded-full uppercase tracking-widest text-xs font-bold transition-all duration-300">
            Read More Stories
          </button>
        </motion.div>
      </div>
    </section>
  );
};
