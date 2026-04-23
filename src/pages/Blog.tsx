import { motion } from 'framer-motion';
import { useState } from 'react';
import SEO from '../components/SEO';
import Button from '../components/Button';

const posts = [
    {
        id: 1,
        title: 'El fin de los sitios web estáticos: La era de la IA Agéntica',
        date: 'Dec 28, 2025',
        category: 'Tecnología',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600',
        excerpt: '¿Cómo la IA está transformando la navegación tradicional en experiencias conversacionales fluidas?',
        featured: true
    },
    {
        id: 2,
        title: '5 Estrategias para escalar tu E-commerce en 2026',
        date: 'Dec 24, 2025',
        category: 'Negocios',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1600',
        excerpt: 'Optimización de conversión y logística predictiva: la clave del éxito comercial.',
        featured: false
    },
    {
        id: 3,
        title: 'Seguridad Zero Trust: Protegiendo los activos digitales modernos',
        date: 'Dec 20, 2025',
        category: 'Seguridad',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1600',
        excerpt: 'Por qué la confianza implícita es el riesgo más grande para tu infraestructura cloud.',
        featured: false
    }
];

const categories = ['Todos', 'Tecnología', 'Negocios', 'Seguridad', 'Diseño'];

export default function Blog() {
    const [filter, setFilter] = useState('Todos');

    return (
        <div className="bg-white min-h-screen pt-32 pb-24 px-6 overflow-hidden relative">
            <SEO
                title="Blog | Kairo Web"
                description="Perspectivas sobre tecnología, transformación digital y el futuro de los negocios."
            />

            {/* Decorative patterns */}
            <div className="absolute top-0 left-0 w-full h-[600px] bg-slate-50 opacity-50 -z-10" />

            <div className="max-w-7xl mx-auto">
                <header className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="px-4 py-1.5 bg-blue-50 text-[#2F80ED] text-xs font-black uppercase tracking-widest rounded-full border border-blue-100 mb-6 inline-block">
                            PERSPECTIVAS TÉCNICAS
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black text-[#0B1220] leading-[1.1] mb-6 tracking-tight">
                            Ideas que <br />
                            <span className="text-[#2F80ED]">impulsan el futuro</span>
                        </h1>
                    </motion.div>
                </header>

                {/* Featured Post */}
                {posts.find(p => p.featured) && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="group relative mb-24 rounded-[3rem] overflow-hidden bg-[#0B1220] text-white min-h-[500px] flex flex-col md:flex-row shadow-2xl"
                    >
                        <div className="md:w-1/2 relative overflow-hidden h-64 md:h-auto">
                            <img
                                src={posts[0].image}
                                alt={posts[0].title}
                                className="w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105"
                            />
                        </div>
                        <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
                            <span className="text-[#2F80ED] text-xs font-black uppercase tracking-widest mb-4 block">DESTACADO • {posts[0].category}</span>
                            <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight group-hover:text-blue-200 transition-colors">
                                {posts[0].title}
                            </h2>
                            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                                {posts[0].excerpt}
                            </p>
                            <div className="flex items-center justify-between text-sm">
                                <div className="font-bold">{posts[0].date}</div>
                                <Button variant="ghost" className="!px-6 !py-3">Leer más →</Button>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Filters */}
                <div className="flex flex-wrap gap-4 mb-20 border-b border-slate-100 pb-8">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${filter === cat
                                    ? 'bg-[#2F80ED] text-white shadow-lg shadow-blue-500/20'
                                    : 'bg-transparent text-slate-400 hover:text-slate-900'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
                    {posts.filter(p => !p.featured).map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="overflow-hidden rounded-[2rem] bg-slate-100 aspect-video mb-8 relative">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <div>
                                <span className="text-[#2F80ED] text-xs font-black uppercase tracking-widest mb-3 block">
                                    {post.category} • {post.date}
                                </span>
                                <h3 className="text-2xl font-black text-[#0B1220] mb-4 group-hover:text-[#2F80ED] transition-colors tracking-tight">
                                    {post.title}
                                </h3>
                                <p className="text-slate-500 leading-relaxed mb-6">
                                    {post.excerpt}
                                </p>
                                <a href="#" className="font-black text-xs uppercase tracking-widest text-[#0B1220] hover:text-[#2F80ED] transition-colors">
                                    Seguir leyendo →
                                </a>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </div>
    );
}
