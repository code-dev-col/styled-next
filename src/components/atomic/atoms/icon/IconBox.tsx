import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';

interface StyledIconBoxProps {
  $width?: string;
  $height?: string;
  $borderRadius?: string;
  $backgroundColor?: string;
  $padding?: string;
  $color?: string;
}

const StyledIconBox = styled.div<StyledIconBoxProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.$width || '100%'};
  height: ${(props) => props.$height || '100%'};
  border-radius: ${(props) => props.$borderRadius || '0'};
  background: ${({ $backgroundColor, theme }) => {
    if ($backgroundColor) {
      // Si se pasa un color, primero se intenta obtenerlo del tema y, de no existir, se usa el valor directamente
      const baseColor = theme.colors[$backgroundColor] || $backgroundColor;
      // Degradado lineal: a la izquierda se muestra un tono más claro, a la derecha el color base
      return `linear-gradient(to right, ${lighten(0.15, baseColor)}, ${baseColor})`;
    }
    return 'transparent';
  }};
  padding: ${(props) => props.$padding || '0'};
  color: ${(props) => props.$color || 'inherit'};
`;

interface IconBoxProps extends StyledIconBoxProps {
  children: React.ReactNode;
}

export default function IconBox({
  children,
  $width,
  $height,
  $borderRadius,
  $backgroundColor,
}: IconBoxProps) {
  return (
    <StyledIconBox
      $width={$width}
      $height={$height}
      $borderRadius={$borderRadius}
      $backgroundColor={$backgroundColor}>
      {children}
    </StyledIconBox>
  );
}

