import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const MotionLink = motion(Link);

export default function FloatingCTA() {
    const { t } = useLanguage();
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        // Simple notification sound (pop)
        audioRef.current = new Audio('https://assets.mixkit.co/active_storage/sfx/2358/2358-preview.mp3');
        audioRef.current.volume = 0.4;

        // Play sound periodically to call attention (e.g., every 30s)
        const playSound = () => {
            // Only play if tab is active to avoid annoyance
            if (!document.hidden) {
                audioRef.current?.play().catch(() => {
                    // Autoplay might be blocked until user interacts
                });
            }
        };

        const interval = setInterval(playSound, 30000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed bottom-8 right-8 z-[9999] flex flex-col items-end gap-4">
            {/* Tooltip hint */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white px-4 py-2 rounded-xl shadow-xl border border-slate-100 text-slate-600 text-sm font-bold whitespace-nowrap hidden md:block"
            >
                {t.cta.tooltip}
            </motion.div>

            {/* Main FAB with Ping Animation */}
            <div className="relative">
                {/* Ping Effect Waves */}
                {[1, 2].map((i) => (
                    <motion.div
                        key={i}
                        className="absolute inset-0 bg-blue-400 rounded-2xl -z-10"
                        animate={{
                            scale: [1, 2],
                            opacity: [0.5, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.8,
                            ease: "easeOut"
                        }}
                    />
                ))}

                <MotionLink
                    to="/#agenda"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-[#2F80ED] text-white p-4 rounded-2xl shadow-2xl shadow-blue-500/40 flex items-center justify-center group relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                    <span className="hidden group-hover:block ml-2 mr-2 font-black uppercase text-xs tracking-widest transition-all">
                        {t.cta.button}
                    </span>

                    <svg
                        className="w-7 h-7"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                    </svg>
                </MotionLink>
            </div>
        </div>
    );
}
