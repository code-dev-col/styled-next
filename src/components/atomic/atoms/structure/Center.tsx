'use client';

import styled from 'styled-components';

const StyledDiv = styled.div`
  @media screen and (1px <= width < 380px) {
    max-width: 400px;
    margin: 0 auto;
    padding: 0 2cqw;
  }

  @media screen and (379px < width < 1024px) {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 6cqw;
  }

  @media screen and (width > 1023px) {
    max-width: 1500px;
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

