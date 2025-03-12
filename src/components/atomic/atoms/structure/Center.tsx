import styled from 'styled-components';

const StyledDiv = styled.div`
  /* Para pantallas menores a 23.75rem (380px) */
  @media screen and (max-width: 23.75rem) {
    max-width: 24.8rem; /* 396.8px */
    margin: 0 auto;
    padding: 0 2cqw;
  }

  /* Para pantallas entre 23.75rem (380px) y 64rem (1024px) */
  @media screen and (min-width: 23.75rem) and (max-width: 64rem) {
    max-width: 50rem; /* 800px */
    margin: 0 auto;
    padding: 0 6cqw;
  }

  /* Para pantallas mayores a 64rem (1024px) */
  @media screen and (min-width: 64rem) {
    max-width: 93.75rem; /* 1500px */
    margin: 0 auto;
    padding: 0 7cqw;
  }
`;

interface CenterProps {
  children: React.ReactNode;
}

export default function Center({ children }: CenterProps) {
  return <StyledDiv>{children}</StyledDiv>;
}

