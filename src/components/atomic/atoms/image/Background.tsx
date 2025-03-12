import styled from 'styled-components';
import { lighten } from 'polished';

export interface StyledSBackgroundProps {
  $height?: string;
  $backgroundColor?: string;
  $borderRadius?: string;
  $color?: string;
  $textAlign?: string;
  $backgroundImage?: string;
  $parallax?: boolean;
  $blur?: string;
  $padding?: string;
  // Propiedades para controlar la imagen de fondo con opciones fijas
  $backgroundSize?: 'contain' | 'cover' | 'auto';
  $backgroundPosition?:
    | 'center'
    | 'top left'
    | 'top right'
    | 'bottom left'
    | 'bottom right'
    | string;
}

const StyledBackground = styled.div<StyledSBackgroundProps>`
  position: relative;
  z-index: 0;
  width: 100%;
  height: ${({ $height }) => $height || 'auto'};
  border-radius: ${({ $borderRadius }) => $borderRadius || '0'};
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor || 'transparent'};
  color: ${({ $color }) => $color || 'inherit'};
  text-align: ${({ $textAlign }) => $textAlign || 'left'};
  padding: ${({ $padding }) => $padding || '0'};

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.textLightTransparent};
    z-index: -1;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: ${({ $backgroundImage }) =>
      $backgroundImage ? `url(${$backgroundImage})` : 'none'};
    background-position: ${({ $backgroundPosition }) =>
      $backgroundPosition || 'top left'};
    background-size: ${({ $backgroundSize }) => $backgroundSize || 'contain'};
    background-repeat: no-repeat;
    background-attachment: ${({ $parallax }) =>
      $parallax ? 'fixed' : 'scroll'};
    filter: ${({ $blur }) => ($blur ? `blur(${$blur})` : 'none')};
    z-index: -1;
  }
`;

interface BackgroundProps extends StyledSBackgroundProps {
  children?: React.ReactNode;
}

const Background: React.FC<BackgroundProps> = ({
  $height,
  $backgroundColor,
  $borderRadius,
  $color,
  $textAlign,
  $backgroundImage,
  $parallax,
  $blur,
  $padding,
  $backgroundSize,
  $backgroundPosition,
  children,
}) => {
  return (
    <StyledBackground
      $height={$height}
      $backgroundColor={$backgroundColor}
      $borderRadius={$borderRadius}
      $color={$color}
      $textAlign={$textAlign}
      $backgroundImage={$backgroundImage}
      $parallax={$parallax}
      $blur={$blur}
      $padding={$padding}
      $backgroundSize={$backgroundSize}
      $backgroundPosition={$backgroundPosition}>
      {children}
    </StyledBackground>
  );
};

export default Background;

