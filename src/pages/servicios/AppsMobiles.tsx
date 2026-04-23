import PageHero from '../../components/PageHero';
import SEO from '../../components/SEO';
import { useLanguage } from '../../context/LanguageContext';
import AgileProcess from '../../components/AgileProcess';
import RecentProjects from '../../components/RecentProjects';
import FinalCTA from '../../components/FinalCTA';
import { motion } from 'framer-motion';

// Icons for Pain Points (App focused)
const BugIcon = (props: any) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>;
const ConfusedIcon = (props: any) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const OfflineIcon = (props: any) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414" /></svg>;
const BellOffIcon = (props: any) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>;
const painIcons = [BugIcon, ConfusedIcon, OfflineIcon, BellOffIcon];

// Icons for Solutions (Tech focused)
const ReactIcon = (props: any) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>;
const WifiIcon = (props: any) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" /></svg>;
const TouchIcon = (props: any) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" /></svg>;
const BellIcon = (props: any) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>;
const solutionIcons = [ReactIcon, WifiIcon, TouchIcon, BellIcon];


export default function AppsMobiles() {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen">
            <SEO
                title={`${t.apps.title} | KairoWeb`}
                description={t.apps.desc}
                keywords="desarrollo apps, apps moviles, ios, android, react native, desarrollo hibrido"
            />

            <PageHero
                badge="Ingeniería Móvil Native-First"
                title="Experiencias Digitales de Alto Rendimiento en el Bolsillo"
                description={t.apps.desc}
                bgImage="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop"
                primaryCta={{
                    text: t.apps.ctaPrimary,
                    link: "#agenda"
                }}
                secondaryCta={{
                    text: t.header.menu.portfolio,
                    link: "/portafolio"
                }}
                gridPattern={true}
            />

            {/* PAIN POINTS SECTION */}
            <section className="py-32 bg-white relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-blue-50/40 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
                <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
                    <svg width="100%" height="100%">
                        <pattern id="grid-apps-pain" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-slate-900" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#grid-apps-pain)" />
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] rounded-md mb-6 border border-blue-100/50 cursor-default">
                            {t.apps.painPoints.badge}
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tighter leading-[1.1]">
                            {t.apps.painPoints.title} <span className="text-blue-600">{t.apps.painPoints.titleHighlight}</span>
                        </h2>
                        <p className="text-slate-500 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                            {t.apps.painPoints.subtitle}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {t.apps.painPoints.cards.map((card: any, idx: number) => {
                            const Icon = painIcons[idx];
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -10 }}
                                    className="p-10 rounded-[2.5rem] bg-white border border-slate-100 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 group relative overflow-hidden"
                                >
                                    <div className="mb-8 p-4 bg-blue-50 border border-blue-100 rounded-2xl w-fit group-hover:bg-blue-600 group-hover:border-blue-500 transition-colors duration-500">
                                        <Icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-500" />
                                    </div>
                                    <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tighter group-hover:text-blue-600 transition-colors uppercase text-sm">{card.title}</h3>
                                    <p className="text-slate-500 text-lg font-medium leading-relaxed">{card.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* SOLUTIONS SECTION */}
            <section className="py-32 bg-[#0B1220] relative overflow-hidden">
                {/* Background Effects */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none">
                    <svg width="100%" height="100%">
                        <pattern id="grid-apps-solutions" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#grid-apps-solutions)" />
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-20">
                        <span className="text-blue-400 font-black tracking-[0.3em] uppercase text-xs mb-8 block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full w-fit mx-auto">
                            {t.apps.solutions.badge}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter leading-[1.1]">
                            {t.apps.solutions.title}
                        </h2>
                        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                            {t.apps.solutions.subtitle}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {t.apps.solutions.cards.map((card: any, idx: number) => {
                            const Icon = solutionIcons[idx];
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    whileHover={{ x: idx % 2 === 0 ? 10 : -10 }}
                                    className="flex items-start gap-8 p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-500 group"
                                >
                                    <div className="shrink-0 w-20 h-20 rounded-2xl bg-blue-600/10 flex items-center justify-center border border-blue-600/20 group-hover:bg-blue-600 group-hover:border-blue-400 transition-all duration-500">
                                        <Icon className="w-10 h-10 text-blue-500 group-hover:text-white transition-colors duration-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-black text-white mb-3 tracking-tighter group-hover:text-blue-400 transition-colors uppercase text-sm">{card.title}</h3>
                                        <p className="text-slate-400 text-lg font-medium leading-relaxed">{card.desc}</p>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* AGILE PROCESS */}
            <div className="py-12">
                <AgileProcess />
            </div>

            {/* RECENT PROJECTS */}
            <RecentProjects />

            {/* FINAL CTA */}
            <FinalCTA />

        </div>
    );
}
