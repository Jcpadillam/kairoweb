import { motion, useMotionValue, useAnimationFrame } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Metric = ({ value, label, sublabel }: { value: string, label: string, sublabel: string }) => (
    <div className="text-center px-4">
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-[#2F80ED] mb-2"
        >
            {value}
        </motion.div>
        <div className="text-sm font-bold text-slate-900 uppercase tracking-tighter">{label}</div>
        <div className="text-xs text-slate-400 font-medium">{sublabel}</div>
    </div>
);

const logos = [
    { name: "Shopify", path: "/assets/logos/shopify.svg" },
    { name: "PrestaShop", path: "/assets/logos/prestashop.svg" },
    { name: "WordPress", path: "/assets/logos/wordpress.svg" },
    { name: "Next.js", path: "/assets/logos/nextjs.svg" },
    { name: "React", path: "/assets/logos/react.svg" },
    // { name: "OpenAI", path: "/assets/logos/openai.svg" },
    // { name: "Ghost", path: "/assets/logos/ghost.svg" },
    { name: "Strapi", path: "/assets/logos/strapi.svg" },
    { name: "Python", path: "/assets/logos/python.svg" },
    { name: "Tailwind", path: "/assets/logos/tailwind.svg" },
    { name: "Vercel", path: "/assets/logos/vercel.svg" },
];

export default function TrustSignals() {
    const baseX = useMotionValue(0);
    const [isDragging, setIsDragging] = useState(false);
    const { t } = useLanguage();

    // Animation factor: adjusting delta for smooth speed
    useAnimationFrame((_, delta) => {
        if (!isDragging) {
            let moveBy = -0.8 * (delta / 16); // Gentle speed
            baseX.set(baseX.get() + moveBy);
        }

        // Seamless loop reset logic (adjusting for the 4x logo array extension)
        if (baseX.get() <= -3000) {
            baseX.set(0);
        } else if (baseX.get() >= 500) {
            baseX.set(-2000);
        }
    });

    return (
        <section className="py-24 bg-transparent relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                {/* Metrics Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 md:gap-12 mb-20">
                    <Metric value="+20" label={t.trustSignals.metrics[0].label} sublabel={t.trustSignals.metrics[0].sublabel} />
                    <Metric value={t.trustSignals.metrics[1].value} label={t.trustSignals.metrics[1].label} sublabel={t.trustSignals.metrics[1].sublabel} />
                    <Metric value={t.trustSignals.metrics[2].value} label={t.trustSignals.metrics[2].label} sublabel={t.trustSignals.metrics[2].sublabel} />
                    <Metric value={t.trustSignals.metrics[3].value} label={t.trustSignals.metrics[3].label} sublabel={t.trustSignals.metrics[3].sublabel} />
                </div>

                {/* Draggable Technology Marquee */}
                <div className="border-t border-slate-100 pt-16">
                    <p className="text-center text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-12">
                        {t.trustSignals.techStackTitle}
                    </p>

                    <div className="relative cursor-grab active:cursor-grabbing">
                        <motion.div
                            style={{ x: baseX }}
                            drag="x"
                            dragConstraints={{ left: -3000, right: 500 }}
                            onDragStart={() => setIsDragging(true)}
                            onDragEnd={() => setIsDragging(false)}
                            className="flex gap-12 md:gap-20 whitespace-nowrap items-center min-w-full py-4"
                        >
                            {[...logos, ...logos, ...logos, ...logos].map((logo, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-3 md:gap-4 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 select-none"
                                >
                                    <img
                                        src={logo.path}
                                        alt={logo.name}
                                        className="w-10 h-10 md:w-12 md:h-12 object-contain pointer-events-none"
                                    />
                                    <span className="text-base md:text-xl font-black text-slate-300 tracking-tighter uppercase">
                                        {logo.name}
                                    </span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
