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
  justify-content: center; /* Centra el grupo de columnas en el contenedor */
  align-items: start; /* Alinea en la parte superior en el eje y */
  max-width: ${({ $maxGridWidth = '1200px' }) => $maxGridWidth};

  /* Para pantallas con ancho mayor o igual a 672px, aplica este layout */
  @media screen and (width >= 42rem) {
    grid-template-columns: repeat(auto-fit, minmax(min(230px, 80%), 0.9fr));
  }
  z-index: 1;
`;

export default Grid;

