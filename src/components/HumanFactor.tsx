import { motion } from 'framer-motion';

export default function HumanFactor() {
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
                            Factor Humano
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight tracking-tight">
                            Ingeniería de Autor para <br /> negocios en <span className="text-[#2F80ED]">escalada</span>.
                        </h2>
                        <p className="text-slate-600 text-lg mb-8 leading-relaxed max-w-xl">
                            Kairo nace con una misión clara: cerrar la brecha entre la ambición de negocio y la ejecución técnica de élite. Fundada bajo una filosofía de ingeniería rigurosa, nuestra estructura está diseñada para crecer junto a tu proyecto, asegurando que cada línea de código sea un activo estratégico.
                        </p>
                        <div className="flex items-center gap-4 border-t border-slate-100 pt-8">
                            <div className="w-12 h-12 rounded-full bg-[#2F80ED]/10 flex items-center justify-center border border-[#2F80ED]/20">
                                <svg className="w-6 h-6 text-[#2F80ED]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-slate-900 tracking-tight">Arquitectura de Élite</p>
                                <p className="text-xs text-slate-400 font-medium">Liderando la visión técnica de Kairo</p>
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
                        <div className="aspect-[4/3] bg-slate-50 rounded-[2rem] flex items-center justify-center overflow-hidden relative">
                            <img
                                src="/assets/kairo_tech_architecture_blueprint.png"
                                alt="Kairo Technical Architecture"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent" />
                        </div>
                    </motion.div>
                    {/* Decorative elements */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400/10 rounded-full blur-[80px] -z-10" />
                </div>
            </div>
        </section>
    );
}
