import Image, { ImageProps } from 'next/image';
import styled, { css } from 'styled-components';

const StyleImage = styled(Image)<{
  $filterDropShadow?: string[];
  $isDarkMode?: boolean;
  $isRounded?: boolean;
  $borderRadius?: string;
}>`
  max-width: 100%;
  height: auto;
  object-fit: cover;
  /* Para que la imagen se recorte/ajuste sin deformarse */
  overflow: hidden;
  position: relative;
  pointer-events: none; /* Deshabilita clic derecho en la imagen */
  user-select: none; /* Evita arrastrar la imagen */

  ${({ $borderRadius }) =>
    $borderRadius &&
    css`
      border-radius: ${$borderRadius};
      aspect-ratio: 1 / 1;
    `}

  ${(props) =>
    props.$isRounded &&
    css`
      border-radius: 50%;
      aspect-ratio: 1 / 1;
    `}
  /*
    Ejemplo de uso:
    
    $filterDropShadow={['-4px 3px 0px rgb(34, 34, 34)']}

    $filterDropShadow={['-4px 3px 0px rgb(34, 34, 34)', '-4px 3px 0px rgb(255, 255, 255)']}
  */
  ${(props) =>
    props.$filterDropShadow?.length === 1 &&
    css`
      filter: drop-shadow(${props.$filterDropShadow[0]});
      transition: filter 0.3s ease-in-out;
    `}

  ${(props) =>
    props.$filterDropShadow?.length === 2 &&
    css`
      filter: drop-shadow(
        ${props.$isDarkMode
          ? props.$filterDropShadow[0]
          : props.$filterDropShadow[1]}
      );
      transition: filter 0.3s ease-in-out;
    `};
`;

interface Props extends ImageProps {
  $filterDropShadow?: string[];
  $filterShadowsModeTheme?: boolean;
  $isDarkMode?: boolean;
  $isRounded?: boolean;
  $borderRadius?: string;
}

const Images: React.FC<Props> = ({
  $filterDropShadow,
  $isDarkMode,
  $isRounded,
  $borderRadius,
  ...rest
}) => {
  return (
    <StyleImage
      title="CEM Nariño"
      width={1000}
      height={1000}
      $borderRadius={$borderRadius}
      {...rest}
      $filterDropShadow={$filterDropShadow}
      $isDarkMode={$isDarkMode}
      $isRounded={$isRounded}
    />
  );
};

export default Images;

