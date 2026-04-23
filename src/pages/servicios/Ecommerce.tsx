import PageHero from '../../components/PageHero';
import SEO from '../../components/SEO';
import { useLanguage } from '../../context/LanguageContext';
import AgileProcess from '../../components/AgileProcess';
import RecentProjects from '../../components/RecentProjects';
import FinalCTA from '../../components/FinalCTA';
import { motion } from 'framer-motion';

// Icons for Pain Points (Ecommerce focused)
const CartIcon = (props: any) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
const MobileIcon = (props: any) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>;
const RefreshIcon = (props: any) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>;
const StockIcon = (props: any) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>;
const painIcons = [CartIcon, MobileIcon, RefreshIcon, StockIcon];

// Icons for Solutions (Sales focused)
const CardIcon = (props: any) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>;
const PhoneIcon = (props: any) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>;
const MailIcon = (props: any) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const SyncIcon = (props: any) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>;
const solutionIcons = [CardIcon, PhoneIcon, MailIcon, SyncIcon];


export default function Ecommerce() {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen">
            <SEO
                title={`${t.ecommerce.title} | KairoWeb`}
                description={t.ecommerce.desc}
                keywords="ecommerce, tienda online, ventas por internet, shopify, checkout, conversion"
            />

            <PageHero
                badge="Shopify Plus & WooCommerce Experts"
                title="Ingeniería Comercial de Élite para Escalado Global"
                description={t.ecommerce.desc}
                bgImage="../../assets/images/Shopify_For_E_commerce_Store_Development_06794a66fe.webp"
                primaryCta={{
                    text: t.ecommerce.ctaPrimary,
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
                        <pattern id="grid-ecommerce-pain" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-slate-900" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#grid-ecommerce-pain)" />
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] rounded-md mb-6 border border-blue-100/50 cursor-default">
                            {t.ecommerce.painPoints.badge}
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tighter leading-[1.1]">
                            {t.ecommerce.painPoints.title} <span className="text-blue-600">{t.ecommerce.painPoints.titleHighlight}</span>
                        </h2>
                        <p className="text-slate-500 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                            {t.ecommerce.painPoints.subtitle}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {t.ecommerce.painPoints.cards.map((card: any, idx: number) => {
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
                        <pattern id="grid-ecommerce-solutions" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#grid-ecommerce-solutions)" />
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-20">
                        <span className="text-blue-400 font-black tracking-[0.3em] uppercase text-xs mb-8 block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full w-fit mx-auto">
                            {t.ecommerce.solutions.badge}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter leading-[1.1]">
                            {t.ecommerce.solutions.title}
                        </h2>
                        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                            {t.ecommerce.solutions.subtitle}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {t.ecommerce.solutions.cards.map((card: any, idx: number) => {
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
