'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ambientSounds = [
    { name: 'Silence', color: 'bg-stone-200' },
    { name: 'Himalayan Bowls', color: 'bg-gold-200' },
    { name: 'Forest Rain', color: 'bg-sage-200' },
    { name: 'Pure Om', color: 'bg-terracotta-200' },
];

export const MeditationTimer = () => {
    const [timeLeft, setTimeLeft] = useState(600); // 10 minutes default
    const [isActive, setIsActive] = useState(false);
    const [selectedSound, setSelectedSound] = useState('Silence');
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const toggleTimer = () => setIsActive(!isActive);

    const resetTimer = () => {
        setIsActive(false);
        setTimeLeft(600);
    };

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    useEffect(() => {
        if (isActive && timeLeft > 0) {
            timerRef.current = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setIsActive(false);
            if (timerRef.current) clearInterval(timerRef.current);
        } else {
            if (timerRef.current) clearInterval(timerRef.current);
        }
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [isActive, timeLeft]);

    const progress = (timeLeft / 600) * 100;

    return (
        <section className="py-24 bg-white relative overflow-hidden" id="timer">
            <div className="container-wide max-w-4xl mx-auto">
                <div className="bg-stone-50 rounded-[3rem] p-12 md:p-20 border border-stone-100 flex flex-col items-center text-center relative">
                    <motion.span className="text-terracotta-500 uppercase tracking-[0.4em] text-xs font-bold mb-12">Sacred Silence</motion.span>

                    {/* Timer Circle */}
                    <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center mb-12">
                        <svg className="absolute inset-0 w-full h-full -rotate-90">
                            <circle
                                cx="50%"
                                cy="50%"
                                r="48%"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="text-stone-200"
                            />
                            <motion.circle
                                cx="50%"
                                cy="50%"
                                r="48%"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="4"
                                className="text-terracotta-500"
                                strokeDasharray="100"
                                initial={{ strokeDashoffset: 100 }}
                                animate={{ strokeDashoffset: progress }}
                                transition={{ duration: 1, ease: "linear" }}
                            />
                        </svg>
                        <div className="relative z-10 space-y-2">
                            <div className="font-serif text-6xl md:text-7xl text-stone-900 tabular-nums">
                                {formatTime(timeLeft)}
                            </div>
                            <div className="text-stone-400 text-xs uppercase tracking-widest font-medium">Remaining</div>
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center gap-6 mb-16">
                        <button
                            onClick={toggleTimer}
                            className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-500 ${isActive ? 'bg-stone-200 text-stone-600' : 'bg-terracotta-600 text-white shadow-lg shadow-terracotta-500/30 hover:scale-105'}`}
                        >
                            {isActive ? (
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><rect x="6" y="4" width="4" height="16" fill="currentColor" /><rect x="14" y="4" width="4" height="16" fill="currentColor" /></svg>
                            ) : (
                                <svg className="w-8 h-8 translate-x-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                            )}
                        </button>
                        <button
                            onClick={resetTimer}
                            className="w-12 h-12 rounded-full border border-stone-200 text-stone-400 hover:text-stone-900 hover:border-stone-900 transition-all duration-300 flex items-center justify-center"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                        </button>
                    </div>

                    {/* Sound Scapes */}
                    <div className="w-full max-w-md">
                        <div className="text-stone-400 text-[10px] uppercase tracking-[0.2em] font-bold mb-6">Select Atmosphere</div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {ambientSounds.map((sound) => (
                                <button
                                    key={sound.name}
                                    onClick={() => setSelectedSound(sound.name)}
                                    className={`px-4 py-3 rounded-xl text-[10px] uppercase tracking-wider font-bold transition-all duration-300 border ${selectedSound === sound.name ? 'bg-stone-900 text-white border-stone-900 shadow-md' : 'bg-white text-stone-500 border-stone-100 hover:border-stone-300'}`}
                                >
                                    {sound.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
