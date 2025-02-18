import React from 'react';
import styled from 'styled-components';

interface StyledSBackgroundProps {
  $height?: string;
  $backgroundColor?: string;
  $borderRadius?: string;
  $color?: string;
  $textAlign?: string;
  $backgroundImage?: string;
  $parallax?: boolean;
  $blur?: string;
  $padding?: string;
}

const StyledBackground = styled.div<StyledSBackgroundProps>`
  position: relative;
  z-index: 0; /* Para que los pseudo-elementos queden por debajo si ponemos z-index: -1 en ellos. */

  /* Opcional: si tu contenido se pasa del contenedor, puedes necesitar overflow: hidden */
  /* overflow: hidden; */

  width: 100%;
  height: ${(props) => props.$height || 'auto'};
  border-radius: ${(props) => props.$borderRadius || '0'};
  background-color: ${(props) => props.$backgroundColor || 'transparent'};
  color: ${(props) => props.$color || 'inherit'};
  text-align: ${(props) => props.$textAlign || 'left'};

  /* Quitamos el filter en el contenedor,
     ya que lo aplicaremos al pseudo-elemento con la imagen. */

  /* El padding puedes manejarlo dentro o fuera, según necesites */
  padding: ${(props) => props.$padding || '0'};

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.colors.textLightTransparent};
    z-index: -1;
  }

  /* Usamos un pseudo-elemento para la imagen de fondo con blur */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    /* La imagen de fondo va aquí */
    background-image: ${(props) =>
      props.$backgroundImage ? `url(${props.$backgroundImage})` : 'none'};
    background-position: top left;
    background-size: cover;
    background-repeat: no-repeat;

    /* Parallax usando background-attachment: */
    background-attachment: ${(props) => (props.$parallax ? 'fixed' : 'scroll')};

    /* Aquí aplicamos el blur */
    filter: ${(props) => (props.$blur ? `blur(${props.$blur})` : 'none')};

    /* Para “colocar” este pseudo-elemento detrás del contenido */
    z-index: -1;
    /* Si tu padre no tiene altura fija, la imagen quedará del alto contenido */
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
      $padding={$padding}
      $blur={$blur}>
      {children}
    </StyledBackground>
  );
};

export default Background;

