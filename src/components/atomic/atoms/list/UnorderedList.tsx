import React from 'react';
import styled from 'styled-components';

export interface UnorderedListProps {
  children?: React.ReactNode;
  $margin?: string;
  $marker?: string;
}

const StyledUnorderedList = styled.ul<UnorderedListProps>`
  margin: ${({ $margin }) => $margin || '1rem 0 0 0'};

  li {
    padding-left: 1rem;
    margin-left: 1rem;
  }

  li::marker {
    content: ${({ $marker }) => ($marker ? `'${$marker}'` : 'none')};
  }
`;

const UnorderedList: React.FC<UnorderedListProps> = ({
  children,
  ...props
}) => {
  return <StyledUnorderedList {...props}>{children}</StyledUnorderedList>;
};

export default UnorderedList;

