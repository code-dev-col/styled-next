// filepath: /home/camilo/Documentos/Desarrollo/next/prueba/components/atoms/ThemeToggle/ThemeToggle.tsx
'use client';

import styled from 'styled-components';
import { FaSun, FaMoon } from 'react-icons/fa';
import Abbr from '../../SEO/abbr/Abbr';

interface ThemeToggleProps {
  onToggle: () => void;
  isDarkMode: boolean;
}

const ToggleButton = styled.button`
  position: fixed;
  top: 2rem;
  left: 2rem;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.backgroundBase};
  border: 1px solid ${({ theme }) => theme.colors.background};
  transition: background-color 0.3s ease-out;
  width: 2.3rem;
  height: 2.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
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

const ThemeToggle: React.FC<ThemeToggleProps> = ({ onToggle, isDarkMode }) => {
  return (
    <Abbr $title="Cambiar de Tema">
      <ToggleButton onClick={onToggle} aria-label="cambiar de tema">
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </ToggleButton>
    </Abbr>
  );
};

export default ThemeToggle;

