'use client';

import styled, { css } from 'styled-components';

const headingSizes = {
  h1: '2.5rem',
  h2: '2rem',
  h3: '1.75rem',
  h4: '1.5rem',
  h5: '1.25rem',
  h6: '1rem',
};

// Definimos los tipos de “variant” permitidos
type HeadingVariant = keyof typeof headingSizes;

interface StyledMainTitleProps {
  /** Controla el padding */
  $padding?: string;
  /** Controla el margen */
  $margin?: string;
  /** Controla el color */
  $color?: string;
  /** Centrado */
  $center?: boolean;
  /** Controla el estilo/tamaño tipográfico */
  $variant?: HeadingVariant;
  /** Tamaño de fuente personalizado */
  $customSize?: string;
  /** Texto en cursiva */
  $italic?: boolean;
  /** Controla la etiqueta HTML final */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /** Agrega filtro de sombra */
  $filterShadow?: string;

  /** Grueso de fuente */
  $fontWeight?: string;
}

const StyledMainTitle = styled.h1<StyledMainTitleProps>`
  display: block;

  letter-spacing: -0.1rem;
  font-weight: 900;

  /* margen */
  ${(props) => (props.$margin ? `margin: ${props.$margin};` : 'margin: 0;')}

  /* padding */
  ${(props) =>
    props.$padding ? `padding: ${props.$padding};` : 'padding: 2rem 0 1rem 0;'}

  /* color */
  ${(props) =>
    props.$color
      ? `color: ${props.$color};`
      : `color: ${props.theme.colors.textPrimary};`}

  /* centrado */
  ${(props) => (props.$center ? 'text-align: center;' : 'text-align: left;')}

  /* tamaño tipográfico según la variante o tamaño personalizado */
  ${({ $variant = 'h1', $customSize }) => css`
    font-size: ${$customSize || headingSizes[$variant]};
  `}

  /* estilo de cursiva */
  ${(props) => props.$italic && 'font-style: italic;'}

  /* filtro de sombra */
  ${({ theme, $filterShadow }) =>
    $filterShadow &&
    css`
      filter: drop-shadow(
        -1px 1px 2px ${() => ($filterShadow ? theme.colors[$filterShadow] : 'transparent')}
      );
    `}

  /* fuente */
  ${(props) => props.$fontWeight && `font-weight: ${props.$fontWeight};`}
`;

interface MainTitleProps extends StyledMainTitleProps {
  $name?: string | null;
  children?: React.ReactNode;
}

/**
 * El componente MainTitle, por defecto:
 * - Usa h1 como etiqueta
 * - Usa 'h1' como “variant” para tamaño
 */
const Title: React.FC<MainTitleProps> = ({
  as = 'h1',
  $variant = 'h1',
  $name,
  children,
  $color,
  $center,
  $customSize,
  $italic,
  $padding,
  $margin,
  $fontWeight,
  $filterShadow,
}) => {
  return (
    <StyledMainTitle
      as={as}
      $variant={$variant}
      $color={$color}
      $center={$center}
      $customSize={$customSize}
      $margin={$margin}
      $padding={$padding}
      $filterShadow={$filterShadow}
      $fontWeight={$fontWeight}
      $italic={$italic}>
      {children} {$name}
    </StyledMainTitle>
  );
};

export default Title;

