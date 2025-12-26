import FeaturedServices from "../components/FeaturedServices";
import KairoHero from "../components/KairoHero";
import OurApproach from "../components/OurApproach";
import RecentProjects from "../components/RecentProjects";
import TargetAudience from "../components/TargetAudience";
import SEO from "../components/SEO";
import { motion } from 'framer-motion';

// Componentes dummy para evitar errores si no existen
const FloatingParticles = () => null;
const NeuralConnections = () => null;

export default function Home() {
    return (
        <div className='relative bg-white text-slate-900 overflow-hidden'>
            <SEO
                title="KairoWeb | Transformación Digital y Desarrollo de Software"
                description="Agencia de desarrollo web y soluciones digitales. Creamos experiencias digitales de alto impacto para negocios que buscan escalar."
                keywords="transformacion digital, desarrollo software, agencia web, aplicaciones a medida, ecommerce, kairoweb"
                ogImage="/assets/hero-banner.png"
            />
            <section
                className='group relative isolate overflow-hidden min-h-screen flex items-center'
            >
                {/* Fondo con efecto de partículas y conexiones */}
                <div className='absolute inset-0 -z-30'>
                    {/* Base gradient */}
                    <div className='absolute inset-0 bg-white' />
                    {/* Aurora effect mejorado para tema claro */}
                    <motion.div
                        className="absolute inset-0 opacity-20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.2 }}
                        transition={{ duration: 2 }}
                        style={{
                            background: `
                radial-gradient(40% 40% at 20% 25%, rgba(47, 128, 237, 0.15), transparent 70%),
                radial-gradient(45% 45% at 80% 20%, rgba(99, 102, 241, 0.12), transparent 65%),
                radial-gradient(35% 35% at 65% 80%, rgba(56, 189, 248, 0.1), transparent 60%)
              `
                        }}
                    />
                    {/* Efecto de grid tecnológico suave */}
                    <div className="absolute inset-0 opacity-5">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="black" strokeWidth="0.5" />
                                </pattern>
                                <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                                    <rect width="80" height="80" fill="url(#smallGrid)" />
                                    <path d="M 80 0 L 0 0 0 80" fill="none" stroke="black" strokeWidth="1" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#grid)" />
                        </svg>
                    </div>
                    {/* Partículas flotantes */}
                    <FloatingParticles />
                    {/* Conexiones neuronales */}
                    <NeuralConnections />
                </div>
                {/* Contenido principal */}
                <div className="w-full">
                    <KairoHero />

                    {/* Zona de Descanso: Background Gris Suave */}
                    <div id="audience" className="bg-slate-50/50">
                        <TargetAudience />
                    </div>

                    <div id="approach">
                        <OurApproach />
                    </div>

                    {/* Zona de Foco: Background Premium Oscuro/Gradiente */}
                    <div id="services" className="bg-slate-900 py-12 relative overflow-hidden">
                        {/* Decorative background for the focus zone */}
                        <div className="absolute inset-0 opacity-30">
                            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(47,128,237,0.1),transparent_70%)]" />
                        </div>
                        <FeaturedServices />
                    </div>

                    <div id="projects">
                        <RecentProjects />
                    </div>

                    {/* Contact section removed as requested */}
                </div>
            </section>
        </div>
    );
}
