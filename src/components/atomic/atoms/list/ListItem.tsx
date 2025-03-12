import React from 'react';
import styled from 'styled-components';

export interface ListItemProps {
  children?: React.ReactNode;
}

const StyledListItem = styled.li<ListItemProps>`
  line-height: 1.8rem;
  letter-spacing: -0.02rem;
  margin: 2rem 0;
  padding-left: 0.5rem;
`;

const ListItem: React.FC<ListItemProps> = ({ children, ...props }) => {
  return <StyledListItem {...props}>{children}</StyledListItem>;
};

export default ListItem;

