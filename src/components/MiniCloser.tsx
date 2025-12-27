import { motion } from 'framer-motion';
import Button, { ArrowRightIcon } from './Button';
import { useLanguage } from '../context/LanguageContext';

export default function MiniCloser() {
    const { t } = useLanguage();

    return (
        <section className="py-24 px-6 bg-[#2F80ED] relative overflow-hidden">
            {/* Decorative Orbs */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-400/20 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-[1.1] tracking-tight">
                        {t.miniCloser.title} <br /> <span className="opacity-80">{t.miniCloser.title2}</span>
                    </h2>
                    <p className="text-blue-50/80 text-lg mb-12 max-w-xl mx-auto">
                        {t.miniCloser.desc}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Button
                            href="https://wa.me/tu-numero" // Placeholder
                            variant="ghost"
                            size="lg"
                            className="!bg-white !text-[#2F80ED] !border-none px-12 py-6 rounded-2xl shadow-2xl hover:scale-105 transition-all text-lg font-bold"
                            icon={<ArrowRightIcon />}
                        >
                            {t.miniCloser.button}
                        </Button>
                        <div className="text-left hidden sm:block">
                            <p className="text-sm font-bold text-white">{t.miniCloser.note}</p>
                            <p className="text-xs text-blue-100/70">{t.miniCloser.availability}</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
