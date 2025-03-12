import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';

export interface ContainerProps {
  $margin?: string;
  $backgroundColor?: string;
  $color?: string;
  $textAlign?: string;
  $padding?: string;
  $height?: string;
  $width?: string;
  $borderRadius?: string;
  $borderColor?: string;
  $zIndex?: number;
  // Propiedades adicionales para mayor control
  $overflow?: string;
  $boxShadow?: string;
  $cursor?: string;
  $opacity?: number;
  $display?: string;
  $transform?: string;
}

const StyledContainer = styled.div<ContainerProps>`
  position: static;
  display: ${({ $display }) => $display || 'block'};
  padding: ${({ $padding }) => $padding || '1rem 0'};
  height: ${({ $height }) => $height || 'auto'};
  width: ${({ $width }) => $width || '100%'};
  overflow: ${({ $overflow }) => $overflow || 'visible'};
  opacity: ${({ $opacity }) => ($opacity !== undefined ? $opacity : 1)};
  transform: ${({ $transform }) => $transform || 'none'};

  background: ${({ $backgroundColor, theme }) => {
    if ($backgroundColor) {
      const baseColor = theme.colors[$backgroundColor] || $backgroundColor;
      return `linear-gradient(to right, ${lighten(0.15, baseColor)}, ${baseColor})`;
    }
    return 'transparent';
  }};

  border-radius: ${({ $borderRadius }) => $borderRadius || '0'};
  border: 2px solid
    ${({ $borderColor, theme }) =>
      $borderColor ? theme.colors[$borderColor] : 'transparent'};
  color: ${({ $color }) => $color || 'inherit'};
  text-align: ${({ $textAlign }) => $textAlign || 'left'};
  margin: ${({ $margin }) => $margin || '0'};
  box-shadow: ${({ $boxShadow }) => $boxShadow || 'none'};
  cursor: ${({ $cursor }) => $cursor || 'default'};
  z-index: ${({ $zIndex }) => $zIndex || 1};
`;

interface ContainerComponentProps extends ContainerProps {
  children?: React.ReactNode;
}

const Container: React.FC<ContainerComponentProps> = ({
  $margin,
  $backgroundColor,
  $color,
  $textAlign,
  $padding,
  $height,
  $width,
  $borderRadius,
  $borderColor,
  $zIndex,
  $overflow,
  $boxShadow,
  $cursor,
  $opacity,
  $display,
  $transform,
  children,
}) => {
  return (
    <StyledContainer
      $margin={$margin}
      $backgroundColor={$backgroundColor}
      $color={$color}
      $textAlign={$textAlign}
      $padding={$padding}
      $height={$height}
      $width={$width}
      $borderRadius={$borderRadius}
      $borderColor={$borderColor}
      $zIndex={$zIndex}
      $overflow={$overflow}
      $boxShadow={$boxShadow}
      $cursor={$cursor}
      $opacity={$opacity}
      $display={$display}
      $transform={$transform}>
      {children}
    </StyledContainer>
  );
};

export default Container;

