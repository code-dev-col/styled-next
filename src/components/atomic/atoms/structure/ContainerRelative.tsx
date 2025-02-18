import styled from 'styled-components';

/**
 * * Contenedor de componentes para usarse dentro de SectionContainer, puede hacer
 * * el contenido más arriba o más abajo de la section
 */
const ContainerRelative = styled.div<{
  $bottom?: string;
  $top?: string;
}>`
  position: relative;
  bottom: ${(props) => props.$bottom};
  top: ${(props) => props.$top};
  z-index: 10;
`;

export default ContainerRelative;
