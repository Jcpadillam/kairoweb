import React, { useState, useEffect, useRef } from 'react';
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

// Opciones del select
const projectOptions = [
  { value: '', label: '¿Qué necesitas desarrollar?', icon: '' },
  { value: 'ecommerce', label: 'Tienda Online / E-commerce', icon: '' },
  { value: 'webapp', label: 'Aplicación Web / Sistema', icon: '' },
  { value: 'website', label: 'Sitio Web Corporativo', icon: '' },
  { value: 'landing', label: 'Landing Page / Campaña', icon: '' },
  { value: 'integration', label: 'Integración con APIs / CRM', icon: '' },
  { value: 'optimization', label: 'Optimización / Mejoras', icon: '' },
  { value: 'migration', label: 'Migración / Actualización', icon: '' },
  { value: 'maintenance', label: 'Soporte / Mantenimiento', icon: '' },
  { value: 'consultation', label: 'Consultoría Técnica', icon: '' },
  { value: 'other', label: 'Otro proyecto', icon: '' },
];

// Componente Select personalizado
const CustomSelect = ({
  value,
  onChange,
  options,
  placeholder
}: {
  value: string;
  onChange: (value: string) => void;
  options: typeof projectOptions;
  placeholder?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
  const selectedOption = options.find(option => option.value === value);

  // Cerrar el select cuando se haga clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={selectRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-left focus:outline-none focus:ring-2 focus:ring-[#2F80ED] focus:border-transparent transition-all duration-300 flex items-center justify-between h-12"
      >
        <span className={selectedOption?.value ? 'text-slate-900' : 'text-slate-400'}>
          {selectedOption?.value ? selectedOption.label : (placeholder || 'Selecciona una opción')}
        </span>
        <motion.svg
          className="w-5 h-5 text-slate-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>

      <motion.div
        initial={{ opacity: 0, y: -10, scale: 0.95 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          y: isOpen ? 0 : -10,
          scale: isOpen ? 1 : 0.95,
          pointerEvents: isOpen ? 'auto' : 'none'
        }}
        transition={{ duration: 0.2 }}
        className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-2xl z-50 max-h-60 overflow-y-auto"
      >
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => {
              onChange(option.value);
              setIsOpen(false);
            }}
            className={`w-full px-4 py-3 text-left hover:bg-slate-50 transition-colors duration-200 flex items-center ${option.value === '' ? 'text-slate-300 cursor-default hover:bg-transparent' : 'text-slate-600'
              } ${option.value === value ? 'bg-blue-50 text-[#2F80ED]' : ''}`}
            disabled={option.value === ''}
          >
            {option.label}
          </button>
        ))}
      </motion.div>
    </div>
  );
};

// Iconos personalizados
const CalendarIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
  </svg>
);

function FinalCTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envío del formulario
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log('Formulario enviado:', formData);
    setIsSubmitting(false);

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      project: '',
      message: ''
    });
  };

  return (
    <section id="agenda" className="bg-white py-24 px-6 overflow-hidden relative">
      {/* Fondo con efectos suaves */}
      <div className='absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-white' />

      {/* Partículas de fondo */}
      <div className='absolute inset-0 overflow-hidden'>
        {[...Array(15)].map((_, i) => (
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

      <div className="mx-auto max-w-6xl relative z-10">
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
            ¿Tienes un{' '}
            <span className='bg-gradient-to-r from-[#2F80ED] to-[#38BDF8] bg-clip-text text-transparent'>
              desafío técnico
            </span>
            ?
          </motion.h2>
          <motion.p
            className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto"
            variants={fadeUp}
          >
            Hablemos de tu proyecto. Te damos una evaluación honesta y un presupuesto claro.
          </motion.p>
        </motion.div>

        {/* Grid de dos columnas */}
        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-start">

          {/* Columna izquierda - Botones de acción rápida */}
          <motion.div
            className="space-y-8"
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerChildren}
          >
            <motion.div variants={fadeUp}>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Contacto directo</h3>

              <div className="space-y-4">
                <Button
                  href="https://wa.me/573001234567"
                  variant="primary"
                  size="lg"
                  icon={<WhatsAppIcon />}
                  iconPosition="left"
                  className="w-full justify-center"
                >
                  Escribir por WhatsApp
                </Button>

                <Button
                  onClick={() => setShowForm(!showForm)}
                  variant="secondary"
                  size="lg"
                  icon={<CalendarIcon />}
                  iconPosition="left"
                  className="w-full justify-center"
                >
                  {showForm ? 'Enviar formulario' : 'Mostrar formulario'}
                </Button>
              </div>
            </motion.div>

            {/* Información adicional */}
            <motion.div
              className="bg-slate-50 border border-slate-100 rounded-2xl p-6 shadow-sm"
              variants={fadeUp}
            >
              <h4 className="text-lg font-semibold text-slate-900 mb-4">¿Qué incluye?</h4>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#2F80ED] rounded-full mr-3"></div>
                  Diagnóstico técnico gratuito
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#2F80ED] rounded-full mr-3"></div>
                  Presupuesto sin compromiso
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#2F80ED] rounded-full mr-3"></div>
                  Consulta sobre tecnologías
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#2F80ED] rounded-full mr-3"></div>
                  Plan de desarrollo personalizado
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Columna derecha - Formulario de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className={`bg-white border border-slate-200 rounded-3xl p-8 shadow-2xl transition-all duration-500 ${showForm ? 'opacity-100 scale-100' : 'opacity-50 scale-95 pointer-events-none'
                }`}
              animate={{
                opacity: showForm ? 1 : 0.5,
                scale: showForm ? 1 : 0.95,
                pointerEvents: showForm ? 'auto' : 'none'
              }}
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Cuéntanos tu proyecto</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-600 text-sm font-medium mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2F80ED] focus:border-transparent transition-all duration-300 h-12"
                      placeholder="Tu nombre completo"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-600 text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2F80ED] focus:border-transparent transition-all duration-300 h-12"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-600 text-sm font-medium mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2F80ED] focus:border-transparent transition-all duration-300 h-12"
                      placeholder="+57 300 123 4567"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-600 text-sm font-medium mb-2">
                      Tipo de proyecto
                    </label>
                    <CustomSelect
                      value={formData.project}
                      onChange={(value) => setFormData(prev => ({ ...prev, project: value }))}
                      options={projectOptions}
                      placeholder="¿Qué necesitas desarrollar?"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-600 text-sm font-medium mb-2">
                    Cuéntanos sobre tu proyecto *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2F80ED] focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Describe tu idea, desafío técnico o lo que necesitas desarrollar..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full relative inline-flex items-center justify-center rounded-2xl font-bold transition-all duration-500 transform-gpu will-change-transform overflow-hidden group px-8 py-4 text-base bg-gradient-to-r from-[#2F80ED] via-[#3B82F6] to-[#38BDF8] text-white shadow-2xl border border-blue-400/30 hover:shadow-blue-500/25 hover:shadow-2xl before:bg-gradient-to-r before:from-blue-400/20 before:to-cyan-400/20 before:absolute before:inset-0 before:rounded-2xl before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={!isSubmitting ? {
                    scale: 1.02,
                    y: -2,
                  } : {}}
                  whileTap={!isSubmitting ? {
                    scale: 0.98,
                  } : {}}
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 25,
                  }}
                >
                  {/* Efecto de glow animado */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={!isSubmitting ? { x: '100%' } : {}}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                  />

                  <span className="relative z-10">
                    {isSubmitting ? 'Enviando...' : 'Enviar solicitud'}
                  </span>

                  {/* Spinner de carga */}
                  {isSubmitting && (
                    <motion.div
                      className="ml-3 w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    />
                  )}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>

        {/* Información de contacto */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <p className="text-slate-400 text-sm">
            Resolvemos dudas técnicas y damos presupuesto sin compromiso • Respuesta en menos de 24 horas
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default FinalCTA;