import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

export interface AnchorProps
  extends React.ComponentPropsWithoutRef<typeof Link> {
  children?: React.ReactNode;
  $color?: string;
  $fontSize?: string;
  $fontWeight?: string;
}

const StyledAnchor = styled(Link)<AnchorProps>`
  text-decoration: none;
  font-size: ${({ $fontSize }) => $fontSize || 'clamp(1rem, 1.25vw, 1.4rem)'};
  color: ${({ $color, theme }) => theme.colors[$color || 'inherit']};
  font-weight: ${({ $fontWeight }) => $fontWeight || 'normal'};
  cursor: pointer;
`;

const Anchor: React.FC<AnchorProps> = ({ children, ...props }) => {
  return <StyledAnchor {...props}>{children}</StyledAnchor>;
};

export default Anchor;

