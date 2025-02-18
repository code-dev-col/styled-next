import { useState, useEffect, useCallback } from 'react';

interface ScrollPosition {
  x: number;
  y: number;
}

const useScroll = (): ScrollPosition => {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: 0,
    y: 0,
  });

  const handleScroll = useCallback(() => {
    setScrollPosition({
      x: window.scrollX,
      y: window.scrollY,
    });
  }, []);

  useEffect(() => {
    // Agregar el evento de desplazamiento después de asegurarse de que window esté disponible
    window.addEventListener('scroll', handleScroll);

    // Llamar manualmente al manejador de desplazamiento para obtener la posición inicial
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]); // Asegúrate de incluir handleScroll en el array de dependencias

  return scrollPosition;
};

export default useScroll;

