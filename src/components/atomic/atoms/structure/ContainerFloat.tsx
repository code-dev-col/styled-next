import styled from 'styled-components';

interface ContainerFloatProps {
  $float?: 'left' | 'right' | 'none';
  $clear?: 'left' | 'right' | 'both' | 'none';
  $width?: string;
  $margin?: string;
  $padding?: string;
}

const ContainerFloat = styled.div<ContainerFloatProps>`
  float: ${({ $float = 'none' }) => $float};
  clear: ${({ $clear = 'none' }) => $clear};
  width: ${({ $width = 'auto' }) => $width};
  margin: ${({ $margin = '0' }) => $margin};
  padding: ${({ $padding = '0' }) => $padding};
`;

export default ContainerFloat;

