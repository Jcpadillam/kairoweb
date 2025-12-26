import { motion } from 'framer-motion';

// --- Simplified & Sharp Icons (Brand Alignment) ---

const IconWrapper = ({ children, colorClass }: { children: React.ReactNode, colorClass: string }) => (
  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border shadow-sm transition-colors duration-500 ${colorClass}`}>
    {children}
  </div>
);

const WebIcon = ({ className = '' }: { className?: string }) => (
  <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' className={className}>
    <path d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3z" />
    <path d="M3 9h18" />
    <path d="M9 21V9" />
  </svg>
);

const EcommerceIcon = ({ className = '' }: { className?: string }) => (
  <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' className={className}>
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
);

const AIIcon = ({ className = '' }: { className?: string }) => (
  <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' className={className}>
    <path d="M12 2v4" />
    <path d="M12 18v4" />
    <path d="M4.93 4.93l2.83 2.83" />
    <path d="M16.24 16.24l2.83 2.83" />
    <path d="M2 12h4" />
    <path d="M18 12h4" />
    <path d="M4.93 19.07l2.83-2.83" />
    <path d="M16.24 7.76l2.83-2.83" />
    <circle cx="12" cy="12" r="4" />
  </svg>
);

const OptimizationIcon = ({ className = '' }: { className?: string }) => (
  <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' className={className}>
    <path d="m5 16 7-7 7 7" />
    <path d="M3 20h18" />
  </svg>
);

// --- TechCard Component (Optimized) ---

const ServiceCard = ({ title, description, icon: Icon, index, tag, tech }: { title: string, description: string, icon: React.FC<{ className?: string }>, index: number, tag: string, tech: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className='group bg-white p-8 rounded-3xl border border-slate-100 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300 relative overflow-hidden flex flex-col h-full'
    >
      <div className="absolute top-4 right-4 group-hover:bg-blue-50 transition-colors duration-500 px-3 py-1 rounded-full border border-slate-50 group-hover:border-blue-100">
        <span className="text-[9px] font-bold text-slate-400 group-hover:text-[#2F80ED] uppercase tracking-tighter">
          {tag}
        </span>
      </div>

      <div className="mb-6">
        <IconWrapper colorClass="bg-blue-50/50 border-blue-100 group-hover:bg-blue-100 group-hover:border-blue-200">
          <Icon className="w-8 h-8 text-[#2F80ED]" />
        </IconWrapper>
      </div>

      <h3 className='text-xl font-bold text-slate-900 mb-3 group-hover:text-[#2F80ED] transition-colors'>
        {title}
      </h3>
      <p className='text-slate-600 leading-relaxed text-sm md:text-base mb-6 flex-grow'>
        {description}
      </p>

      <div className="pt-6 border-t border-slate-50 mt-auto">
        <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-2">Tecnologías Hub</p>
        <p className="text-xs font-semibold text-slate-600 group-hover:text-slate-900 transition-colors">{tech}</p>
      </div>
    </motion.div>
  );
};

export default function FeaturedServices() {
  const services = [
    {
      icon: WebIcon,
      title: 'Plataformas Web con IA',
      description: 'Desarrollamos ecosistemas digitales que aprenden de tus usuarios para ofrecer personalización masiva y escalabilidad sin límites.',
      tag: 'Crecimiento Exponencial',
      tech: 'Next.js, React, OpenAI API'
    },
    {
      icon: EcommerceIcon,
      title: 'E-commerce Inteligente',
      description: 'Llevamos tu tienda online al siguiente nivel con motores de recomendación predictivos y checkout optimizado por inteligencia de datos.',
      tag: '+35% Tasa de Conversión',
      tech: 'Shopify, Headless, IA Predictiva'
    },
    {
      icon: AIIcon,
      title: 'Agentes de IA para Web',
      description: 'Integramos agentes conversacionales autónomos que califican leads y cierran ventas 24/7, integrándose con tu CRM favorito.',
      tag: 'Ventas Automatizadas',
      tech: 'LLMs, RAG, Integración CRM'
    },
    {
      icon: OptimizationIcon,
      title: 'Optimización Gen-AI',
      description: 'Transformamos procesos obsoletos en flujos de trabajo de alto rendimiento mediante la implementación de IA generativa a medida.',
      tag: 'Eficiencia Operativa',
      tech: 'Python, LangChain, Cloud Native'
    },
  ];

  return (
    <section id='soluciones' className='bg-transparent py-24 px-6 relative overflow-hidden'>
      {/* Background Decor */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-blue-50/20 rounded-full blur-[120px] translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className='mx-auto max-w-7xl relative z-10'>
        <div className='text-center mb-20'>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-[#2F80ED] text-[10px] font-bold uppercase tracking-[0.2em] rounded-full mb-6 border border-blue-100/50"
          >
            Servicios Enterprise
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-3xl md:text-6xl font-black text-white tracking-tight leading-[1] mb-6'
          >
            Propulsamos tu negocio <br className="hidden md:block" /> con <span className='text-[#2F80ED]'>Ingeniería de IA</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className='mt-4 text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed'
          >
            No solo construimos software; creamos activos estratégicos que utilizan IA para automatizar el crecimiento y maximizar la rentabilidad de tu empresa.
          </motion.p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}