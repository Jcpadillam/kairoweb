import { motion } from 'framer-motion';
import SEO from '../../components/SEO';

export default function AppsMobiles() {
    return (
        <div className="pt-32 min-h-screen">
            <SEO
                title="Desarrollo de Apps Móviles | KairoWeb"
                description="Creamos aplicaciones móviles nativas e híbridas para iOS y Android con foco en UX y rendimiento. Transformamos tu visión en una app exitosa."
                keywords="apps moviles, desarrollo android, desarrollo ios, react native, aplicaciones hibridas"
            />
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#2F80ED] to-[#38BDF8] bg-clip-text text-transparent">
                        Apps Móviles
                    </h1>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                        Desarrollamos aplicaciones nativas e híbridas con foco en la experiencia de usuario y el rendimiento nativo.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
