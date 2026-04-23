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
        <span className={selectedOption?.value ? 'text-slate-900 font-medium' : 'text-slate-400'}>
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
        className="absolute bottom-full mb-2 left-0 right-0 bg-white border border-slate-200 rounded-xl shadow-2xl z-50 max-h-60 overflow-y-auto"
      >
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => {
              onChange(option.value);
              setIsOpen(false);
            }}
            className={`w-full px-4 py-3 text-left hover:bg-slate-50 transition-colors duration-200 flex items-center text-sm font-medium ${option.value === '' ? 'text-slate-300 cursor-default hover:bg-transparent' : 'text-slate-600'
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'contact', ...formData }),
      });

      if (response.ok) {
        setFormData({ name: '', email: '', phone: '', project: '', message: '' });
        alert('¡Solicitud enviada! Un arquitecto de soluciones te contactará pronto.');
      } else {
        alert('Error al enviar la solicitud. Por favor intenta de nuevo.');
      }
    } catch (error) {
      alert('Error de conexión. Revisa tu internet.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="agenda" className="bg-white py-32 px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.03] pointer-events-none select-none">
        <svg width="100%" height="100%" className="text-slate-900">
          <pattern id="grid-cta" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-cta)" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Column: Strategic Content */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="flex flex-col gap-8"
          >
            <motion.div variants={fadeUp}>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] rounded-md border border-blue-100/50 cursor-default">
                  Engineering Standards
                </span>
                <span className="px-3 py-1 bg-slate-50 text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] rounded-md border border-slate-200 cursor-default">
                  Latin America Trusted
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-8">
                ¿Tienes un <br />
                <span className="bg-gradient-to-r from-[#2F80ED] to-[#38BDF8] bg-clip-text text-transparent">
                  desafío técnico
                </span>?
              </h2>

              <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-lg">
                No somos solo desarrolladores; somos arquitectos de soluciones. Cuéntanos tu visión y te entregaremos una hoja de ruta técnica sólida.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-blue-200 transition-colors">
                <div className="w-10 h-10 bg-white shadow-sm rounded-lg flex items-center justify-center text-blue-500 mb-4 font-black">01</div>
                <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight mb-2">Auditoría Técnica</h4>
                <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                  Evaluamos la viabilidad y escalabilidad de tu idea sin costo inicial.
                </p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-blue-200 transition-colors">
                <div className="w-10 h-10 bg-white shadow-sm rounded-lg flex items-center justify-center text-blue-500 mb-4 font-black">02</div>
                <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight mb-2">Respuesta 24h</h4>
                <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                  Recibe un diagnóstico honesto y un roadmap de ejecución en menos de un día.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8">
              <Button
                href="https://wa.me/573243708900"
                variant="primary"
                size="lg"
                icon={<WhatsAppIcon />}
                iconPosition="left"
                className="px-10 py-5 rounded-2xl shadow-xl shadow-blue-500/20 font-black uppercase tracking-widest text-sm"
              >
                Consultoría vía WhatsApp
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column: High-Performance Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-[0_40px_100px_-20px_rgba(15,23,42,0.1)] relative"
          >
            <div className="absolute -top-6 -right-6 lg:-right-12 w-24 h-24 bg-blue-500/10 rounded-full blur-3xl" />

            <h3 className="text-2xl font-black text-slate-900 mb-8 tracking-tighter">
              Inicia tu proceso de ingeniería
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Tu Nombre</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Ej: Juan Pérez"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-slate-900 font-medium focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">E-mail Corporativo</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="tu@empresa.com"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-slate-900 font-medium focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Tipo de Solución</label>
                  <CustomSelect
                    value={formData.project}
                    onChange={(value) => setFormData(prev => ({ ...prev, project: value }))}
                    options={projectOptions}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Háblanos del desafío</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    placeholder="Describe los objetivos técnicos o problemas que buscas resolver..."
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-slate-900 font-medium focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all resize-none"
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-sm shadow-2xl hover:bg-slate-800 disabled:opacity-50 transition-all flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Validando...
                  </>
                ) : 'Enviar Solicitud de Consultoría'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;