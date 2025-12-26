import { motion } from 'framer-motion';
import Button from './Button';

// Animaciones
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Componente de tarjeta con efecto glass
const ProjectCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      className='group relative rounded-3xl border border-black/5 bg-white shadow-xl transition-all duration-500 overflow-hidden lg:hover:shadow-2xl'
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.02,
        y: -5,
        boxShadow: "0 20px 40px -20px rgba(0,0,0,0.1)"
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
        duration: 0.6,
      }}
    >
      {/* Contenido */}
      <div className='relative z-10'>{children}</div>

      {/* Indicador de progreso minimalista */}
      <motion.div
        className='absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400'
        initial={{ width: 0 }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      />
    </motion.div>
  );
};

function RecentProjects() {
  return (
    <section className="bg-white py-24 px-6 overflow-hidden relative">
      {/* Fondo con efectos suaves */}
      <div className='absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-white' />

      {/* Partículas de fondo */}
      <div className='absolute inset-0 overflow-hidden'>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-1 h-1 bg-[#2F80ED] rounded-full opacity-30'
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              scale: 0,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        <motion.div
          className="text-center"
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerChildren}
        >
          <motion.h2
            className="text-4xl font-bold text-slate-900 sm:text-5xl"
            variants={fadeUp}
          >
            Algunos de nuestros{' '}
            <span className='bg-gradient-to-r from-[#2F80ED] to-[#38BDF8] bg-clip-text text-transparent'>
              trabajos
            </span>
          </motion.h2>
          <motion.p
            className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto"
            variants={fadeUp}
          >
            Proyectos reales donde hemos aplicado nuestra experiencia técnica
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerChildren}
        >
          {[
            {
              name: "Tienda Online - Moda",
              description: "E-commerce desarrollado con Shopify para marca de ropa local con más de 500 productos.",
              technologies: ["Shopify", "JavaScript", "CSS", "Liquid"],
              image: "https://cdn.pixabay.com/photo/2017/03/13/17/26/ecommerce-2140603_1280.jpg",
              category: "E-commerce",
              color: "from-[#10B981] to-[#059669]",
              accentColor: "emerald"
            },
            {
              name: "Web App - Servicios",
              description: "Aplicación web para gestión de citas médicas con sistema de pagos integrado y panel administrativo.",
              technologies: ["React", "Node.js", "MongoDB", "Stripe"],
              image: "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg",
              category: "Web App",
              color: "from-[#2F80ED] to-[#38BDF8]",
              accentColor: "blue"
            },
            {
              name: "Sitio Institucional",
              description: "Web corporativa con CMS personalizado, blog integrado y sistema de contacto avanzado.",
              technologies: ["WordPress", "PHP", "JavaScript", "MySQL"],
              image: "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg",
              category: "Corporativo",
              color: "from-[#8B5CF6] to-[#7C3AED]",
              accentColor: "purple"
            }
          ].map((project, index) => (
            <ProjectCard key={index}>
              {/* Imagen del proyecto con overlay */}
              <div className="relative h-48 overflow-hidden rounded-t-3xl">
                <motion.img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  initial={{ scale: 1.1, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Categoría badge */}
                <motion.div
                  className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md border ${index === 0
                      ? 'bg-emerald-50 border-emerald-100 text-emerald-600'
                      : index === 1
                        ? 'bg-blue-50 border-blue-100 text-blue-600'
                        : 'bg-purple-50 border-purple-100 text-purple-600'
                    }`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  {project.category}
                </motion.div>

                {/* Hover overlay con info adicional */}
                <motion.div
                  className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <motion.div
                    className="text-white text-center"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-12 h-12 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <p className="text-sm font-medium">Ver proyecto</p>
                  </motion.div>
                </motion.div>
              </div>

              {/* Contenido de la tarjeta */}
              <div className="p-6">
                <motion.h3
                  className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#2F80ED] transition-colors duration-300"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  {project.name}
                </motion.h3>

                <motion.p
                  className="text-slate-600 leading-relaxed mb-6 transition-colors duration-300"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  {project.description}
                </motion.p>

                {/* Tecnologías */}
                <motion.div
                  className="flex flex-wrap gap-2 mb-6"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  {project.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      className={`px-3 py-1 text-xs font-medium rounded-full border ${index === 0
                          ? 'bg-emerald-50 border-emerald-100 text-emerald-600'
                          : index === 1
                            ? 'bg-blue-50 border-blue-100 text-blue-600'
                            : 'bg-purple-50 border-purple-100 text-purple-600'
                        }`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.7 + index * 0.1 + i * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Botón Ver más */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  <motion.button
                    className={`group inline-flex items-center px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 border ${index === 0
                        ? 'bg-emerald-50 border-emerald-100 text-emerald-600 hover:bg-emerald-100'
                        : index === 1
                          ? 'bg-blue-50 border-blue-100 text-blue-600 hover:bg-blue-100'
                          : 'bg-purple-50 border-purple-100 text-purple-600 hover:bg-purple-100'
                      }`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  >
                    Ver detalles
                    <motion.svg
                      className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </motion.svg>
                  </motion.button>
                </motion.div>
              </div>
            </ProjectCard>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Button
            href="/portafolio"
            variant="primary"
            size="lg"
            icon={
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            }
            iconPosition="left"
          >
            Ver Portafolio Completo
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

export default RecentProjects;