import { motion } from 'framer-motion';
import SEO from '../../components/SEO';

export default function Soporte() {
    return (
        <div className="pt-32 min-h-screen">
            <SEO
                title="Soporte Técnico y Mantenimiento | KairoWeb"
                description="Servicios de soporte técnico especializado, mantenimiento preventivo y optimización constante para tus plataformas digitales."
                keywords="soporte tecnico, mantenimiento web, seguridad digital, optimizacion de software"
            />
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#2F80ED] to-[#38BDF8] bg-clip-text text-transparent">
                        Soporte Técnico
                    </h1>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                        Mantenimiento preventivo, actualizaciones de seguridad y optimización continua para que tu negocio nunca se detenga.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
