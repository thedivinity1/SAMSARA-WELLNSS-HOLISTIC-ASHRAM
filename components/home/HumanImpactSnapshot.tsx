'use client';
import React, { useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

// Animated Counter Component with smooth counting
const AnimatedCounter = ({ value, suffix = "", duration = 2 }: { value: number, suffix?: string, duration?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const spring = useSpring(0, {
    duration: duration * 1000,
    bounce: 0
  });

  const display = useTransform(spring, (current) =>
    Math.floor(current).toLocaleString()
  );

  React.useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return (
    <span ref={ref}>
      <motion.span>{display}</motion.span>
    </span>
  );
};

// Stat Icons
const icons = {
  lives: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  ),
  programs: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
    </svg>
  ),
  funds: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  transparent: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
};

const StatCounter = ({
  value,
  label,
  suffix = "",
  icon,
  delay = 0
}: {
  value: number | string,
  label: string,
  suffix?: string,
  icon: keyof typeof icons,
  delay?: number
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className="space-y-6 group cursor-default relative"
    >
      {/* Decorative glow on hover */}
      <div className="absolute -inset-4 bg-gradient-to-b from-terracotta-500/0 to-terracotta-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Icon */}
      <motion.div
        className="flex justify-center text-terracotta-400 group-hover:text-terracotta-300 transition-colors duration-300"
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        {icons[icon]}
      </motion.div>

      {/* Number */}
      <div className="font-serif text-5xl md:text-6xl lg:text-7xl text-white font-light flex justify-center tracking-tight relative">
        {typeof value === 'number' ? (
          <AnimatedCounter value={value} suffix={suffix} />
        ) : (
          <span>{value}</span>
        )}
        <span className="text-terracotta-400 ml-1 text-4xl md:text-5xl">{suffix}</span>

        {/* Animated underline */}
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: '60%' } : {}}
          transition={{ duration: 1, delay: delay + 0.8, ease: "easeOut" }}
          className="absolute -bottom-3 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-transparent via-terracotta-500/50 to-transparent"
        />
      </div>

      {/* Label */}
      <p className="text-sage-300 uppercase tracking-[0.2em] text-xs font-medium group-hover:text-white transition-colors duration-300 relative z-10">
        {label}
      </p>
    </motion.div>
  );
};

export const HumanImpactSnapshot = () => {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Premium Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-950 via-stone-900 to-sage-950" />

      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Radial Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-terracotta-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="container-wide relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 space-y-4"
        >
          <span className="text-terracotta-400 uppercase tracking-[0.3em] text-xs font-bold">
            Our Impact
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-white">
            Transforming Lives, <span className="italic text-sage-300">Together</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-8 text-center">
          <StatCounter value={12500} label="Lives Touched" suffix="+" icon="lives" delay={0} />
          <StatCounter value={45} label="Community Programs" suffix="" icon="programs" delay={0.1} />
          <StatCounter value="$2.4" label="Funds Deployed" suffix="M" icon="funds" delay={0.2} />
          <StatCounter value={100} label="Transparent Allocation" suffix="%" icon="transparent" delay={0.3} />
        </div>

        {/* Bottom Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          className="mt-20 h-[1px] bg-gradient-to-r from-transparent via-stone-700 to-transparent mx-auto max-w-2xl"
        />
      </div>
    </section>
  );
};
