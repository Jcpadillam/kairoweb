import { motion } from 'framer-motion';
import SEO from '../../components/SEO';

export default function WebDev() {
    return (
        <div className="pt-32 min-h-screen">
            <SEO
                title="Desarrollo Web Premium | KairoWeb"
                description="Diseño y desarrollo de sitios web de alto rendimiento, optimizados para SEO y conversión. Fusionamos estética premium con tecnología de punta."
                keywords="desarrollo web, diseño web, react, vite, sitios web profesionales"
            />
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#2F80ED] to-[#38BDF8] bg-clip-text text-transparent">
                        Desarrollo Web
                    </h1>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                        Sitios de alto impacto diseñados para escalar y convertir. Fusionamos estética premium con rendimiento técnico excepcional.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
