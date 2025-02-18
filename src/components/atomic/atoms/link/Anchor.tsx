import Link from 'next/link';
import styled from 'styled-components';

/**
 * * Estilo general para enlaces
 */
const Anchor = styled(Link)<{
  $color?: string;
  $fontSize?: string;
  $fontWeight?: string;
}>`
  text-decoration: none;
  font-size: ${(props) => props.$fontSize || `clamp(1rem, 1.25vw, 1.4rem)`};
  color: ${(props) => props.theme.colors[props.$color || 'text']};
  font-weight: ${(props) => props.$fontWeight || 'normal'};
  cursor: pointer;
`;

export default Anchor;

