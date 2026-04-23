import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function AgileProcess() {
    const { t } = useLanguage();

    const steps = t.process.steps.map((step: any, index: number) => ({
        ...step,
        icon: getIcon(index)
    }));

    function getIcon(index: number) {
        const icons = [
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>,
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="8.5" cy="7" r="4" /><polyline points="17 11 19 13 23 9" /></svg>,
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>,
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>,
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
        ];
        return icons[index];
    }

    return (
        <section id="process" className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] rounded-md mb-6 border border-blue-100/50 cursor-default"
                    >
                        {t.process.badge}
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter leading-[1.1]"
                    >
                        {t.process.titleSingle} <span className="text-[#2F80ED]">{t.process.titleHighlight}</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed"
                    >
                        {t.process.desc}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
                    {steps.map((step: any, index: number) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-500 relative group"
                        >
                            {/* Number label */}
                            <div className="absolute top-6 right-8 text-4xl font-black text-slate-50 group-hover:text-blue-50 transition-colors">
                                {String(index + 1).padStart(2, '0')}
                            </div>

                            <div className="mb-6 relative">
                                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-[#2F80ED] group-hover:bg-[#2F80ED] group-hover:text-white transition-all duration-500">
                                    {step.icon}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#2F80ED] transition-colors font-sans">
                                {step.title}
                            </h3>
                            <p className="text-slate-500 text-sm leading-relaxed leading-[1.6]">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Phase Summaries */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {t.process.phases.map((phase: any, i: number) => (
                        <div key={i} className="bg-white/50 border border-slate-100 rounded-2xl p-4 flex items-center justify-between">
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{phase.title}</span>
                            <div className="flex gap-1">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-50" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
