import { motion } from 'framer-motion';
import SEO from '../../components/SEO';

export default function Ecommerce() {
    return (
        <div className="pt-32 min-h-screen">
            <SEO
                title="Soluciones eCommerce | KairoWeb"
                description="Plataformas de comercio electrónico robustas y escalables. Optimizamos tu tienda online para maximizar ventas y mejorar la experiencia del cliente."
                keywords="ecommerce, tienda online, ventas por internet, shopify, custom ecommerce"
            />
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#2F80ED] to-[#38BDF8] bg-clip-text text-transparent">
                        eCommerce
                    </h1>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                        Creamos experiencias de compra robustas y modernas. Optimizamos cada paso del checkout para maximizar tus ventas online.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
