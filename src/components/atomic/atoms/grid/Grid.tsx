import React from 'react';
import styled from 'styled-components';

export interface GridProps {
  children?: React.ReactNode;
  $maxGridWidth?: string; // Ancho máximo del grid (por defecto '1200px')
  $maxItemWidth?: string; // Ancho máximo para cada hijo (por defecto sin límite)
  $gap?: string; // Espaciado entre celdas (por defecto '1rem')
  $justifyContent?: string; // Alineación horizontal (por defecto 'center')
  $alignItems?: string; // Alineación vertical (por defecto 'start')
  $zIndex?: number; // z-index del grid (por defecto 1)
}

const StyledGrid = styled.div<GridProps>`
  display: grid;
  gap: ${({ $gap }) => $gap || '1rem'};
  justify-content: ${({ $justifyContent }) => $justifyContent || 'center'};
  align-items: ${({ $alignItems }) => $alignItems || 'start'};
  max-width: ${({ $maxGridWidth }) => $maxGridWidth || '1200px'};
  z-index: ${({ $zIndex }) => $zIndex || 1};

  /* Layout base: una sola columna */
  grid-template-columns: 1fr;

  /* Para pantallas con ancho mayor o igual a 42rem (672px) */
  @media screen and (min-width: 42rem) {
    grid-template-columns: repeat(auto-fit, minmax(min(230px, 80%), 0.9fr));
  }

  /* Si se define un $maxItemWidth, se aplica a cada hijo directo */
  & > * {
    max-width: ${({ $maxItemWidth }) => $maxItemWidth || 'none'};
  }
`;

const Grid: React.FC<GridProps> = ({
  children,
  $maxGridWidth,
  $maxItemWidth,
  $gap,
  $justifyContent,
  $alignItems,
  $zIndex,
}) => {
  return (
    <StyledGrid
      $maxGridWidth={$maxGridWidth}
      $maxItemWidth={$maxItemWidth}
      $gap={$gap}
      $justifyContent={$justifyContent}
      $alignItems={$alignItems}
      $zIndex={$zIndex}>
      {children}
    </StyledGrid>
  );
};

export default Grid;

