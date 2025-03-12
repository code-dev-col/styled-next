import React from 'react';
import styled from 'styled-components';

export interface TextProps {
  children?: React.ReactNode;
  $justify?: boolean;
  $color?: string;
  $textAlign?: string;
  $margin?: string;
  $padding?: string;
}

const StyledText = styled.p<TextProps>`
  line-height: 1.9rem;
  font-weight: 500;
  font-size: clamp(1rem, calc(1vw + 0.3rem), 1.5rem);
  letter-spacing: -0.02rem;
  margin: ${({ $margin }) => $margin ?? '0 0 0.8rem 0'};
  padding: ${({ $padding }) => $padding ?? '0'};
  text-align: ${({ $textAlign }) => $textAlign ?? 'left'};
  text-justify: ${({ $justify }) => ($justify ? 'inter-word' : 'initial')};
  color: ${({ $color }) => $color ?? 'inherit'};
`;

const Text: React.FC<TextProps> = ({ children, ...props }) => {
  return <StyledText {...props}>{children}</StyledText>;
};

export default Text;

