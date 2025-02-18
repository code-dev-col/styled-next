import styled from 'styled-components';

/**
 * * Estilo general para listas desordenadas
 */
const UnorderedList = styled.ul<{ $margin?: string; $marker?: string }>`
  margin: ${(props) => (props.$margin ? props.$margin : '1rem 0 0 0')};

  li {
    padding-left: 1rem;
    margin-left: 1rem;
  }

  li::marker {
    content: ${(props) => (props.$marker ? `'${props.$marker}'` : 'none')};
  }
`;

export default UnorderedList;
