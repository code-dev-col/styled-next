import React from 'react';
import styled, { css } from 'styled-components';

export interface ImagesContainerProps {
  children?: React.ReactNode;
  $onlyIcon?: boolean;
  $maxContentWidth?: boolean;
  $width?: string;
  $aligItems?: string;
  $isRounded?: boolean;
  $height?: string;
}

const StyledImagesContainer = styled.div<ImagesContainerProps>`
  line-height: 1rem;
  border-radius: ${({ $isRounded }) => ($isRounded ? '50%' : '0')};

  /* Determina el ancho en función de las props */
  ${({ $onlyIcon, $maxContentWidth, $width }) => {
    if ($width) {
      return css`
        width: ${$width};
      `;
    } else if ($onlyIcon && $maxContentWidth) {
      return css`
        width: fit-content;
      `;
    } else if ($onlyIcon) {
      return css`
        width: 2rem;
      `;
    } else {
      return css`
        width: 1.2rem;
      `;
    }
  }}

  ${({ $height }) =>
    $height &&
    css`
      height: ${$height};
    `}

  ${({ $aligItems }) =>
    $aligItems &&
    css`
      align-items: ${$aligItems};
    `}
`;

const ImagesContainer: React.FC<ImagesContainerProps> = ({
  children,
  ...props
}) => {
  return <StyledImagesContainer {...props}>{children}</StyledImagesContainer>;
};

export default ImagesContainer;

