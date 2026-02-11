import React from 'react';
import { Logo } from '@/components/ui/Logo';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-24 relative overflow-hidden">
      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-terracotta-500/50 to-transparent" />

      <div className="container-wide grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 relative z-10">
        <div className="space-y-8">
          <Logo className="text-stone-50" />
          <p className="text-sm leading-relaxed max-w-xs text-stone-500">
            A registered NGO, living wellness ashram, and digital sanctuary.
            Merging ancient wisdom with modern science for global transformation.
          </p>
          <div className="flex gap-4">
            {['Instagram', 'Youtube', 'Twitter', 'Facebook'].map((social) => (
              <a
                key={social}
                href={`#${social.toLowerCase()}`}
                className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center hover:border-terracotta-500 hover:text-stone-50 transition-all duration-300 group"
              >
                <span className="sr-only">{social}</span>
                <div className="text-xs font-bold uppercase tracking-tighter opacity-70 group-hover:opacity-100">{social[0]}</div>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-stone-50 font-serif text-lg mb-8">Navigation</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><Link href="/about" className="hover:text-terracotta-400 transition-colors">About Samsara</Link></li>
            <li><Link href="/ashram" className="hover:text-terracotta-400 transition-colors">The Ashram</Link></li>
            <li><Link href="/programs" className="hover:text-terracotta-400 transition-colors">Programs & Paths</Link></li>
            <li><Link href="/practice" className="hover:text-terracotta-400 transition-colors">Daily Practice</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-stone-50 font-serif text-lg mb-8">Service</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><Link href="/community" className="hover:text-terracotta-400 transition-colors">Global Community</Link></li>
            <li><Link href="/donate" className="hover:text-terracotta-400 transition-colors">Support Seva</Link></li>
            <li><Link href="/impact" className="hover:text-terracotta-400 transition-colors">Radical Transparency</Link></li>
            <li><Link href="/volunteer" className="hover:text-terracotta-400 transition-colors">Volunteer In-Person</Link></li>
          </ul>
        </div>

        <div className="space-y-8">
          <div>
            <h4 className="text-stone-50 font-serif text-lg mb-4">Stay Connected</h4>
            <p className="text-sm text-stone-500 mb-6 font-medium">Receive wisdom, not noise.</p>
            <form className="flex flex-col gap-3 group">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-stone-900 border border-stone-800 p-4 text-stone-200 focus:outline-none focus:border-terracotta-500 transition-all duration-500 text-sm rounded-xl"
              />
              <button type="submit" className="bg-stone-50 text-stone-900 py-4 text-xs font-bold uppercase tracking-widest hover:bg-terracotta-500 hover:text-white transition-all duration-500 rounded-xl">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="container-wide mt-24 pt-8 border-t border-stone-800/50 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest font-bold text-stone-600">
        <p>&copy; {new Date().getFullYear()} Samsara Wellness. All rights reserved.</p>
        <div className="flex gap-8 mt-6 md:mt-0">
          <Link href="/privacy" className="hover:text-stone-300">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-stone-300">Terms of Service</Link>
          <Link href="/accessibility" className="hover:text-stone-300">Accessibility</Link>
        </div>
      </div>
    </footer>
  );
};
