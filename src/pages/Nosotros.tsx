import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';
import FinalCTA from '../components/FinalCTA';

export default function Nosotros() {
    const { t } = useLanguage();

    const values = [
        {
            icon: (
                <svg className="w-8 h-8 text-[#2F80ED]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            ),
            ...t.about.values.items[0],
            tag: "RIGOR"
        },
        {
            icon: (
                <svg className="w-8 h-8 text-[#2F80ED]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            ...t.about.values.items[1],
            tag: "ÉTICA"
        },
        {
            icon: (
                <svg className="w-8 h-8 text-[#2F80ED]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            ...t.about.values.items[2],
            tag: "FOCO"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <SEO
                title="Equipo de Élite | KairoWeb"
                description="Más que una agencia, somos tu brazo técnico profesional. Conoce nuestra historia, valores y por qué lideramos el desarrollo web premium desde Barranquilla."
                keywords="agencia digital elite, desarrollo software barranquilla, arquitectura web premium, equipo kairo"
            />

            <PageHero
                badge="Socio Tecnológico de Élite"
                title="Ingeniería con Propósito Humano"
                description={t.about.desc}
                bgImage="/assets/images/human-factor.jpg"
                primaryCta={{
                    text: "Contáctanos ahora",
                    link: "/contacto"
                }}
                gridPattern={true}
            />

            {/* STORY SECTION */}
            <section className="py-32 relative overflow-hidden bg-white">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
                    <svg width="100%" height="100%">
                        <pattern id="grid-about-story" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-slate-900" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#grid-about-story)" />
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100 bg-slate-100 group">
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                                    alt="Kairo Team Strategy"
                                    className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-blue-600/5 group-hover:bg-transparent transition-colors duration-700" />
                            </div>

                            {/* Floating Decorative Label */}
                            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block animate-bounce-slow">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest leading-none mb-1">Elite Standard</p>
                                        <p className="text-xs font-black text-slate-900 leading-none">Cero Deuda Técnica</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] rounded-md mb-6 border border-blue-100/50 cursor-default">
                                {t.about.badge}
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tighter leading-[1.1]">{t.about.story.title}</h2>
                            <div className="space-y-6 text-lg text-slate-500 font-medium leading-relaxed">
                                <p>
                                    {t.about.story.desc}
                                </p>
                                <p>
                                    {t.humanFactor.desc}
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* VALUES SECTION */}
            <section className="py-32 bg-slate-50/50 relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-50/40 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="flex flex-col items-center text-center mb-20">
                        <div className="w-12 h-px bg-blue-600 mb-6"></div>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter">{t.about.values.title}</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {values.map((value: any, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                                className="group bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 relative overflow-hidden flex flex-col h-full"
                            >
                                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 px-3 py-1 rounded-md bg-blue-50 border border-blue-100">
                                    <span className="text-[9px] font-black text-blue-600 uppercase tracking-widest">{value.tag}</span>
                                </div>

                                <div className="mb-8 p-4 bg-blue-50 border border-blue-100 rounded-2xl w-fit group-hover:bg-blue-600 group-hover:border-blue-500 transition-colors duration-500">
                                    <div className="group-hover:text-white transition-colors duration-500">
                                        {value.icon}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tighter group-hover:text-blue-600 transition-colors">{value.title}</h3>
                                <p className="text-slate-500 text-lg font-medium leading-relaxed">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TEAM HERO SECTION */}
            <section className="py-32 bg-[#0B1220] text-white relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none">
                    <svg width="100%" height="100%">
                        <pattern id="grid-about-team" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#grid-about-team)" />
                    </svg>
                </div>
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2F80ED]/10 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <span className="text-[#38BDF8] font-black tracking-[0.3em] uppercase text-xs mb-8 block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full w-fit mx-auto">
                        {t.about.team.title}
                    </span>
                    <h2 className="text-4xl md:text-7xl font-black mb-10 tracking-tighter leading-none">
                        {t.standardOfWork.desc}
                    </h2>
                    <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
                        {t.about.team.desc}
                    </p>
                </div>
            </section>

            <FinalCTA />
        </div>
    );
}
