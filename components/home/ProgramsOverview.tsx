'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const programs = [
  {
    title: "Silent Retreats",
    type: "Immersion",
    duration: "3-10 Days",
    description: "Step away from the noise. Reconnect with stillness in our Himalayan sanctuary.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop",
    accent: "terracotta"
  },
  {
    title: "Mindfulness Teacher Training",
    type: "Certification",
    duration: "6 Months",
    description: "Comprehensive training rooted in ancient wisdom and modern neuroscience.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop",
    accent: "sage"
  },
  {
    title: "Weekend Reset",
    type: "Workshop",
    duration: "2 Days",
    description: "A powerful weekend of restoration, reflection, and renewal.",
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&h=600&fit=crop",
    accent: "gold"
  },
];

export const ProgramsOverview = () => {
  return (
    <section className="py-28 bg-gradient-to-b from-white via-stone-50 to-stone-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-sage-100 rounded-full blur-[150px] opacity-40 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-terracotta-100 rounded-full blur-[120px] opacity-30 -translate-x-1/3" />

      <div className="container-wide relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6"
        >
          <div className="space-y-4">
            <span className="text-terracotta-500 uppercase tracking-[0.3em] text-xs font-bold">
              Transformative Journeys
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900">
              Programs & <span className="italic text-sage-600">Offerings</span>
            </h2>
            <p className="text-stone-500 max-w-md text-lg font-light">
              Structured paths for deep transformation, from weekend workshops to immersive retreats.
            </p>
          </div>
          <motion.a
            href="/programs"
            whileHover={{ x: 5 }}
            className="text-sage-700 font-bold uppercase tracking-widest text-xs flex items-center gap-2 border-b-2 border-sage-300 pb-1 hover:border-sage-600 transition-colors"
          >
            View All Programs <span className="text-lg">→</span>
          </motion.a>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((prog, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-80 mb-6 rounded-2xl overflow-hidden shadow-lg shadow-stone-200/50 group-hover:shadow-xl group-hover:shadow-stone-300/50 transition-all duration-500">
                {/* Image */}
                <Image
                  src={prog.image}
                  alt={prog.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  unoptimized
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-500" />

                {/* Accent Top Border */}
                <div className={`absolute top-0 left-0 right-0 h-1 ${prog.accent === 'terracotta' ? 'bg-terracotta-500' :
                    prog.accent === 'sage' ? 'bg-sage-500' : 'bg-gold-500'
                  }`} />

                {/* Type Badge */}
                <div className={`absolute top-4 left-4 backdrop-blur-md px-4 py-2 text-xs uppercase tracking-wider font-bold rounded-full ${prog.accent === 'terracotta' ? 'bg-terracotta-500/90 text-white' :
                    prog.accent === 'sage' ? 'bg-sage-600/90 text-white' : 'bg-gold-500/90 text-stone-900'
                  }`}>
                  {prog.type}
                </div>

                {/* Bottom Content (visible on hover) */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white/90 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 leading-relaxed">
                    {prog.description}
                  </p>
                </div>

                {/* Arrow indicator */}
                <div className="absolute bottom-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-2">
                <h3 className={`font-serif text-2xl text-stone-900 group-hover:${prog.accent === 'terracotta' ? 'text-terracotta-600' :
                    prog.accent === 'sage' ? 'text-sage-700' : 'text-gold-600'
                  } transition-colors duration-300`}>
                  {prog.title}
                </h3>
                <div className="flex items-center gap-2">
                  <span className={`w-8 h-[2px] ${prog.accent === 'terracotta' ? 'bg-terracotta-400' :
                      prog.accent === 'sage' ? 'bg-sage-400' : 'bg-gold-400'
                    }`} />
                  <p className="text-stone-500 text-sm font-medium uppercase tracking-wider">{prog.duration}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:hidden"
        >
          <a
            href="/programs"
            className="inline-flex items-center gap-2 px-8 py-4 bg-sage-600 hover:bg-sage-500 text-white rounded-full uppercase tracking-widest text-xs font-bold transition-all duration-300"
          >
            View All Programs <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
