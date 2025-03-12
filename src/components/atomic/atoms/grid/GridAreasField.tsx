import React from 'react';
import styled from 'styled-components';

export interface GridAreasFieldProps {
  $area: string;
  $width?: string;
  $height?: string;
  $fontSize?: string;
  $color?: string;
  $backgroundColor?: string;
  $padding?: string;
  $margin?: string;
  $borderColor?: string;
  $borderRadius?: string;
  $textAlign?: string;
}

const StyledGridAreasField = styled.div<GridAreasFieldProps>`
  width: ${({ $width }) => $width || '100%'};
  height: ${({ $height }) => $height || '100%'};
  grid-area: ${({ $area }) => $area};
  font-size: ${({ $fontSize }) => $fontSize || '1rem'};
  color: ${({ $color, theme }) => ($color ? theme.colors[$color] : 'inherit')};
  background-color: ${({ $backgroundColor, theme }) =>
    $backgroundColor ? theme.colors[$backgroundColor] : 'transparent'};
  padding: ${({ $padding }) => $padding || '0'};
  margin: ${({ $margin }) => $margin || '0'};
  border: 2px solid
    ${({ $borderColor, theme }) =>
      $borderColor ? theme.colors[$borderColor] : 'transparent'};
  border-radius: ${({ $borderRadius }) => $borderRadius || '0'};
  text-align: ${({ $textAlign }) => $textAlign || 'left'};
`;

interface GridAreasFieldComponentProps extends GridAreasFieldProps {
  children?: React.ReactNode;
}

const GridAreasField: React.FC<GridAreasFieldComponentProps> = ({
  children,
  $area,
  $width,
  $height,
  $fontSize,
  $color,
  $backgroundColor,
  $padding,
  $margin,
  $borderColor,
  $borderRadius,
  $textAlign,
}) => {
  return (
    <StyledGridAreasField
      $area={$area}
      $width={$width}
      $height={$height}
      $fontSize={$fontSize}
      $color={$color}
      $backgroundColor={$backgroundColor}
      $padding={$padding}
      $margin={$margin}
      $borderColor={$borderColor}
      $borderRadius={$borderRadius}
      $textAlign={$textAlign}>
      {children}
    </StyledGridAreasField>
  );
};

export default GridAreasField;

