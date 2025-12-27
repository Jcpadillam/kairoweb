import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function HumanFactor() {
    const { t } = useLanguage();

    return (
        <section className="py-24 px-6 bg-slate-50/30 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                <div className="flex-1">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-[#2F80ED] text-[10px] font-bold uppercase tracking-[0.2em] rounded-full mb-6 border border-blue-100/50">
                            {t.humanFactor.badge}
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight tracking-tight">
                            {t.humanFactor.title} <br /> <span className="text-[#2F80ED]">{t.humanFactor.titleHighlight}</span>.
                        </h2>
                        <p className="text-slate-600 text-lg mb-8 leading-relaxed max-w-xl">
                            {t.humanFactor.desc}
                        </p>
                        <div className="flex items-center gap-4 border-t border-slate-100 pt-8">
                            <div className="w-12 h-12 rounded-full bg-[#2F80ED]/10 flex items-center justify-center border border-[#2F80ED]/20">
                                <svg className="w-6 h-6 text-[#2F80ED]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-slate-900 tracking-tight">{t.humanFactor.cardTitle}</p>
                                <p className="text-xs text-slate-400 font-medium">{t.humanFactor.cardSubtitle}</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <div className="flex-1 relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative z-10 p-4 border border-slate-100 shadow-2xl rounded-[2.5rem] bg-white transform md:rotate-2 group overflow-hidden"
                    >
                        <div className="aspect-[4/3] bg-slate-900 rounded-[2rem] flex items-center justify-center overflow-hidden relative border border-slate-800">
                            <motion.img
                                initial={{ scale: 1.1, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                src="https://images1.novopayment.com/wp-content/uploads/2023/12/shopify-developer.webp"
                                alt="Shopify Developer Dashboard"
                                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                                onError={(e) => {
                                    // Fallback image if the primary one fails
                                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop";
                                }}
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />



                            {/* Code snippet overlay decorative */}
                            <div className="absolute bottom-6 right-6 bg-slate-800/80 backdrop-blur-md border border-slate-700 p-4 rounded-xl pointer-events-none hidden md:block border-l-4 border-l-blue-500 shadow-xl">
                                <div className="flex gap-1.5 mb-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-400/50" />
                                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/50" />
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-400/50" />
                                </div>
                                <div className="space-y-1">
                                    <div className="h-1 w-24 bg-blue-400/30 rounded" />
                                    <div className="h-1 w-32 bg-slate-400/30 rounded" />
                                    <div className="h-1 w-20 bg-slate-400/30 rounded" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    {/* Decorative elements */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400/10 rounded-full blur-[80px] -z-10" />
                </div>
            </div>
        </section>
    );
}
