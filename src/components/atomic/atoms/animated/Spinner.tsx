import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaSpinner } from 'react-icons/fa';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerIcon = styled(FaSpinner)<{ $iconColor: string }>`
  animation: ${spin} 1s linear infinite;
  font-size: 2rem;
  color: ${({ theme, $iconColor }) => theme.colors[$iconColor] || $iconColor};
`;

interface SpinnerProps extends React.SVGProps<SVGSVGElement> {
  $iconColor?: string; // Color del ícono, puede ser un key del theme o un valor CSS
  $width?: string;
  $height?: string;
}

const Spinner: React.FC<SpinnerProps> = ({
  $iconColor = 'text',
  $width = '2rem',
  $height = '2rem',
  ...props
}) => {
  return (
    <SpinnerIcon
      $iconColor={$iconColor}
      style={{ width: $width, height: $height }}
      {...props}
    />
  );
};

export default Spinner;

