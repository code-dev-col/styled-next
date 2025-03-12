import React from 'react';
import styled, { css } from 'styled-components';
import { FlexDirection } from '../../interfaces/interfaces-styled';
import { lighten } from 'polished';

export interface ContainerFlexProps {
  children?: React.ReactNode;
  $direction?: FlexDirection;
  // Para cambiar la dirección en un breakpoint, se define como un array: [nueva dirección, breakpoint máximo]
  $directionFlexQuery?: [FlexDirection, string];
  $filterDropShadow?: string[];
  $isDarkMode?: boolean;
  $aligItems?: 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline';
  $justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  $margin?: string;
  $block?: boolean;
  $width?: string;
  $padding?: string;
  $gap?: string;
  $backgroundColor?: string;
  $height?: string;
  $borderRadius?: string;
  $borderColor?: string;
  // Propiedades para los hijos
  $flexGrow?: number;
  $flexShrink?: number;
  $flexBasis?: string;
}

const StyledContainerFlex = styled.div<ContainerFlexProps>`
  display: flex;
  gap: ${({ $gap }) => $gap || '0.5rem'};
  flex-direction: ${({ $direction }) => $direction ?? 'row'};
  justify-content: ${({ $justifyContent }) => $justifyContent ?? 'center'};
  margin: ${({ $margin }) => $margin || '0'};
  align-items: ${({ $aligItems }) => $aligItems ?? 'center'};
  width: ${({ $width }) => $width || '100%'};
  padding: ${({ $padding }) => $padding || '0'};
  height: ${({ $height }) => $height || 'auto'};
  border-radius: ${({ $borderRadius }) => $borderRadius || '0'};
  border: 2px solid
    ${({ $borderColor, theme }) =>
      $borderColor ? theme.colors[$borderColor] : 'transparent'};

  background: ${({ $backgroundColor, theme }) => {
    if ($backgroundColor) {
      const baseColor = theme.colors[$backgroundColor] || $backgroundColor;
      return `linear-gradient(to right, ${lighten(0.15, baseColor)}, ${baseColor})`;
    }
    return 'transparent';
  }};

  ${({ $filterDropShadow, $isDarkMode }) =>
    $filterDropShadow?.length === 1 &&
    css`
      filter: drop-shadow(${$filterDropShadow[0]});
      transition: filter 0.3s ease-in-out;
    `}

  ${({ $filterDropShadow, $isDarkMode }) =>
    $filterDropShadow?.length === 2 &&
    css`
      filter: drop-shadow(
        ${$isDarkMode ? $filterDropShadow[0] : $filterDropShadow[1]}
      );
      transition: filter 0.3s ease-in-out;
    `}

  ${({ $directionFlexQuery }) =>
    $directionFlexQuery &&
    css`
      @media screen and (max-width: ${$directionFlexQuery[1]}) {
        flex-direction: ${$directionFlexQuery[0]};
      }
    `}

  /* Aplica las propiedades de flex a cada hijo directo */
  & > * {
    flex-grow: ${({ $flexGrow }) => $flexGrow ?? 0};
    flex-shrink: ${({ $flexShrink }) => $flexShrink ?? 1};
    flex-basis: ${({ $flexBasis }) => $flexBasis ?? 'auto'};
  }
`;

const ContainerFlex: React.FC<ContainerFlexProps> = ({
  children,
  ...props
}) => {
  return <StyledContainerFlex {...props}>{children}</StyledContainerFlex>;
};

export default ContainerFlex;

