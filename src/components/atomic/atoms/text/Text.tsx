import styled from 'styled-components';

const Text = styled.p<{
  $justify?: boolean;
  $color?: string;
  $textAlign?: string;
  $margin?: string;
  $padding?: string;
}>`
  line-height: 1.9rem;
  font-weight: 500;
  font-size: clamp(1rem, calc(1vw + 0.3rem), 1.5rem);
  letter-spacing: -0.02rem;
  margin: ${(props) => props.$margin ?? '0 0 0.8rem 0'};
  padding: ${(props) => props.$padding ?? '0'};
  text-align: ${(props) => props.$textAlign ?? 'left'};
  text-justify: ${(props) => (props.$justify ? 'inter-word' : 'initial')};
  color: ${(props) => props.$color};
`;

export default Text;

