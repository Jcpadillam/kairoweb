import FeaturedServices from "../components/FeaturedServices";
import KairoHero from "../components/KairoHero";
import OurApproach from "../components/OurApproach";
import RecentProjects from "../components/RecentProjects";
import TargetAudience from "../components/TargetAudience";
import TrustSignals from "../components/TrustSignals";
import HumanFactor from "../components/HumanFactor";
import StandardOfWork from "../components/StandardOfWork";
import AgileProcess from "../components/AgileProcess";
import LeadMagnet from "../components/LeadMagnet";
import SEO from "../components/SEO";
import FinalCTA from "../components/FinalCTA";


// No extras for performance
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
                className='group relative isolate overflow-hidden min-h-screen'
            >
                {/* Simplified Background */}
                <div className='absolute inset-0 -z-30 bg-white'>
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="smallGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="0.5" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#smallGrid)" />
                        </svg>
                    </div>
                </div>
                {/* Contenido principal */}
                <div className="w-full">
                    <KairoHero />

                    <div id="approach">
                        <OurApproach />
                    </div>

                    <HumanFactor />

                    {/* Zona de Descanso: Background Gris Suave */}
                    <div id="audience" className="bg-slate-50/50">
                        <TargetAudience />
                        <TrustSignals />
                    </div>

                    {/* Zona de Foco: Background Premium Oscuro/Gradiente */}
                    <div id="services" className="bg-slate-900 py-12 relative overflow-hidden">
                        {/* Decorative background for the focus zone */}
                        <div className="absolute inset-0 opacity-30">
                            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(47,128,237,0.1),transparent_70%)]" />
                        </div>
                        <FeaturedServices />
                    </div>

                    <StandardOfWork />

                    <AgileProcess />

                    <div id="projects">
                        <RecentProjects />
                    </div>

                    <LeadMagnet />

                    <FinalCTA />

                    {/* MiniCloser removed in favor of FinalCTA for stricter conversion */}

                    {/* Contact section removed as requested */}
                </div>
            </section>
        </div>
    );
}
