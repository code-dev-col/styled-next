import React from 'react';
import styled, { css } from 'styled-components';
import Grid from '../grid/Grid';

interface TwoColumnsProps {
  children: React.ReactNode[];
  $column1Width?: number;
  $column2Width?: number;
  $YCenter?: boolean;
  $reverse?: boolean;
  $margin?: string;
  $gap?: string;
  $padding?: string;
}

const TwoColumnsGrid = styled(Grid)<{
  $column1Width?: number;
  $column2Width?: number;
  $YCenter?: boolean;
  $reverse?: boolean;
  $margin?: string;
  $gap?: string;
  $padding?: string;
}>`
  /* Configuramos las columnas fijas para dos columnas */
  grid-template-columns: ${({ $column1Width, $column2Width }) =>
    $column1Width && $column2Width
      ? `${$column1Width}fr ${$column2Width}fr`
      : '1fr 1fr'};

  gap: ${({ $gap }) => $gap || '1rem'};
  margin: ${({ $margin }) => $margin || '0'};
  padding: ${({ $padding }) => $padding || '0'};

  ${({ $YCenter }) =>
    $YCenter &&
    css`
      align-items: center;
    `}

  /* Para pantallas pequeñas, cambia a layout en columna */
  @media screen and (max-width: 41.99rem) {
    display: flex;

    flex-direction: ${({ $reverse }) =>
      $reverse ? 'column-reverse' : 'column'};
  }
`;

const TwoColumns: React.FC<TwoColumnsProps> = ({
  $column1Width,
  $column2Width,
  $YCenter,
  $reverse,
  $margin,
  $gap,
  $padding,
  children,
}) => {
  return (
    <TwoColumnsGrid
      $column1Width={$column1Width}
      $column2Width={$column2Width}
      $YCenter={$YCenter}
      $reverse={$reverse}
      $margin={$margin}
      $gap={$gap}
      $padding={$padding}>
      {children[0]}
      {children[1]}
    </TwoColumnsGrid>
  );
};

export default TwoColumns;

