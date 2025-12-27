import { motion } from 'framer-motion';
import Button from './Button';
import { useLanguage } from '../context/LanguageContext';

export default function LeadMagnet() {
    const { t } = useLanguage();

    return (
        <section className="py-24 px-6 bg-slate-900 overflow-hidden relative">
            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%">
                    <pattern id="grid-lead" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid-lead)" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-16">
                <div className="flex-1">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-widest rounded-full border border-blue-500/20 mb-6 inline-block">
                            {t.leadMagnet.badge}
                        </span>
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
                            {t.leadMagnet.title} <br /> {t.leadMagnet.title2}
                        </h2>
                        <p className="text-slate-400 text-lg mb-8 max-w-xl">
                            {t.leadMagnet.desc}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                            <input
                                type="email"
                                placeholder={t.leadMagnet.placeholder}
                                className="bg-slate-800 border border-slate-700 text-white px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all flex-grow"
                            />
                            <Button
                                variant="primary"
                                size="lg"
                                className="!py-4 shadow-xl shadow-blue-500/20"
                            >
                                {t.leadMagnet.button}
                            </Button>
                        </div>
                        <p className="text-[10px] text-slate-500 mt-4 italic">
                            {t.leadMagnet.spam}
                        </p>
                    </motion.div>
                </div>

                <div className="flex-1 w-full max-w-md">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="aspect-[3/4] bg-gradient-to-br from-[#2F80ED] to-blue-800 rounded-[2.5rem] p-12 shadow-2xl relative flex flex-col justify-end group overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-500" />
                        <div className="relative z-10 order-2">
                            <div className="h-1 bg-white/30 w-12 rounded-full mb-4" />
                            <div className="text-white font-black text-2xl mb-2">Roadmap 2025</div>
                            <div className="text-blue-100 text-sm opacity-80 uppercase tracking-widest font-bold">Guía para Directivos</div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                            <span className="text-[12rem] font-black text-white select-none">PDF</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
