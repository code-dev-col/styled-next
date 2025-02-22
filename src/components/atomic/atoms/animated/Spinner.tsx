import React from 'react';
import styled, { keyframes } from 'styled-components';
import DynamicIcon from '../icon/DynamicIcon';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerIcon = styled(DynamicIcon)<{ $iconColor: string }>`
  animation: ${spin} 1s linear infinite;
  font-size: 2rem;
  color: ${({ theme, $iconColor }) => theme.colors[$iconColor]};
`;

interface SpinnerProps extends React.SVGProps<SVGSVGElement> {
  $iconName?: string; // Nombre del ícono, por defecto "FaSpinner"
  $iconColor?: string; // Color del ícono, por defecto "text"
  $width?: string;
  $height?: string;
}

const Spinner: React.FC<SpinnerProps> = ({
  $iconName = 'FaSpinner',
  $iconColor = 'text',
  $width = '2rem',
  $height = '2rem',
  ...props
}) => {
  return (
    <SpinnerIcon
      $iconColor={$iconColor}
      $iconName={$iconName}
      $width={$width}
      $height={$height}
      {...props}
    />
  );
};

export default Spinner;

