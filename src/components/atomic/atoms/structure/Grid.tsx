import styled from 'styled-components';

interface GridProps {
  $maxGridWidth?: string;
  $maxItemWidth?: string;
}

/**
 * Grid dinámico con ancho máximo configurable para el contenedor y para cada elemento.
 */
const Grid = styled.div<GridProps>`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
  justify-content: center;
  max-width: ${({ $maxGridWidth = '1200px' }) => $maxGridWidth};
  margin: 0 auto;

  /* Para pantallas con ancho mayor o igual a 650px, aplica este layout */
  @media screen and (width >= 650px) {
    grid-template-columns: repeat(auto-fit, minmax(min(230px, 80%), 0.9fr));
  }
  z-index: 1;
`;

export default Grid;

