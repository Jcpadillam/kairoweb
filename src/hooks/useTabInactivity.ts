import { useEffect, useRef } from 'react';

export const useTabInactivity = (
  inactiveTitle: string[] = [
    'KairoWeb | Agenda tu cita gratis',
    '¡Obtén una asesoría gratuita!',
    'Contáctanos para agendar',
    'Escríbenos por WhatsApp',
    'Reserva tu espacio ahora',
    '¿Hablamos de tu proyecto?',
  ]
    .sort(() => Math.random() - 0.5)
    .slice(0, 2),
  delay: number = 10000
) => {
  const originalTitle = useRef(document.title);
  const timeoutId = useRef<any>(null);
  const animationIntervalId = useRef<any>(null);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Tab is inactive, start 10s timer
        timeoutId.current = setTimeout(() => {
          let index = 0;
          animationIntervalId.current = setInterval(() => {
            document.title = inactiveTitle[index % inactiveTitle.length];
            index++;
          }, 2000);
        }, delay);
      } else {
        // Tab is active again
        if (timeoutId.current) clearTimeout(timeoutId.current);
        if (animationIntervalId.current) clearInterval(animationIntervalId.current);
        document.title = originalTitle.current;
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (timeoutId.current) clearTimeout(timeoutId.current);
      if (animationIntervalId.current) clearInterval(animationIntervalId.current);
    };
  }, [inactiveTitle, delay]);
};
