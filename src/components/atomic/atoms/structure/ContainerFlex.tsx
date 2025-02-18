import styled, { css } from 'styled-components';
import { FlexDirection } from '../../interfaces/interfaces-styled';

/**
 * * Contenedor flex horizontal para menus
 * @param $isAround - Distribuir contenido alrededor del contenedor
 * @param $direction - Direccion del contenedor
 * */
const ContainerFlex = styled.div<{
  $direction?: FlexDirection;
  $directionFlexQuery?: string[];
  $filterDropShadow?: string[];
  $isDarkMode?: boolean;
  $aligItems?: string;
  $justifyContent?: string;
  $margin?: string;
  $block?: boolean;
  $width?: string;
  $padding?: string;
  $gap?: string;
}>`
  display: flex;
  gap: ${(props) => (props.$gap ? props.$gap : '0.5rem')};
  flex-direction: ${(props) => props.$direction ?? 'row'};
  justify-content: ${(props) => props.$justifyContent ?? 'center'};
  margin: ${(props) => (props.$margin ? props.$margin : '0')};
  align-items: ${(props) => (props.$aligItems ? props.$aligItems : `center`)};
  width: ${(props) => (props.$width ? props.$width : '100%')};
  padding: ${(props) => (props.$padding ? props.$padding : '0')};

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

  ${(props) =>
    props.$directionFlexQuery &&
    css`
      @media screen and (max-width: ${props.$directionFlexQuery[1]}) {
        flex-direction: ${props.$directionFlexQuery[0]};
      }
    `}
`;

export default ContainerFlex;
