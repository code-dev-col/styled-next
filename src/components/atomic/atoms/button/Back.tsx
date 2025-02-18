'use client';

import React from 'react';
import Abbr from '../../SEO/abbr/Abbr';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import { AiOutlineAppstore } from 'react-icons/ai';

const StyledBackButton = styled.button`
  cursor: pointer;
  position: fixed;
  top: 2rem;
  left: 5rem;
  color: ${(props) => props.theme.colors.text};
  width: 2.3rem;
  height: 2.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: none;
  background-color: ${(props) => props.theme.colors.backgroundBase};
  border: 1px solid ${({ theme }) => theme.colors.background};
  transition: background-color 0.3s ease-out;
  overflow: hidden;
  z-index: 4;

  svg {
    width: 1rem;
    height: 1rem;
  }

  &:hover {
    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;

export default function Back() {
  const router = useRouter();
  return (
    <Abbr $title="Regresar">
      <StyledBackButton
        onClick={() => router.back()}
        aria-label="regresar atrás">
        <AiOutlineAppstore />
      </StyledBackButton>
    </Abbr>
  );
}

