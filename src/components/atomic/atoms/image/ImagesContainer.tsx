import styled, { css } from 'styled-components';

/**
 * * Especificacion para iconos de menus
 * @param $onlyIcon - Icon Menu 2rem
 * @param $maxContentWidth && @param $onlyIcon  - Icon Menu fit-content
 * @param $width - Icon Menu width
 * */
const ImagesContainer = styled.div<{
  $onlyIcon?: boolean;
  $maxContentWidth?: boolean;
  $width?: string;
  $aligItems?: string;
  $isRounded?: boolean;
  $height?: string;
}>`
  line-height: 1rem;

  border-radius: ${(props) => (props.$isRounded ? '50%' : '0')};

  ${(props) =>
    props.$onlyIcon
      ? css`
          width: 2rem;
        `
      : css`
          width: 1.2rem;
        `};

  ${(props) =>
    props.$onlyIcon &&
    props.$maxContentWidth &&
    css`
      width: fit-content;
    `}

  ${(props) =>
    props.$width &&
    css`
      width: ${props.$width};
    `}
`;

export default ImagesContainer;

