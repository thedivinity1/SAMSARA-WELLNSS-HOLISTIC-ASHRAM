'use client';
import React from 'react';
import { motion } from 'framer-motion';

type Path = {
  title: string;
  desc: string;
  image?: string;
  gradient: string;
  accent: string;
  pattern?: boolean;
};

const paths: Path[] = [
  {
    title: "Meditation",
    desc: "Cultivate inner silence through guided sitting and walking practices.",
    image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=800&h=1000&fit=crop",
    gradient: "from-stone-900/90 via-stone-800/70 to-transparent",
    accent: "terracotta"
  },
  {
    title: "Seva (Service)",
    desc: "Action as prayer. Engage in community gardening, cooking, and support.",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=1000&fit=crop",
    gradient: "from-sage-900/90 via-sage-800/70 to-transparent",
    accent: "sage"
  },
  {
    title: "Wisdom",
    desc: "Study of ancient texts (Vedanta, Yoga Sutras) bridging science and spirituality.",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=1000&fit=crop",
    gradient: "from-stone-900/95 via-stone-800/80 to-transparent",
    accent: "gold",
  },
  {
    title: "Healing",
    desc: "Restore balance with sound baths, ayurvedic nutrition, and somatic movement.",
    image: "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?w=800&h=1000&fit=crop",
    gradient: "from-sage-900/95 via-sage-800/80 to-transparent",
    accent: "terracotta",
  },
];

// Decorative pattern SVG for cards without images
const DecorativePattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="mandala" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
        <circle cx="40" cy="40" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="40" cy="40" r="25" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="40" cy="40" r="15" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="40" cy="40" r="5" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <path d="M40 5 L40 75 M5 40 L75 40 M15 15 L65 65 M15 65 L65 15" stroke="currentColor" strokeWidth="0.3" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#mandala)" />
  </svg>
);

export const PathsOfPractice = () => {
  return (
    <section className="py-28 bg-stone-50 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sage-100 rounded-full blur-[150px] opacity-50 translate-x-1/3 -translate-y-1/3" />

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 space-y-6"
        >
          <span className="text-terracotta-500 uppercase tracking-[0.3em] text-xs font-bold">
            The Four Pillars
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-stone-900">
            Paths of <span className="italic text-sage-600">Practice</span>
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto text-lg font-light leading-relaxed">
            There are many ways to the summit. Choose the path that resonates with your current season of life.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:h-[550px]">
          {paths.map((path, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="relative overflow-hidden group cursor-pointer rounded-xl min-h-[350px] lg:min-h-0"
            >
              {/* Background Image or Gradient */}
              {path.image ? (
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${path.image}')` }}
                />
              ) : (
                <div className={`absolute inset-0 bg-gradient-to-b ${path.gradient}`}>
                  {path.pattern && <DecorativePattern />}
                </div>
              )}

              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${path.gradient} opacity-80 group-hover:opacity-90 transition-opacity duration-500`} />

              {/* Animated Border on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`absolute inset-0 rounded-xl border-2 ${path.accent === 'terracotta' ? 'border-terracotta-500/50' :
                  path.accent === 'gold' ? 'border-gold-400/50' : 'border-sage-400/50'
                  }`} />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white z-10">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {/* Accent line */}
                  <div className={`h-[2px] mb-6 group-hover:w-20 transition-all duration-500 ${path.accent === 'terracotta' ? 'w-12 bg-terracotta-400' :
                    path.accent === 'gold' ? 'w-12 bg-gold-400' : 'w-12 bg-sage-400'
                    }`} />

                  {/* Title */}
                  <h3 className="font-serif text-3xl md:text-4xl mb-4 text-shadow-lg">
                    {path.title}
                  </h3>

                  {/* Description - Fades in on hover */}
                  <p className="text-stone-200 text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 leading-relaxed max-w-[280px]">
                    {path.desc}
                  </p>

                  {/* Learn More Link */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    <span className={`text-xs uppercase tracking-wider font-medium ${path.accent === 'terracotta' ? 'text-terracotta-300' :
                      path.accent === 'gold' ? 'text-gold-300' : 'text-sage-300'
                      }`}>
                      Explore →
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
