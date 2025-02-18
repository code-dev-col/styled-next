import styled from 'styled-components';

const StyledAbbr = styled.abbr`
  text-decoration: none;
`;

interface AbbrProps {
  children: React.ReactNode;
  $title: string;
}

export default function Abbr({ children, $title }: AbbrProps) {
  return <StyledAbbr title={$title}>{children}</StyledAbbr>;
}

