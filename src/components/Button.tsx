import { motion } from 'framer-motion';
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  icon,
  iconPosition = 'right',
}) => {
  // Variantes de estilo
  const variants = {
    primary: `
      bg-gradient-to-r from-[#2F80ED] via-[#3B82F6] to-[#38BDF8] 
      text-white shadow-2xl border border-blue-400/30
      hover:shadow-blue-500/25 hover:shadow-2xl
      before:bg-gradient-to-r before:from-blue-400/20 before:to-cyan-400/20
    `,
    secondary: `
      bg-gradient-to-r from-[#10B981] via-[#059669] to-[#047857] 
      text-white shadow-2xl border border-emerald-400/30
      hover:shadow-emerald-500/25 hover:shadow-2xl
      before:bg-gradient-to-r before:from-emerald-400/20 before:to-teal-400/20
    `,
    ghost: `
      border border-white/20 backdrop-blur-lg text-white shadow-2xl
      hover:shadow-white/10 hover:shadow-2xl
      before:bg-gradient-to-r before:from-white/10 before:to-white/5
    `,
  };

  const sizes = {
    sm: 'px-6 py-3 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-10 py-5 text-lg',
  };

  const baseClasses = `
    relative inline-flex items-center justify-center
    rounded-2xl font-bold transition-all duration-500
    transform-gpu will-change-transform
    overflow-hidden group
    before:absolute before:inset-0 before:rounded-2xl 
    before:opacity-0 before:transition-opacity before:duration-500
    hover:before:opacity-100
    ${variants[variant]}
    ${sizes[size]}
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
    ${className}
  `;

  const motionProps = {
    whileHover: disabled ? {} : {
      scale: 1.02,
      y: -2,
    },
    whileTap: disabled ? {} : {
      scale: 0.98,
    },
    transition: {
      type: 'spring' as const,
      stiffness: 400,
      damping: 25,
    },
  };

  const content = (
    <>
      {/* Efecto de glow animado */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      />
      
      {/* Contenido del botón */}
      <span className="relative z-10 flex items-center justify-center gap-3">
        {icon && iconPosition === 'left' && (
          <motion.span
            whileHover={{ x: -2 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            {icon}
          </motion.span>
        )}
        
        {children}
        
        {icon && iconPosition === 'right' && (
          <motion.span
            whileHover={{ x: 2 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            {icon}
          </motion.span>
        )}
      </span>

      {/* Partículas decorativas */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/60 rounded-full"
            initial={{
              x: `${20 + i * 30}%`,
              y: '50%',
              scale: 0,
              opacity: 0,
            }}
            whileHover={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              y: ['50%', '20%', '50%'],
            }}
            transition={{
              duration: 1.5,
              delay: i * 0.1,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={baseClasses}
        {...motionProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
};

// Iconos predefinidos para usar con los botones
export const ArrowRightIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
);

export const SearchIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

export const ExternalLinkIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
);

export const PlayIcon = () => (
  <svg
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M8 5v14l11-7z" />
  </svg>
);

export default Button;
