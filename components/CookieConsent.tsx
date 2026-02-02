'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Check } from 'lucide-react';
import { useStore } from '@/lib/store';

export function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    // Check if user has already consented
    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            // Delay slightly for better UX
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie-consent', 'accepted');
        setIsVisible(false);
        // Here we would technically enable real tracking scripts
        console.log('Cookies accepted - Tracking enabled');
    };

    const handleDecline = () => {
        localStorage.setItem('cookie-consent', 'declined');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-24 left-4 right-4 md:bottom-4 md:left-4 md:right-auto md:w-96 z-50 pointer-events-none"
                >
                    <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-gray-100 pointer-events-auto relative overflow-hidden">
                        {/* Decor */}
                        <div className="absolute top-0 right-0 p-4 opacity-5">
                            <Cookie className="w-24 h-24 rotate-12" />
                        </div>

                        <div className="relative z-10">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="p-3 bg-dattes-primary/10 rounded-full text-dattes-primary">
                                    <Cookie className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Cookies & Confidentialité</h3>
                                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                                        Nous utilisons des cookies pour récupérer les données de trafic (Facebook, TikTok, Instagram) et améliorer votre expérience.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-2">
                                <button
                                    onClick={handleDecline}
                                    className="flex-1 py-2 px-4 rounded-xl text-xs font-bold text-gray-500 hover:bg-gray-100 transition-colors"
                                >
                                    Refuser
                                </button>
                                <button
                                    onClick={handleAccept}
                                    className="flex-1 py-2 px-4 rounded-xl text-xs font-bold text-white bg-dattes-primary hover:bg-black transition-colors shadow-lg shadow-dattes-primary/20 flex items-center justify-center gap-2"
                                >
                                    <Check className="w-3 h-3" />
                                    Accepter
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
