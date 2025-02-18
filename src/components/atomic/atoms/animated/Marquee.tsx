// components/Marquee.tsx
'use client';

import React, { useState, useRef, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';
import useWidth from '../../../../hooks/useWidth';

interface MarqueeItem {
  text: string;
}

interface MarqueeProps {
  $data: MarqueeItem[];
  // Valor por defecto (fallback) en caso de que no se pueda calcular dinámicamente
  $animationDuration?: number; // en segundos
  $waitDuration?: number; // en segundos
}

// Contenedor que oculta el contenido que se sale de sus límites
const MarqueeContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 1rem 0 0 0;
`;

// Componente que mostrará el texto animado.
// Usaremos props para definir el punto de inicio, fin y duración de la animación.
interface MarqueeTextProps {
  $duration: number;
  $startX: number;
  $endX: number;
}

const MarqueeText = styled.div<MarqueeTextProps>`
  white-space: nowrap;
  display: inline-block;
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  filter: drop-shadow(
    -1px 1px 2px ${({ theme }) => theme.colors.backgroundBase}
  );
  pointer-events: none;
  cursor: none;
  /* Generamos keyframes dinámicos en función de las propiedades */
  animation: ${({ $duration, $startX, $endX }) => css`
    ${keyframes`
      from {
        transform: translateX(${$startX}px);
      }
      to {
        transform: translateX(${$endX}px);
      }
    `} ${$duration}s linear forwards
  `};
`;

const Marquee: React.FC<MarqueeProps> = ({
  $data,
  $animationDuration = 10, // Fallback en caso de no calcular la duración
  $waitDuration = 5, // Tiempo de espera entre textos en segundos
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // Estado para almacenar los parámetros de la animación
  const [animProps, setAnimProps] = useState({
    duration: $animationDuration,
    startX: 0,
    endX: 0,
  });
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  // Obtenemos el ancho del viewport mediante tu hook.
  const windowWidth = useWidth();

  useEffect(() => {
    // Si contamos con el contenedor y el texto, obtenemos sus anchos.
    // Podemos usar el ancho del contenedor, pero si prefieres que el cálculo
    // se base en el ancho del viewport, usamos windowWidth.
    const containerWidth = containerRef.current
      ? containerRef.current.offsetWidth
      : windowWidth;
    if (textRef.current) {
      const textWidth = textRef.current.offsetWidth;
      // Velocidad constante: píxeles por segundo.
      const speed = 100; // Puedes ajustar este valor (por ejemplo, 100px/s)
      // La distancia total que debe recorrer es:
      // desde el borde derecho del contenedor (o viewport) hasta que el texto se salga completamente por la izquierda.
      const totalDistance = containerWidth + textWidth;
      // Calculamos la duración en segundos.
      const duration = totalDistance / speed;
      setAnimProps({ duration, startX: containerWidth, endX: -textWidth });
    }
  }, [currentIndex, $data, windowWidth]);

  const handleAnimationEnd = () => {
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % $data.length);
    }, $waitDuration * 1000);
  };

  return (
    <MarqueeContainer ref={containerRef}>
      <MarqueeText
        key={currentIndex} // Forzamos el reinicio de la animación al cambiar el índice
        ref={textRef}
        $duration={animProps.duration}
        $startX={animProps.startX}
        $endX={animProps.endX}
        onAnimationEnd={handleAnimationEnd}>
        {$data[currentIndex].text}
      </MarqueeText>
    </MarqueeContainer>
  );
};

export default Marquee;

