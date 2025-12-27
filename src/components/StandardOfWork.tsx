import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const StandardCard = ({ title, description, badge, index }: { title: string, description: string, badge: string, index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
    >
        <div className="absolute top-4 right-4 group-hover:bg-blue-50 transition-colors duration-500 px-3 py-1 rounded-full border border-slate-50 group-hover:border-blue-100">
            <span className="text-[9px] font-bold text-slate-400 group-hover:text-[#2F80ED] uppercase tracking-tighter">
                {badge}
            </span>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[#2F80ED] transition-colors">{title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
    </motion.div>
);

export default function StandardOfWork() {
    const { t } = useLanguage();

    const standards = [
        {
            title: t.history.title,
            description: t.history.desc,
            badge: t.history.badge
        },
        {
            title: t.mission.title,
            description: t.mission.desc,
            badge: t.mission.badge
        },
        {
            title: t.vision.title,
            description: t.vision.desc,
            badge: t.vision.badge
        }
    ];

    return (
        <section className="py-24 bg-white px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-[#2F80ED] text-[10px] font-bold uppercase tracking-[0.2em] rounded-full mb-6 border border-blue-100/50">
                        {t.standardOfWork.badge}
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
                        {t.standardOfWork.title} <span className="text-[#2F80ED]">{t.standardOfWork.titleHighlight}</span>
                    </h2>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                        {t.standardOfWork.desc}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {standards.map((s, i) => (
                        <StandardCard key={i} {...s} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
