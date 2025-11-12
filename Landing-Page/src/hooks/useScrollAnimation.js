import { useEffect, useRef, useState } from 'react';

/**
 * Hook personalizado para activar animaciones cuando el elemento entra en viewport
 * @param {Object} options - Opciones del Intersection Observer
 * @returns {Array} - [ref, isVisible]
 */
export const useScrollAnimation = (options = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Una vez visible, dejamos de observar (para que la animación solo ocurra una vez)
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold: 0.1, // Se activa cuando el 10% del elemento es visible
        rootMargin: '0px',
        ...options,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isVisible];
};
