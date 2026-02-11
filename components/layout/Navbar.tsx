'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/ui/Logo';
import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

const navLinks = [
  { name: 'About', href: '/about' },
  { name: 'Ashram', href: '/ashram' },
  { name: 'Programs', href: '/programs' },
  { name: 'Practice', href: '/practice' },
  { name: 'Community', href: '/community' },
];

const secondaryLinks = [
  { name: 'Transparency', href: '/#transparency' },
  { name: 'Philosophy', href: '/about#philosophy' },
  { name: 'Daily Schedule', href: '/ashram#schedule' },
  { name: 'Donate Seva', href: '/donate' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const isActive = (href: string) => pathname === href;

  // Text color logic: White when at top (on dark hero), Dark when scrolled (on white glass)
  // or Dark when menu is open.
  const textColorClass = isScrolled || isOpen ? 'text-stone-900' : 'text-stone-100 hover:text-white';
  const logoColor = isScrolled || isOpen ? 'dark' : 'light';

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${isScrolled ? 'bg-stone-50/80 backdrop-blur-xl border-stone-200/50 py-4' : 'bg-transparent border-transparent py-6'}`}
      >
        <div className="container-wide flex items-center justify-between">
          <div className="w-1/3">
            <Link href="/" className="relative z-50 block w-fit">
              {/* Simple Text Logo for now, adapting color */}
              <h1 className={`font-serif text-2xl tracking-widest uppercase font-bold transition-colors duration-500 ${textColorClass}`}>
                Samsara
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center justify-center gap-12 w-1/3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300 relative group ${textColorClass}`}
              >
                {link.name}
                {isActive(link.href) && (
                  <motion.span
                    layoutId="activeNav"
                    className={`absolute -bottom-1 left-0 right-0 h-[2px] ${isScrolled ? 'bg-terracotta-500' : 'bg-white'}`}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Actions - Right Aligned */}
          <div className="flex items-center justify-end gap-8 w-1/3">
            <Link
              href="/donate"
              className={`hidden md:block text-xs uppercase tracking-widest font-medium transition-colors duration-300 relative group ${textColorClass}`}
            >
              <span className="relative z-10">Donate</span>
              <span className={`absolute bottom-[-4px] left-0 w-full h-[1px] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${isScrolled ? 'bg-stone-900' : 'bg-white'}`}></span>
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
              className={`relative z-50 uppercase tracking-[0.2em] text-xs font-semibold flex items-center gap-2 group ${textColorClass}`}
            >
              <span className="group-hover:-translate-x-1 transition-transform duration-300">{isOpen ? "Close" : "Menu"}</span>
              <div className={`w-6 h-[1px] transition-colors duration-300 ${isScrolled || isOpen ? 'bg-stone-900' : 'bg-white'}`}></div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-stone-100"
          >
            <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2 h-full">
              {/* Left Side: Navigation */}
              <div className="h-full flex flex-col justify-center px-8 md:px-20 lg:px-32 border-r border-stone-200">
                <ul className="space-y-4">
                  {navLinks.map((link, idx) => (
                    <motion.li
                      key={link.name}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 + idx * 0.1, duration: 0.5 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="block font-serif text-5xl md:text-6xl lg:text-7xl text-stone-900 hover:text-stone-500 hover:translate-x-4 transition-all duration-300"
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Right Side: Secondary Info (Hidden on mobile) */}
              <div className="hidden lg:flex flex-col justify-center px-20 bg-stone-50">
                <div className="max-w-md space-y-12">
                  <div className="space-y-6">
                    <h3 className="text-xs uppercase tracking-widest text-stone-400">Explore</h3>
                    <ul className="grid grid-cols-2 gap-4">
                      {secondaryLinks.map(link => (
                        <li key={link.name}>
                          <Link href={link.href} onClick={() => setIsOpen(false)} className="text-stone-600 hover:text-stone-900 text-sm font-medium">
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-xs uppercase tracking-widest text-stone-400">Visit Us</h3>
                    <p className="text-stone-800 text-lg leading-relaxed font-serif">
                      108 Silence Valley, <br />
                      Himalayan Foothills, India
                    </p>
                    <p className="text-stone-500 text-sm">
                      Open for meditation daily.<br />
                      6:00 AM — 8:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
