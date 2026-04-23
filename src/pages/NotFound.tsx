import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import Button from '../components/Button';

export default function NotFound() {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-6 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <svg width="100%" height="100%">
                    <pattern id="grid-404" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="0.5" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid-404)" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-12"
                >
                    <div className="relative inline-block">
                        <h1 className="text-[12rem] md:text-[18rem] font-black leading-none tracking-tighter text-slate-100 select-none">
                            404
                        </h1>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                                animate={{
                                    y: [0, -10, 0],
                                    rotate: [0, 2, 0]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="w-24 h-24 md:w-32 md:h-32 bg-blue-600 rounded-3xl shadow-2xl shadow-blue-500/40 flex items-center justify-center transform rotate-3"
                            >
                                <svg className="w-12 h-12 md:w-16 md:h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] rounded-md mb-6 border border-blue-100/50">
                        {t.notFound.badge}
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter leading-[1.1]">
                        {t.notFound.title} <br />
                        <span className="text-blue-600">{t.notFound.titleHighlight}</span>
                    </h2>
                    <p className="text-slate-500 text-lg md:text-xl mb-12 max-w-xl mx-auto font-medium leading-relaxed">
                        {t.notFound.desc}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Button
                            href="/"
                            variant="primary"
                            size="lg"
                            className="px-12 py-6 rounded-2xl shadow-xl shadow-blue-500/20 font-black uppercase tracking-widest text-xs"
                        >
                            {t.notFound.cta}
                        </Button>
                        <Link
                            to="/contacto"
                            className="group text-sm font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors flex items-center gap-3"
                        >
                            <span className="w-8 h-px bg-slate-200 group-hover:bg-slate-400 transition-colors"></span>
                            {t.notFound.secondary}
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px] -z-10 pointer-events-none" />
        </div>
    );
}
