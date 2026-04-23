import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Button from '../components/Button';
import { useLanguage } from '../context/LanguageContext';
import projectsData from '../data/projects.json';

const projects = projectsData;

export default function Portfolio() {
    const { t } = useLanguage();
    const [filter, setFilter] = useState('all');

    const categories = [
        { id: 'all', label: t.portfolio.categories.all },
        { id: 'E-commerce', label: t.portfolio.categories.ecommerce },
        { id: 'Web App', label: t.portfolio.categories.webapp },
        { id: 'Mobile App', label: t.portfolio.categories.mobileapp },
        { id: 'Website', label: t.portfolio.categories.website }
    ];

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <div className="bg-slate-50 min-h-screen pt-32 pb-24 px-6 overflow-hidden relative">
            <SEO
                title={`${t.header.menu.portfolio} | Kairo Web`}
                description={t.portfolio.subtitle}
            />

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] -z-10 opacity-60" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto">
                <header className="mb-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="px-4 py-1.5 bg-blue-50 text-[#2F80ED] text-[10px] font-black uppercase tracking-[0.2em] rounded-md border border-blue-100 mb-6 inline-block">
                            {t.portfolio.badge}
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black text-[#0B1220] leading-[1] mb-6 tracking-tighter">
                            {t.portfolio.title.split('industrias')[0]}
                            <span className="text-[#2F80ED]">{t.portfolio.title.includes('industrias') ? 'industrias' : ''}</span>
                        </h1>
                        <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                            {t.portfolio.subtitle}
                        </p>
                    </motion.div>
                </header>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-24">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setFilter(cat.id)}
                            className={`px-10 py-3 rounded-md text-[13px] font-black transition-all duration-500 tracking-tight uppercase ${filter === cat.id
                                ? 'bg-[#0B1220] text-white shadow-[0_20px_40px_-15px_rgba(11,18,32,0.3)] scale-105'
                                : 'bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-600'
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => {
                        return (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.8,
                                    delay: (index % 3) * 0.15,
                                    ease: [0.16, 1, 0.3, 1]
                                }}
                                viewport={{ once: true }}
                                className="group relative cursor-default"
                            >
                                <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-slate-900 border border-white/10 transition-all duration-700 hover:shadow-[0_40px_80px_-15px_rgba(37,99,235,0.25)]">
                                    <Link to="/contacto" className="absolute inset-0 z-20" />

                                    {/* Background Image with Depth effect */}
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-all duration-[2000ms] group-hover:scale-110 group-hover:blur-[2px]"
                                    />

                                    {/* Cinematic Gradient Overlay - Stronger at bottom for vertical text */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10 opacity-90 group-hover:opacity-100 transition-opacity duration-700" />

                                    {/* Content */}
                                    <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                                        <div className="transform transition-all duration-700 group-hover:translate-y-[-8px]">
                                            <div className="flex items-center gap-3 mb-4">
                                                <span className="px-3 py-1 bg-blue-500 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-lg shadow-blue-500/20">
                                                    {project.category}
                                                </span>
                                            </div>

                                            <h3 className="text-3xl font-black text-white tracking-tighter leading-[0.9] mb-4 group-hover:text-blue-400 transition-colors duration-500">
                                                {project.title}
                                            </h3>

                                            <div className="flex items-center gap-3 text-white/60 font-bold text-[11px] uppercase tracking-[0.15em] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                                <div className="w-8 h-px bg-blue-500" />
                                                <span>Ver Detalle</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Modern Scanning Line UI detail */}
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent z-30 opacity-0 group-hover:opacity-100 transition-all duration-1000" />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* CTA */}
                <div className="mt-24 p-8 md:p-12 bg-[#0B1220] rounded-[2.5rem] relative overflow-hidden text-center md:text-left border border-white/5 group">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.05] pointer-events-none" />
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-400/20 transition-colors duration-700" />

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <span className="text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4 block">
                                {t.portfolio.ctaTitle}
                            </span>
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tighter">
                                {t.portfolio.ctaTitle}
                            </h2>
                            <p className="text-lg text-blue-100/60 max-w-md leading-relaxed">
                                {t.portfolio.ctaSubtitle}
                            </p>
                        </div>
                        <Button
                            href="/contacto"
                            variant="primary"
                            size="lg"
                            className="shadow-2xl shadow-blue-500/20 whitespace-nowrap px-12 py-5 text-lg"
                        >
                            {t.portfolio.ctaButton}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
