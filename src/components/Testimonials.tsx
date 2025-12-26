import { motion } from 'framer-motion';

const TestimonialCard = ({ quote, author, role, company, index }: { quote: string, author: string, role: string, company: string, index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
    >
        <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
        <p className="text-slate-700 italic mb-6 leading-relaxed">"{quote}"</p>
        <div>
            <div className="font-bold text-slate-900">{author}</div>
            <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">{role} • {company}</div>
        </div>
    </motion.div>
);

export default function Testimonials() {
    const testimonials = [
        {
            quote: "Kairo transformó nuestra infraestructura en tiempo récord. Su enfoque en IA nos permitió automatizar el 40% de nuestras operaciones.",
            author: "Ricardo Méndez",
            role: "CTO",
            company: "Finflow"
        },
        {
            quote: "No solo construyen webs, diseñan herramientas de crecimiento. Nuestra tasa de conversión subió un 35% en los primeros dos meses.",
            author: "Elena García",
            role: "Marketing Director",
            company: "Lumina SaaS"
        },
        {
            quote: "El soporte es impecable. Es la primera vez que trabajamos con una agencia que realmente entiende los retos de escala en LATAM.",
            author: "Carlos Ortiz",
            role: "Fundador",
            company: "Hecto Logistics"
        }
    ];

    return (
        <section className="py-24 bg-white px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
                        Validado por <span className="text-[#2F80ED]">líderes</span> de industria
                    </h2>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                        Historias reales de empresas que escalaron su visión con nuestra tecnología.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <TestimonialCard key={i} {...t} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
