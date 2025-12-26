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
                            Tecnología de élite, <br /> impulsada por <span className="text-[#2F80ED]">personas</span>.
                        </h2>
                        <p className="text-slate-600 text-lg mb-8 leading-relaxed max-w-xl">
                            En Kairo, creemos que la IA y el código son solo herramientas. La verdadera magia ocurre cuando combinamos esa potencia con una transparencia total y un compromiso humano inquebrantable con tu éxito.
                        </p>
                        <div className="flex items-center gap-4 border-t border-slate-100 pt-8">
                            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center font-bold text-[#2F80ED]">
                                K
                            </div>
                            <div>
                                <p className="text-sm font-bold text-slate-900">Equipo KairoWeb</p>
                                <p className="text-xs text-slate-400 font-medium">Comprometidos con tu visión</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <div className="flex-1 relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative z-10 p-4 border border-slate-100 shadow-2xl rounded-[2.5rem] bg-white transform md:rotate-2"
                    >
                        <div className="aspect-[4/3] bg-slate-50 rounded-[2rem] flex items-center justify-center p-8 overflow-hidden">
                            {/* Visual Placeholder for Team photo or generic office context */}
                            <div className="space-y-4 w-full">
                                <div className="h-4 bg-slate-200 rounded-full w-3/4 animate-pulse" />
                                <div className="h-4 bg-slate-200 rounded-full w-full animate-pulse" />
                                <div className="h-4 bg-slate-200 rounded-full w-5/6 animate-pulse" />
                                <div className="h-32 bg-blue-50 rounded-2xl w-full flex items-center justify-center text-blue-300 font-bold italic">
                                    [ Imagen: Equipo Kairo ]
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
