import PageHero from '../../components/PageHero';
import SEO from '../../components/SEO';
import { useLanguage } from '../../context/LanguageContext';
import AgileProcess from '../../components/AgileProcess';
import RecentProjects from '../../components/RecentProjects';
import FinalCTA from '../../components/FinalCTA';
import { motion } from 'framer-motion';

// Icons for Pain Points
const SpeedIcon = (props: any) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const SearchIcon = (props: any) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>;
const MoneyIcon = (props: any) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const SecurityIcon = (props: any) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>;
const painIcons = [SpeedIcon, SearchIcon, MoneyIcon, SecurityIcon];

// Icons for Solutions
const RocketIcon = (props: any) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
const ChartIcon = (props: any) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>;
const UserIcon = (props: any) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>;
const CloudIcon = (props: any) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>;
const solutionIcons = [RocketIcon, ChartIcon, UserIcon, CloudIcon];


export default function WebDev() {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen">
            <SEO
                title={`${t.webDev.title} | KairoWeb`}
                description={t.webDev.desc}
                keywords="desarrollo web, diseño web, react, vite, sitios web profesionales"
            />

            <PageHero
                badge="Ingeniería Web de Alto Rendimiento"
                title="Donde la Estética Premium se Encuentra con el Código de Élite"
                description={t.webDev.desc}
                bgImage="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop"
                primaryCta={{
                    text: t.webDev.ctaPrimary,
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
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
                    <svg width="100%" height="100%">
                        <pattern id="grid-web-pain" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-slate-900" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#grid-web-pain)" />
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] rounded-md mb-6 border border-blue-100/50 cursor-default">
                            {t.webDev.painPoints.badge}
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tighter leading-[1.1]">
                            {t.webDev.painPoints.title} <span className="text-blue-600">{t.webDev.painPoints.titleHighlight}</span>
                        </h2>
                        <p className="text-slate-500 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                            {t.webDev.painPoints.subtitle}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {t.webDev.painPoints.cards.map((card: any, idx: number) => {
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
                                        <Icon className="w-8 h-8 text-[#2F80ED] group-hover:text-white transition-colors duration-500" />
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
                        <pattern id="grid-web-solutions" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#grid-web-solutions)" />
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-20">
                        <span className="text-blue-400 font-black tracking-[0.3em] uppercase text-xs mb-8 block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full w-fit mx-auto">
                            {t.webDev.solutions.badge}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter leading-[1.1]">
                            {t.webDev.solutions.title}
                        </h2>
                        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                            {t.webDev.solutions.subtitle}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {t.webDev.solutions.cards.map((card: any, idx: number) => {
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
                                    <div className="shrink-0 w-20 h-20 rounded-2xl bg-[#2F80ED]/10 flex items-center justify-center border border-[#2F80ED]/20 group-hover:bg-[#2F80ED] group-hover:border-blue-400 transition-all duration-500">
                                        <Icon className="w-10 h-10 text-[#2F80ED] group-hover:text-white transition-colors duration-500" />
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
            <div className="">
                <AgileProcess />
            </div>

            {/* RECENT PROJECTS */}
            <RecentProjects />

            {/* FINAL CTA */}
            <FinalCTA />

        </div>
    );
}
