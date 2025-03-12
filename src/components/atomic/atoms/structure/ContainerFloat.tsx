import React from 'react';
import styled from 'styled-components';

export interface ContainerFloatProps {
  children?: React.ReactNode;
  $float?: 'left' | 'right' | 'none';
  $clear?: 'left' | 'right' | 'both' | 'none';
  $width?: string;
  $margin?: string;
  $padding?: string;
}

const StyledContainerFloat = styled.div<ContainerFloatProps>`
  float: ${({ $float }) => $float || 'none'};
  clear: ${({ $clear }) => $clear || 'none'};
  width: ${({ $width }) => $width || 'auto'};
  margin: ${({ $margin }) => $margin || '0'};
  padding: ${({ $padding }) => $padding || '0'};
`;

const ContainerFloat: React.FC<ContainerFloatProps> = ({
  children,
  ...props
}) => {
  return <StyledContainerFloat {...props}>{children}</StyledContainerFloat>;
};

export default ContainerFloat;

