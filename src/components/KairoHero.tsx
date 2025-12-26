import { motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import Button, { ArrowRightIcon } from './Button';

// --- NexusBackground Component (Cloudflare-style) ---
const NexusBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 80;
    const connectionDistance = 180;
    const mouse = { x: 0, y: 0, active: false };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;

      constructor(width: number, height: number) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.size = Math.random() * 2.5 + 1.5;
      }

      update(width: number, height: number) {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Interaction with mouse
        if (mouse.active) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            this.x -= dx * 0.015;
            this.y -= dy * 0.015;
          }
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(47, 128, 237, 0.4)';
        ctx.fill();
      }
    }

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.update(canvas.width, canvas.height);
        p1.draw(ctx);

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            const opacity = 1 - dist / connectionDistance;
            ctx.strokeStyle = `rgba(47, 128, 237, ${opacity * 0.3})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
};

// Animaciones simplificadas para máximo rendimiento
const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const // Apple-style cubic bezier
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

// Componente Badge Minimalista
const Badge = ({ children }: { children: React.ReactNode }) => (
  <motion.span
    variants={fadeUp}
    className="inline-block bg-blue-50 text-blue-600 rounded-full px-4 py-1.5 text-xs font-semibold mr-2 mb-2 border border-blue-100/50"
  >
    {children}
  </motion.span>
);

// Check icon simplificado
const CheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden className="text-[#69A7FF] h-5 w-5" {...props}>
    <path
      fillRule="evenodd"
      d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.2 7.3a1 1 0 0 1-1.44 0L3.29 9.932a1 1 0 1 1 1.42-1.408l3.05 3.08 6.48-6.57a1 1 0 0 1 1.464.256Z"
      clipRule="evenodd"
    />
  </svg>
);

export default function KairoHero() {
  return (
    <div className='relative bg-white text-slate-900 overflow-hidden min-h-[90vh] flex items-center'>
      {/* Background Container */}
      <div className='absolute inset-0 overflow-hidden z-0 bg-slate-50'>
        {/* CSS Fallback Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/30" />

        {/* Nexus Procedural Background */}
        <NexusBackground />

        {/* Animated Background Orbs for Fallback (Premium CSS alternative) */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-200/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-indigo-50/30 rounded-full blur-[120px]"
        />

        {/* Overlays for depth and legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white" />
      </div>

      <section className='relative z-10 w-full px-6 pt-28 pb-16 sm:pt-36 sm:pb-24'>
        <div className='mx-auto max-w-7xl'>
          <motion.div
            initial='hidden'
            animate='show'
            variants={staggerChildren}
            className='flex flex-col items-start text-left'
          >
            {/* Badges */}
            <div className='mb-6 flex flex-wrap'>
              <Badge>Auditoría Estratégica Gratis</Badge>
              <Badge>LATAM Tech Hub • Impulso Global</Badge>
            </div>

            {/* Heading Principal */}
            <motion.h1
              variants={fadeUp}
              className='text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl mb-6 text-slate-900 leading-[1.1]'
            >
              Dominamos el código. <br />
              <span className="text-[#2F80ED]">Escalamos tu negocio.</span>
            </motion.h1>

            {/* Subtítulo */}
            <motion.p
              variants={fadeUp}
              className='mt-4 max-w-2xl text-lg md:text-xl leading-relaxed text-slate-600 mb-8'
            >
              Desarrollamos ecosistemas digitales digitales de alto rendimiento. <br className="hidden md:block" />
              eCommerce, integraciones y soporte experto diseñado para escalar sin fricciones.
            </motion.p>

            {/* Botones de Acción */}
            <motion.div
              variants={fadeUp}
              className='flex flex-wrap items-center gap-5'
            >
              <Button
                href='#agenda'
                variant='primary'
                size='lg'
                className="px-8 py-3.5 text-base shadow-lg shadow-blue-500/20"
              >
                Lanzar mi proyecto
              </Button>
              <Button
                href='#soluciones'
                variant='ghost'
                size='lg'
                className="!text-slate-800 border-slate-300/50 shadow-none hover:bg-slate-100/50"
                icon={<ArrowRightIcon />}
                iconPosition='right'
              >
                Conocer el Método
              </Button>
            </motion.div>

            {/* Features Rápidas */}
            <motion.div
              variants={fadeUp}
              className='mt-12 grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-2xl'
            >
              {[
                'Ingeniería eCommerce',
                'Arquitectura API',
                'Ecosistemas 24/7'
              ].map((label) => (
                <div key={label} className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">{label}</span>
                </div>
              ))}
            </motion.div>

            <motion.p variants={fadeUp} className='mt-8 text-xs text-slate-400 font-medium italic'>
              Propuesta técnica en 24h • Primera sesión estratégica sin costo
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Indicador de scroll minimalista */}

    </div>
  );
}