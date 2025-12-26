import { motion } from 'framer-motion';

const Metric = ({ value, label, sublabel }: { value: string, label: string, sublabel: string }) => (
    <div className="text-center px-4">
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-[#2F80ED] mb-2"
        >
            {value}
        </motion.div>
        <div className="text-sm font-bold text-slate-900 uppercase tracking-tighter">{label}</div>
        <div className="text-xs text-slate-400 font-medium">{sublabel}</div>
    </div>
);

export default function TrustSignals() {
    const sectors = ['Fintech', 'LegalTech', 'E-commerce', 'SaaS', 'Logistics', 'Health'];

    return (
        <section className="py-20 bg-transparent relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                {/* Metrics Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
                    <Metric value="+15" label="Proyectos" sublabel="Exitosos en LATAM" />
                    <Metric value="+40%" label="ROI Promedio" sublabel="En el primer año" />
                    <Metric value="24/7" label="Soporte" sublabel="Garantía de uptime" />
                    <Metric value="100%" label="Confidencial" sublabel="Seguridad Enterprise" />
                </div>

                {/* Logo Cloud (Visual only for now) */}
                <div className="border-t border-slate-100 pt-16">
                    <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-10">
                        Expertise en industrias de alto impacto
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                        {sectors.map((sector) => (
                            <span key={sector} className="text-xl md:text-2xl font-black text-slate-300 hover:text-[#2F80ED] transition-colors cursor-default">
                                {sector}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
