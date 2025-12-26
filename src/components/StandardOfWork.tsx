import { motion } from 'framer-motion';

const StandardCard = ({ title, description, badge, index }: { title: string, description: string, badge: string, index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
    >
        <div className="absolute top-4 right-4 group-hover:bg-blue-50 transition-colors duration-500 px-3 py-1 rounded-full border border-slate-50 group-hover:border-blue-100">
            <span className="text-[9px] font-bold text-slate-400 group-hover:text-[#2F80ED] uppercase tracking-tighter">
                {badge}
            </span>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[#2F80ED] transition-colors">{title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
    </motion.div>
);

export default function StandardOfWork() {
    const standards = [
        {
            title: "Obsesión por el Performance",
            description: "No construimos sitios pesados. Aplicamos optimizaciones de nivel enterprise para garantizar tiempos de carga instantáneos y Core Web Vitals impecables.",
            badge: "Velocidad Extrema"
        },
        {
            title: "Seguridad por Diseño",
            description: "La seguridad no es un parche, es la base. Implementamos estándares OWASP y auditorías de código constantes para proteger tu activo más valioso: los datos.",
            badge: "Blindaje Técnico"
        },
        {
            title: "Escalabilidad Predictiva",
            description: "Arquitecturas diseñadas para crecer. Usamos patrones de microservicios y cloud-native para que tu plataforma soporte el éxito sin romperse.",
            badge: "Growth ready"
        }
    ];

    return (
        <section className="py-24 bg-white px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full mb-6 border border-slate-200/50">
                        Nuestro Estándar
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
                        Metodología de <span className="text-[#2F80ED]">Ingeniería de Autor</span>
                    </h2>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                        En Kairo, la calidad no es opcional. Hemos estandarizado la excelencia técnica en cada etapa del desarrollo.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {standards.map((s, i) => (
                        <StandardCard key={i} {...s} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
