import { motion } from 'framer-motion';
import Button from '../components/Button';
import SEO from '../components/SEO';

const RoadmapIcon = () => (
    <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1 flex-shrink-0">
        <circle cx="50" cy="50" r="43" stroke="#2F80ED" stroke-width="14" />
        <circle cx="50" cy="50" r="15" fill="#2F80ED" />
    </svg>
);

const Section = ({ title, items, index }: { title: string, items: { t: string, d: string }[], index: number }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 }}
        className="mb-16 last:mb-0"
    >
        <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-[#2F80ED] flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-500/20">
                0{index + 1}
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-[#0B1220] tracking-tight">{title}</h2>
        </div>

        <div className="grid gap-6">
            {items.map((item, i) => (
                <div key={i} className="flex gap-4 group">
                    <RoadmapIcon />
                    <div>
                        <h3 className="text-lg font-bold text-[#0B1220] mb-1 group-hover:text-[#2F80ED] transition-colors">{item.t}</h3>
                        <p className="text-slate-500 leading-relaxed">{item.d}</p>
                    </div>
                </div>
            ))}
        </div>
    </motion.div>
);

export default function Roadmap2026() {
    const handleDownload = () => {
        window.print();
    };

    return (
        <div className="bg-white min-h-screen pt-32 pb-24 px-6 overflow-hidden relative print:pt-10">
            <style dangerouslySetInnerHTML={{
                __html: `
                @media print {
                    .no-print { display: none !important; }
                    body { background: white !important; }
                    .print-break { page-break-after: always; }
                    @page { margin: 1.5cm; }
                }
            `}} />

            <SEO
                title="Roadmap de Transformación Digital 2026 | KairoWeb"
                description="Guía estratégica para directivos sobre el futuro de la tecnología empresarial en 2026."
            />

            {/* Floating Download Button - Hidden in Print */}
            <div className="fixed top-24 right-8 z-50 no-print">
                <Button
                    variant="primary"
                    size="lg"
                    onClick={handleDownload}
                    className="shadow-2xl shadow-blue-500/40 font-black"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    DESCARGAR PDF
                </Button>
            </div>

            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] -z-10 opacity-60 no-print" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-50 rounded-full blur-[100px] -z-10 opacity-40 no-print" />

            {/* SVG Pattern Background */}
            <div className="absolute inset-0 -z-10 opacity-[0.03] pointer-events-none">
                <svg width="100%" height="100%">
                    <pattern id="roadmap-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
                        <circle cx="30" cy="30" r="15" stroke="#0B1220" stroke-width="2" fill="none" />
                        <circle cx="30" cy="30" r="5" fill="#0B1220" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#roadmap-pattern)" />
                </svg>
            </div>

            <div className="max-w-4xl mx-auto">
                <header className="mb-20 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="px-4 py-1.5 bg-blue-50 text-[#2F80ED] text-xs font-black uppercase tracking-widest rounded-full border border-blue-100 mb-6 inline-block">
                            RECURSO EXCLUSIVO PARA DIRECTIVOS
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black text-[#0B1220] leading-[1.1] mb-6 tracking-tight">
                            Roadmap de <br />
                            <span className="text-[#2F80ED]">Transformación 2026</span>
                        </h1>
                        <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
                            La IA ya no es opcional. Esta es la guía táctica para convertir tu arquitectura tecnológica en una ventaja competitiva imparable.
                        </p>
                    </motion.div>
                </header>

                <Section
                    index={0}
                    title="Fase 1: Ecosistemas con IA Nativa"
                    items={[
                        { t: "Agentes de Venta 24/7", d: "Integración de IA generativa en el flujo de pre-venta para calificar leads y resolver dudas en tiempo real." },
                        { t: "Búsqueda Semántica", d: "Abandona los buscadores por palabras clave. Implementa lógica vectorial para que tus clientes encuentren lo que necesitan por contexto." },
                        { t: "Automatización de Contenido", d: "Workflows que generan y optimizan landings, blogs y fichas de producto automáticamente basados en tendencias." }
                    ]}
                />

                <Section
                    index={1}
                    title="Fase 2: Hyper-Personalización de UX"
                    items={[
                        { t: "Interfaces Dinámicas", d: "La web se adapta visualmente al perfil del usuario, mostrando productos y CTAs basados en su comportamiento previo." },
                        { t: "Checkouts Invisibles", d: "Optimización radical del flujo de pago con predicción de fraude y recuperación proactiva de carritos." },
                        { t: "Omnicanalidad Real", d: "Sincronización instantánea entre tienda online, apps móviles y canales de mensajería social." }
                    ]}
                />

                <Section
                    index={2}
                    title="Fase 3: Infraestructura de Élite"
                    items={[
                        { t: "Arquitectura Cloud-Native", d: "Migración a sistemas serverless que escalan automáticamente según el tráfico, reduciendo costos operativos." },
                        { t: "Blindaje de Datos 2026", d: "Implementación de estándares de seguridad Zero Trust para proteger la privacidad de tus clientes y la integridad de tu marca." },
                        { t: "Monitoreo Predictivo", d: "Detección de errores antes de que ocurran mediante análisis de patrones de tráfico y rendimiento." }
                    ]}
                />

                <div className="mt-24 p-8 md:p-12 bg-[#0B1220] rounded-[2.5rem] relative overflow-hidden text-center md:text-left no-print">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">¿Listo para ejecutar este plan?</h2>
                            <p className="text-blue-100/60 max-w-md">No dejes que el 2026 te tome por sorpresa. Iniciemos tu auditoría técnica hoy mismo.</p>
                        </div>
                        <Button
                            href="/contacto"
                            variant="primary"
                            size="lg"
                            className="shadow-xl shadow-blue-500/20 whitespace-nowrap"
                        >
                            Iniciar Auditoría Gratis
                        </Button>
                    </div>
                </div>

                <footer className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
                    <img src="/assets/logo-horizontal-dark.svg" alt="Kairo Logo" className="h-8 w-auto opacity-50 contrast-0 grayscale no-print" />
                    <img src="/assets/logo-horizontal-dark.svg" alt="Kairo Logo" className="h-8 w-auto hidden print:block" />
                    <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest text-center">
                        © 2026 KAIRO DIGITAL AGENCY • CONFIDENCIAL
                    </p>
                </footer>
            </div>
        </div>
    );
}
