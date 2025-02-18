import React from 'react';
import styled, { css } from 'styled-components';
import Grid from './Grid';

interface ThreeColumnsProps {
  children: React.ReactNode[];
  $column1Width?: number;
  $column2Width?: number;
  $column3Width?: number;
  $YCenter?: boolean;
  $reverse?: boolean;
  $margin?: string;
  $gap?: string;
  $padding?: string;
}

const ThreeColumnsGrid = styled(Grid)<{
  $column1Width?: number;
  $column2Width?: number;
  $column3Width?: number;
  $YCenter?: boolean;
  $reverse?: boolean;
  $margin?: string;
  $gap?: string;
  $padding?: string;
}>`
  /* Configuramos tres columnas fijas según las props o por defecto */
  grid-template-columns: ${({ $column1Width, $column2Width, $column3Width }) =>
    $column1Width && $column2Width && $column3Width
      ? `${$column1Width}fr ${$column2Width}fr ${$column3Width}fr`
      : '1fr 1fr 1fr'};

  gap: ${({ $gap }) => $gap || '1rem'};
  margin: ${({ $margin }) => $margin || '0'};
  padding: ${({ $padding }) => $padding || '0'};

  ${({ $YCenter }) =>
    $YCenter &&
    css`
      align-items: center;
    `}

  /* En pantallas pequeñas, se transforma el layout a columna */
  @media screen and (width >= 650px) {
    /* Mantiene el grid de tres columnas en pantallas amplias */
  }
`;

const ThreeColumns: React.FC<ThreeColumnsProps> = ({
  $column1Width,
  $column2Width,
  $column3Width,
  $YCenter,
  $reverse,
  $margin,
  $gap,
  $padding,
  children,
}) => {
  return (
    <ThreeColumnsGrid
      $column1Width={$column1Width}
      $column2Width={$column2Width}
      $column3Width={$column3Width}
      $YCenter={$YCenter}
      $reverse={$reverse}
      $margin={$margin}
      $gap={$gap}
      $padding={$padding}>
      {children[0]}
      {children[1]}
      {children[2]}
    </ThreeColumnsGrid>
  );
};

export default ThreeColumns;

