import React from 'react';
import styled from 'styled-components';

export interface GridAreasProps {
  children?: React.ReactNode;
  // Layout para pantallas > 64rem (obligatorio)
  $areasLg: string;
  // Layout para pantallas entre 42rem y 63.99rem (opcional)
  $areasMd?: string;
  // Layout para pantallas < 42rem (opcional)
  $areasSm?: string;
  // Opcional, para definir columnas específicas; si no se define se usa una fórmula responsive
  $columns?: string;
  // Opcional, para definir filas específicas
  $rows?: string;
  // Espaciado entre celdas (default: 1rem)
  $gap?: string;
  // Alineación horizontal (default: center)
  $justifyContent?: string;
  // Alineación vertical (default: start)
  $alignItems?: string;
}

const StyledGridAreas = styled.div<GridAreasProps>`
  display: grid;
  gap: ${({ $gap }) => $gap || '1rem'};
  justify-content: ${({ $justifyContent }) => $justifyContent || 'center'};
  align-items: ${({ $alignItems }) => $alignItems || 'start'};

  /* Pantallas grandes (> 64rem) */
  @media screen and (min-width: 64rem) {
    grid-template-areas: ${({ $areasLg }) => $areasLg};
    grid-template-columns: ${({ $columns }) =>
      $columns || 'repeat(auto-fit, minmax(230px, 1fr))'};
    grid-template-rows: ${({ $rows }) => $rows || 'auto'};
  }

  /* Pantallas medianas (entre 42rem y 63.99rem) */
  @media screen and (min-width: 42rem) and (max-width: 63.99rem) {
    grid-template-areas: ${({ $areasMd, $areasLg }) => $areasMd || $areasLg};
    grid-template-columns: ${({ $columns }) =>
      $columns || 'repeat(auto-fit, minmax(230px, 1fr))'};
    grid-template-rows: ${({ $rows }) => $rows || 'auto'};
  }

  /* Pantallas pequeñas (< 42rem) */
  @media screen and (max-width: 41.99rem) {
    grid-template-areas: ${({ $areasSm, $areasMd, $areasLg }) =>
      $areasSm || $areasMd || $areasLg};
    grid-template-columns: ${({ $columns }) =>
      $columns || 'repeat(auto-fit, minmax(230px, 1fr))'};
    grid-template-rows: ${({ $rows }) => $rows || 'auto'};
  }
`;

const GridAreas: React.FC<GridAreasProps> = ({
  children,
  $areasLg,
  $areasMd,
  $areasSm,
  $columns,
  $rows,
  $gap,
  $justifyContent,
  $alignItems,
}) => {
  return (
    <StyledGridAreas
      $areasLg={$areasLg}
      $areasMd={$areasMd}
      $areasSm={$areasSm}
      $columns={$columns}
      $rows={$rows}
      $gap={$gap}
      $justifyContent={$justifyContent}
      $alignItems={$alignItems}>
      {children}
    </StyledGridAreas>
  );
};

export default GridAreas;

