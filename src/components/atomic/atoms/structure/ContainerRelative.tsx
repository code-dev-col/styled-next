import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';

export interface ContainerRelativeProps {
  children?: React.ReactNode;
  $bottom?: string;
  $top?: string;
  $right?: string;
  $left?: string;
  $backgroundColor?: string;
  $zIndex?: number;
  $width?: string;
  $height?: string;
  $padding?: string;
  $margin?: string;
  $borderRadius?: string;
  $borderColor?: string;
  $overflow?: string;
  $boxShadow?: string;
  $cursor?: string;
  $opacity?: number;
  $display?: string;
  $transform?: string;
}

const StyledContainerRelative = styled.div<ContainerRelativeProps>`
  position: relative;
  bottom: ${({ $bottom }) => $bottom || 'auto'};
  top: ${({ $top }) => $top || 'auto'};
  right: ${({ $right }) => $right || 'auto'};
  left: ${({ $left }) => $left || 'auto'};
  z-index: ${({ $zIndex }) => $zIndex || 0};
  width: ${({ $width }) => $width || 'auto'};
  height: ${({ $height }) => $height || 'auto'};
  padding: ${({ $padding }) => $padding || '0'};
  margin: ${({ $margin }) => $margin || '0'};
  border-radius: ${({ $borderRadius }) => $borderRadius || '0'};
  border: 2px solid
    ${({ $borderColor, theme }) =>
      $borderColor ? theme.colors[$borderColor] : 'transparent'};
  overflow: ${({ $overflow }) => $overflow || 'visible'};
  box-shadow: ${({ $boxShadow }) => $boxShadow || 'none'};
  cursor: ${({ $cursor }) => $cursor || 'default'};
  opacity: ${({ $opacity }) => ($opacity !== undefined ? $opacity : 1)};
  display: ${({ $display }) => $display || 'block'};
  transform: ${({ $transform }) => $transform || 'none'};

  background: ${({ $backgroundColor, theme }) => {
    if ($backgroundColor) {
      const baseColor = theme.colors[$backgroundColor] || $backgroundColor;
      return `linear-gradient(to right, ${lighten(0.15, baseColor)}, ${baseColor})`;
    }
    return 'transparent';
  }};
`;

const ContainerRelative: React.FC<ContainerRelativeProps> = ({
  children,
  ...props
}) => {
  return (
    <StyledContainerRelative {...props}>{children}</StyledContainerRelative>
  );
};

export default ContainerRelative;

