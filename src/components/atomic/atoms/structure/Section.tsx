import React from 'react';
import styled from 'styled-components';

interface StyledSectionProps {
  $margin?: string;
  $height?: string;
  $backgroundColor?: string;
  $borderRadius?: string;
  $color?: string;
  $textAlign?: string;
  $padding?: string;
}

const StyledSection = styled.div<StyledSectionProps>`
  position: relative;
  padding: ${(props) => props.$padding || '1rem 0'};
  height: ${(props) => props.$height || 'auto'};
  background-color: ${({ $backgroundColor, theme }) =>
    $backgroundColor ? theme.colors[$backgroundColor] : 'transparent'};
  border-radius: ${(props) => props.$borderRadius || '0'};
  color: ${(props) => props.$color || 'inherit'};
  text-align: ${(props) => props.$textAlign || 'left'};
  margin: ${(props) => props.$margin || '0'};
  z-index: 1;
`;

interface SectionProps extends StyledSectionProps {
  children?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({
  $height,
  $backgroundColor,
  $borderRadius,
  $color,
  $textAlign,
  $padding,
  $margin,
  children,
}) => {
  return (
    <StyledSection
      $height={$height}
      $color={$color}
      $backgroundColor={$backgroundColor}
      $textAlign={$textAlign}
      $padding={$padding}
      $margin={$margin}
      $borderRadius={$borderRadius}>
      {children}
    </StyledSection>
  );
};

export default Section;

