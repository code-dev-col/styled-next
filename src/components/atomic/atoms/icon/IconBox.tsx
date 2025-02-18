import React from 'react';
import styled from 'styled-components';

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
  background-color: ${({ $backgroundColor, theme }) =>
    $backgroundColor ? theme.colors[$backgroundColor] : 'transparent'};
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

