import { motion } from 'framer-motion';
import Button from './Button';
import { useLanguage } from '../context/LanguageContext';

// Animaciones

// Componente de tarjeta con efecto glass
const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className='group bg-white p-4 rounded-[2.5rem] border border-slate-100 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300 relative overflow-hidden flex flex-col h-full'
    >
      <div className="relative h-64 w-full overflow-hidden rounded-[2rem] mb-6">
        <motion.img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-[10px] font-bold text-[#2F80ED] uppercase tracking-tighter rounded-full border border-blue-100 shadow-sm">
            {project.category}
          </span>
        </div>
      </div>

      <div className="px-4 pb-4 flex flex-col flex-grow">
        <h3 className='text-2xl font-black text-slate-900 mb-3 group-hover:text-[#2F80ED] transition-colors tracking-tight'>
          {project.name}
        </h3>
        <p className='text-slate-600 leading-relaxed text-sm mb-6 flex-grow'>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-50">
          {project.technologies.slice(0, 3).map((tech: string, i: number) => (
            <span key={i} className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50 px-2.5 py-1 rounded-md group-hover:bg-blue-50 group-hover:text-[#2F80ED] transition-colors">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

function RecentProjects() {
  const { t } = useLanguage();

  const projects = [
    {
      name: t.recentProjects.projects[0].title,
      description: t.recentProjects.projects[0].desc,
      technologies: ["Shopify", "Liquid", "Custom IA"],
      image: "https://cdn.pixabay.com/photo/2017/03/13/17/26/ecommerce-2140603_1280.jpg",
      category: t.recentProjects.projects[0].category
    },
    {
      name: t.recentProjects.projects[1].title,
      description: t.recentProjects.projects[1].desc,
      technologies: ["React", "Node.js", "MongoDB"],
      image: "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg",
      category: t.recentProjects.projects[1].category
    },
    {
      name: t.recentProjects.projects[2].title,
      description: t.recentProjects.projects[2].desc,
      technologies: ["Strapi", "Next.js", "Tailwind"],
      image: "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg",
      category: t.recentProjects.projects[2].category
    }
  ];

  return (
    <section id='proyectos' className='bg-white py-24 px-6 relative overflow-hidden'>
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-blue-50/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className='mx-auto max-w-7xl relative z-10'>
        <div className='text-center mb-20'>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-[#2F80ED] text-[10px] font-bold uppercase tracking-[0.2em] rounded-full mb-6 border border-blue-100/50"
          >
            {t.recentProjects.badge}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-3xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1] mb-6'
          >
            {t.recentProjects.title.split(' ')[0]} <span className='text-[#2F80ED]'>{t.recentProjects.title.split(' ').slice(1).join(' ')}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className='mt-4 text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed'
          >
            {t.recentProjects.subtitle}
          </motion.p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Button
            href="/portafolio"
            variant="primary"
            size="lg"
            className="rounded-2xl shadow-xl shadow-blue-500/20 hover:shadow-blue-500/30 font-black"
          >
            {t.recentProjects.cta}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

export default RecentProjects;