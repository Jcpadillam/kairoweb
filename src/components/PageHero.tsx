import { motion } from 'framer-motion';
import Button from './Button';

interface PageHeroProps {
    badge: string;
    title: string;
    description: string;
    bgImage?: string;
    primaryCta?: {
        text: string;
        link: string;
    };
    secondaryCta?: {
        text: string;
        link: string;
    };
    gridPattern?: boolean;
}

const fadeUp = {
    hidden: { opacity: 0, y: 10 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeInOut" as const
        }
    }
};

const staggerChildren = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
        },
    },
};

export default function PageHero({ badge, title, description, bgImage, primaryCta, secondaryCta, gridPattern = true }: PageHeroProps) {
    return (
        <section className="relative overflow-hidden min-h-[70vh] flex items-center bg-white">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                {bgImage ? (
                    <>
                        <img
                            src={bgImage}
                            alt="Background"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop";
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900/40" />
                    </>
                ) : (
                    <div className="w-full h-full bg-white relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/30" />
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                x: [0, 50, 0],
                                y: [0, 30, 0],
                            }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-200/20 rounded-full blur-[120px]"
                        />
                    </div>
                )}

                {gridPattern && (
                    <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none">
                        <svg width="100%" height="100%">
                            <pattern id="grid-page-hero" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className={bgImage ? 'text-white' : 'text-slate-900'} />
                            </pattern>
                            <rect width="100%" height="100%" fill="url(#grid-page-hero)" />
                        </svg>
                    </div>
                )}
            </div>

            <div className="relative z-10 w-full px-6 pt-32 pb-16 sm:pt-40 sm:pb-20 max-w-7xl mx-auto">
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={staggerChildren}
                    className="max-w-4xl"
                >
                    {/* Badge */}
                    <motion.div variants={fadeUp} className="mb-6">
                        <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border ${bgImage ? 'bg-white/10 text-white border-white/20' : 'bg-blue-50 text-[#2F80ED] border-blue-100/50 cursor-default'}`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${bgImage ? 'bg-blue-400' : 'bg-[#2F80ED]'}`} />
                            {badge}
                        </span>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        variants={fadeUp}
                        className={`text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[1.1] ${bgImage ? 'text-white' : 'text-slate-900'}`}
                    >
                        {title}
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        variants={fadeUp}
                        className={`text-lg md:text-xl leading-relaxed max-w-2xl mb-12 font-medium ${bgImage ? 'text-slate-200' : 'text-slate-500'}`}
                    >
                        {description}
                    </motion.p>

                    {/* CTAs */}
                    {(primaryCta || secondaryCta) && (
                        <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                            {primaryCta && (
                                <Button
                                    href={primaryCta.link}
                                    variant="primary"
                                    size="lg"
                                    className="px-10 py-5 rounded-2xl shadow-xl shadow-blue-500/20 font-black uppercase tracking-widest text-xs"
                                >
                                    {primaryCta.text}
                                </Button>
                            )}
                            {secondaryCta && (
                                <Button
                                    href={secondaryCta.link}
                                    variant="ghost"
                                    size="lg"
                                    className={bgImage ? 'border-white/30 text-white hover:bg-white/10' : ''}
                                >
                                    {secondaryCta.text}
                                </Button>
                            )}
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
