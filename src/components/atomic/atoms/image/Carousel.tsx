// components/ImageCarousel.tsx
'use client';

import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import Images from './Images';

interface CarouselContainerProps {
  $height: string;
}

const CarouselContainer = styled.div<CarouselContainerProps>`
  position: relative;
  width: 100%;
  height: ${({ $height }) => $height};
  overflow: hidden;
`;

interface SlideProps {
  $isActive: boolean;
  $direction: 'left' | 'right';
  $useFade: boolean;
  $index: number;
  $currentIndex: number;
}

const Slide = styled.div<SlideProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: ${({ $isActive, $useFade }) => ($useFade ? ($isActive ? 1 : 0) : 1)};
  transition: ${({ $useFade }) =>
    $useFade ? 'opacity 0.2s ease-in-out' : 'transform 0.3s ease-in-out'};
  transform: ${({ $isActive, $direction, $index, $currentIndex }) => {
    if ($isActive) return 'translateX(0)';

    // Determinar posición basada en dirección y relación con el índice actual
    if ($direction === 'right') {
      return $index > $currentIndex ? 'translateX(100%)' : 'translateX(-100%)';
    }
    return $index < $currentIndex ? 'translateX(-100%)' : 'translateX(100%)';
  }};
`;

const Arrow = styled.button<{ direction: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  ${({ direction }) => (direction === 'left' ? 'left: 1rem;' : 'right: 1rem;')}
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  padding: 1rem;
  cursor: pointer;
  font-size: 2rem;
  z-index: 1;
  border-radius: 50%;
`;

const DotsContainer = styled.div`
  position: absolute;
  bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Dot = styled.button<{ $isActive: boolean }>`
  background: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.primary : theme.colors.secondary};
  border: none;
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  margin: 0 0.5rem;
  cursor: pointer;
`;

interface ImageCarouselProps {
  $images: { src: string; alt: string; text: string }[];
  $useFade?: boolean;
  $interval?: number;
  $height?: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  $images,
  $useFade = false,
  $interval = 20000,
  $height = '70vh',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const nextSlide = useCallback(() => {
    setDirection('right');
    setCurrentIndex((prevIndex) =>
      prevIndex === $images.length - 1 ? 0 : prevIndex + 1
    );
  }, [$images.length]);

  const prevSlide = () => {
    setDirection('left');
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? $images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 'right' : 'left');
    setCurrentIndex(index);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, $interval);
    return () => clearInterval(slideInterval);
  }, [nextSlide, $interval]);

  return (
    <CarouselContainer $height={$height}>
      {$images.map((image, index) => (
        <Slide
          key={index}
          $isActive={index === currentIndex}
          $direction={direction}
          $useFade={$useFade}
          $index={index}
          $currentIndex={currentIndex}>
          <Images src={image.src} alt={image.alt} />
        </Slide>
      ))}
      <Arrow direction="left" onClick={prevSlide} aria-label="Imagen anterior">
        ❮
      </Arrow>
      <Arrow
        direction="right"
        onClick={nextSlide}
        aria-label="Siguiente imagen">
        ❯
      </Arrow>
      <DotsContainer>
        {$images.map((_, index) => (
          <Dot
            aria-label={`Ir a la imagen ${index + 1}`}
            key={index}
            $isActive={index === currentIndex}
            onClick={() => goToSlide(index)}
          />
        ))}
      </DotsContainer>
    </CarouselContainer>
  );
};

export default ImageCarousel;

