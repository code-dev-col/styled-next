import styled from 'styled-components';

/**
 * * Estilo general de texto pequenio
 */
const SmallText = styled.p<{
  $justify?: boolean;
  $color?: string;
  $weight?: number;
  $margin?: string;
  $padding?: string;
}>`
  color: ${({ theme, $color }) =>
    $color ? theme.colors[$color] : theme.colors.text};
  font-weight: ${(props) => props.$weight ?? 400};
  line-height: 1rem;
  font-size: clamp(0.8rem, 1.1vw, 1rem);
  letter-spacing: -0.01rem;
  margin: ${(props) => props.$margin ?? '0.5rem 0'};
  padding: ${(props) => props.$padding ?? '0'};
  text-align: ${(props) => (props.$justify ? 'justify' : 'left')};
  text-justify: ${(props) => (props.$justify ? 'inter-word' : 'initial')};
  z-index: 1;
`;

export default SmallText;
