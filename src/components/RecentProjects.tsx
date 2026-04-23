import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import projectsData from '../data/projects.json';

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className='group relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-slate-900 border border-white/10 transition-all duration-700 hover:shadow-[0_40px_80px_-15px_rgba(37,99,235,0.25)]'
    >
      <Link to="/portafolio" className="absolute inset-0 z-20" />

      {/* Background Image with Depth effect */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-all duration-[2000ms] group-hover:scale-110 group-hover:blur-[2px]"
      />

      {/* Cinematic Gradient Overlay - Stronger at bottom for vertical text */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10 opacity-90 group-hover:opacity-100 transition-opacity duration-700" />

      {/* Content */}
      <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
        <div className="transform transition-all duration-700 group-hover:translate-y-[-8px]">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-blue-500 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-lg shadow-blue-500/20">
              {project.category}
            </span>
          </div>

          <h3 className="text-3xl font-black text-white tracking-tighter leading-[0.9] mb-4 group-hover:text-blue-400 transition-colors duration-500">
            {project.title}
          </h3>

          <div className="flex items-center gap-3 text-white/60 font-bold text-[11px] uppercase tracking-[0.15em] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
            <div className="w-8 h-px bg-blue-500" />
            <span>Ver Detalle</span>
          </div>
        </div>
      </div>

      {/* Modern Scanning Line UI detail */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent z-30 opacity-0 group-hover:opacity-100 transition-all duration-1000" />
    </motion.div>
  );
};

function RecentProjects() {
  const { t } = useLanguage();
  const projects = projectsData.slice(0, 3);

  return (
    <section id='projects' className='bg-white py-32 px-6 relative overflow-hidden'>
      {/* Structural Elements */}
      <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent" />

      <div className='mx-auto max-w-7xl relative z-10'>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12 text-center lg:text-left">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-[0.3em] rounded-full mb-8"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              {t.recentProjects.badge}
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className='text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-8'
            >
              {t.recentProjects.title.replace('.', '')}
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-4 items-center lg:items-end"
          >
            <p className='text-lg text-slate-500 font-medium leading-relaxed max-w-[340px]'>
              {t.recentProjects.subtitle}
            </p>
          </motion.div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecentProjects;