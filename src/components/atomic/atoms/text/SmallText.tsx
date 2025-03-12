import React from 'react';
import styled from 'styled-components';

export interface SmallTextProps {
  children?: React.ReactNode;
  $justify?: boolean;
  $color?: string;
  $weight?: number;
  $margin?: string;
  $padding?: string;
}

const StyledSmallText = styled.p<SmallTextProps>`
  color: ${({ theme, $color }) =>
    $color ? theme.colors[$color] : theme.colors.text};
  font-weight: ${({ $weight }) => $weight ?? 400};
  line-height: 1rem;
  font-size: clamp(0.8rem, 1.1vw, 1rem);
  letter-spacing: -0.01rem;
  margin: ${({ $margin }) => $margin ?? '0.5rem 0'};
  padding: ${({ $padding }) => $padding ?? '0'};
  text-align: ${({ $justify }) => ($justify ? 'justify' : 'left')};
  text-justify: ${({ $justify }) => ($justify ? 'inter-word' : 'initial')};
  z-index: 1;
`;

const SmallText: React.FC<SmallTextProps> = ({ children, ...props }) => {
  return <StyledSmallText {...props}>{children}</StyledSmallText>;
};

export default SmallText;

