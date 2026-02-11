'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';

type Question = {
    id: number;
    text: string;
    options: { label: string; type: 'vata' | 'pitta' | 'kapha' }[];
};

const questions: Question[] = [
    {
        id: 1,
        text: "How would you describe your natural energy levels?",
        options: [
            { label: "Bursts of energy, but I tire easily.", type: 'vata' },
            { label: "Intense, driven, and moderate endurance.", type: 'pitta' },
            { label: "Slow start, but excellent long-term stamina.", type: 'kapha' },
        ]
    },
    {
        id: 2,
        text: "When under stress, I tend to become...",
        options: [
            { label: "Anxious, worried, or scattered.", type: 'vata' },
            { label: "Irritable, critical, or angry.", type: 'pitta' },
            { label: "Withdrawn, silent, or stubborn.", type: 'kapha' },
        ]
    },
    {
        id: 3,
        text: "My sleep pattern is usually...",
        options: [
            { label: "Light, interrupted, often dreaming.", type: 'vata' },
            { label: "Sound, but short. I wake feeling alert.", type: 'pitta' },
            { label: "Deep, heavy, hard to wake up.", type: 'kapha' },
        ]
    }
];

export const DoshaQuiz = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [scores, setScores] = useState({ vata: 0, pitta: 0, kapha: 0 });
    const [result, setResult] = useState<'vata' | 'pitta' | 'kapha' | null>(null);

    const handleAnswer = (type: 'vata' | 'pitta' | 'kapha') => {
        const newScores = { ...scores, [type]: scores[type] + 1 };
        setScores(newScores);

        if (currentStep < questions.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            // Determine result
            const maxScore = Math.max(newScores.vata, newScores.pitta, newScores.kapha);
            if (newScores.vata === maxScore) setResult('vata');
            else if (newScores.pitta === maxScore) setResult('pitta');
            else setResult('kapha');
        }
    };

    const resetQuiz = () => {
        setScores({ vata: 0, pitta: 0, kapha: 0 });
        setCurrentStep(0);
        setResult(null);
    };

    return (
        <section className="py-32 bg-stone-100 flex flex-col items-center justify-center min-h-[600px] overflow-hidden relative">
            <div className="absolute inset-0 bg-stone-50/50 pointer-events-none"></div>

            <div className="container-wide max-w-2xl relative z-10">
                <div className="bg-white p-12 md:p-16 shadow-xl rounded-sm border border-stone-200 text-center min-h-[400px] flex flex-col justify-center items-center relative overflow-hidden">

                    {/* Decorative Background Blob */}
                    <motion.div
                        className="absolute -top-20 -right-20 w-64 h-64 bg-sage-100 rounded-full blur-3xl opacity-50"
                        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                        transition={{ duration: 20, repeat: Infinity }}
                    />

                    {!result ? (
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentStep}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5 }}
                                className="w-full space-y-8"
                            >
                                <div className="space-y-2">
                                    <span className="text-xs uppercase tracking-widest text-sage-600 font-semibold block">
                                        Question {currentStep + 1} of {questions.length}
                                    </span>
                                    <h3 className="font-serif text-3xl md:text-4xl text-stone-900 leading-tight">
                                        {questions[currentStep].text}
                                    </h3>
                                </div>

                                <div className="grid grid-cols-1 gap-4 pt-4">
                                    {questions[currentStep].options.map((option) => (
                                        <button
                                            key={option.label}
                                            onClick={() => handleAnswer(option.type)}
                                            className="p-4 border border-stone-200 rounded-sm hover:bg-sage-600 hover:text-white hover:border-sage-600 transition-all duration-300 text-left text-stone-600 text-lg group"
                                        >
                                            <span className="inline-block w-4 h-4 border border-stone-300 rounded-full mr-4 group-hover:border-white group-hover:bg-white/20 transition-colors" />
                                            {option.label}
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="w-full space-y-8"
                        >
                            <span className="text-xs uppercase tracking-widest text-sage-600 font-semibold block">
                                Your Dominant Dosha Is
                            </span>
                            <h3 className="font-serif text-6xl text-stone-900 capitalize mb-4">
                                {result}
                            </h3>
                            <p className="text-stone-600 text-lg leading-relaxed max-w-md mx-auto">
                                {result === 'vata' && "You are creative, energetic, and spirited. Your element is Air."}
                                {result === 'pitta' && "You are intelligent, focused, and ambitious. Your element is Fire."}
                                {result === 'kapha' && "You are calm, grounded, and loyal. Your element is Earth."}
                            </p>

                            <div className="pt-8 flex flex-col items-center gap-4">
                                <Button className="bg-sage-700 hover:bg-sage-800 text-white px-8 py-3 rounded-full">
                                    Get Your Personalized Plan
                                </Button>
                                <button onClick={resetQuiz} className="text-stone-400 text-sm hover:text-stone-600 underline">
                                    Retake Quiz
                                </button>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
};
