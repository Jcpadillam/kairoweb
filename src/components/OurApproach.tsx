import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

// --- Simplified & Sharp Icons (Brand Alignment) ---

const IconWrapper = ({ children, colorClass }: { children: React.ReactNode, colorClass: string }) => (
  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border shadow-sm transition-colors duration-500 ${colorClass}`}>
    {children}
  </div>
);

const StrategyIcon = ({ className = '' }: { className?: string }) => (
  <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 8l-4 8h8l-4-8z" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const CodeIcon = ({ className = '' }: { className?: string }) => (
  <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' className={className}>
    <path d="M16 18l6-6-6-6" />
    <path d="M8 6l-6 6 6 6" />
  </svg>
);

const SupportIcon = ({ className = '' }: { className?: string }) => (
  <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' className={className}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    <path d="M12 7v6" />
    <path d="M12 11l-3-3" />
    <path d="M12 11l3-3" />
  </svg>
);

export default function OurApproach() {
  const { t } = useLanguage();

  const steps = [
    {
      icon: StrategyIcon,
      title: t.ourApproach.steps[0].title,
      description: t.ourApproach.steps[0].desc,
      tag: t.ourApproach.steps[0].tag
    },
    {
      icon: CodeIcon,
      title: t.ourApproach.steps[1].title,
      description: t.ourApproach.steps[1].desc,
      tag: t.ourApproach.steps[1].tag
    },
    {
      icon: SupportIcon,
      title: t.ourApproach.steps[2].title,
      description: t.ourApproach.steps[2].desc,
      tag: t.ourApproach.steps[2].tag
    },
  ];

  return (
    <section id='nuestro-enfoque' className='bg-white py-24 px-6 relative overflow-hidden'>
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-blue-50/30 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className='mx-auto max-w-7xl relative z-10'>
        <div className='text-center mb-20'>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-[#2F80ED] text-[10px] font-bold uppercase tracking-[0.2em] rounded-full mb-6 border border-blue-100/50"
          >
            {t.ourApproach.badge}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6'
          >
            {t.ourApproach.titleLine1} <br className="hidden md:block" /> <span className='text-[#2F80ED]'>{t.ourApproach.titleLine2}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className='mt-4 text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed'
          >
            {t.ourApproach.subtitle}
          </motion.p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {steps.map((step, index) => (
            <TechCard key={index} {...step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// --- TechCard Component (Optimized) ---

const TechCard = ({ title, description, icon: Icon, index, tag }: { title: string, description: string, icon: React.FC<{ className?: string }>, index: number, tag: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className='group bg-white p-8 rounded-3xl border border-slate-100 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300 relative overflow-hidden'
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
      <p className='text-slate-600 leading-relaxed text-sm md:text-base'>
        {description}
      </p>
    </motion.div>
  );
};
