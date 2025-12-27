import { motion } from 'framer-motion';
import Button, { ArrowRightIcon } from './Button';
import { useLanguage } from '../context/LanguageContext';

// --- Simplified & Fast Icons (Nexus/Minimal Style) ---

const IconWrapper = ({ children, colorClass }: { children: React.ReactNode, colorClass: string }) => (
  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border shadow-sm transition-colors duration-500 ${colorClass}`}>
    {children}
  </div>
);

const IdeaIcon = ({ className = '' }: { className?: string }) => (
  <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' className={className}>
    <path d="M12 2v1" />
    <path d="M12 21v1" />
    <path d="M4.22 4.22l.71.71" />
    <path d="M18.36 18.36l.71.71" />
    <path d="M1 12h1" />
    <path d="M21 12h1" />
    <path d="M4.22 19.78l.71-.71" />
    <path d="M18.36 5.64l.71-.71" />
    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const SpeedIcon = ({ className = '' }: { className?: string }) => (
  <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' className={className}>
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

const IntegrationIcon = ({ className = '' }: { className?: string }) => (
  <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' className={className}>
    <path d="M12 3v18" />
    <path d="M3 12h18" />
    <path d="M12 12a3 3 0 100-6 3 3 0 000 6z" />
    <circle cx="12" cy="12" r="9" />
  </svg>
);

const SupportIcon = ({ className = '' }: { className?: string }) => (
  <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

// --- TechCard Component (Optimized) ---

const TechCard = ({ title, description, icon: Icon, index }: { title: string, description: string, icon: React.FC<{ className?: string }>, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className='group bg-white p-8 rounded-3xl border border-slate-100 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300'
    >
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

export default function TargetAudience() {
  const { t } = useLanguage();

  const cards = [
    {
      icon: IdeaIcon,
      title: t.targetAudience.cards[0].title,
      description: t.targetAudience.cards[0].desc,
    },
    {
      icon: SpeedIcon,
      title: t.targetAudience.cards[1].title,
      description: t.targetAudience.cards[1].desc,
    },
    {
      icon: IntegrationIcon,
      title: t.targetAudience.cards[2].title,
      description: t.targetAudience.cards[2].desc,
    },
    {
      icon: SupportIcon,
      title: t.targetAudience.cards[3].title,
      description: t.targetAudience.cards[3].desc,
    },
  ];

  return (
    <section id='para-quien' className='bg-transparent py-24 px-6 relative overflow-hidden'>
      {/* Background Decor (Soft Nexus Orbs) */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-50/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className='mx-auto max-w-7xl relative z-10'>
        <div className='text-center mb-20'>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-[#2F80ED] text-[10px] font-bold uppercase tracking-[0.2em] rounded-full mb-6 border border-blue-100/50"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            {t.targetAudience.badge}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6'
          >
            {t.targetAudience.title} <span className='text-[#2F80ED]'>{t.targetAudience.titleHighlight}</span> <br className="hidden md:block" /> {t.targetAudience.titleSuffix}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className='mt-4 text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed'
          >
            {t.targetAudience.subtitle}
          </motion.p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {cards.map((card, index) => (
            <TechCard key={index} {...card} index={index} />
          ))}
        </div>

        {/* Social Proof Bar (Conceptual) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex flex-wrap justify-center items-center gap-6 grayscale opacity-40 hover:grayscale-0 transition-all duration-500"
        >
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest mr-4">{t.targetAudience.trustedBy}</span>
          {t.targetAudience.trustedSectors.map((sector) => (
            <span key={sector} className="px-3 py-1 bg-slate-100 rounded text-[10px] font-bold text-slate-600">{sector}</span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className='mt-20 p-8 md:p-14 rounded-[3rem] bg-[#2F80ED] text-white text-center relative overflow-hidden group shadow-2xl shadow-blue-500/20'
        >
          {/* Decorative accents */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <h3 className='text-3xl md:text-4xl font-bold mb-6 leading-tight'>
              {t.targetAudience.ctaBox.title} <br className="hidden md:block" /> {t.targetAudience.ctaBox.title2} <span className="text-blue-100 underline decoration-blue-300 decoration-2 underline-offset-8">{t.targetAudience.ctaBox.titleHighlight}</span>.
            </h3>
            <p className="text-blue-50/80 max-w-2xl mx-auto mb-10 text-lg">
              {t.targetAudience.ctaBox.desc}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button
                href='#soluciones'
                variant='ghost'
                size='lg'
                className="!bg-white !text-[#2F80ED] !border-none px-12 py-6 rounded-2xl shadow-xl hover:!bg-blue-50 transition-all active:scale-95"
                icon={<ArrowRightIcon />}
              >
                {t.targetAudience.ctaBox.button}
              </Button>
              <div className="flex flex-col items-center sm:items-start">
                <p className="text-sm text-blue-50/90 font-semibold tracking-wide">
                  {t.targetAudience.ctaBox.note1}
                </p>
                <p className="text-xs text-blue-100/70">
                  {t.targetAudience.ctaBox.note2}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
