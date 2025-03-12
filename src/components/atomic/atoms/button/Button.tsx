// Button.tsx
'use client';

import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { lighten } from 'polished'; // Importamos lighten (podrías usar darken si prefieres)
import DynamicIcon from '../../atoms/icon/DynamicIcon';
import { ButtonProps, Size } from '../../interfaces/interfaces-styled';

const buttonSizeStyles: {
  [key in Size]: { fontSize: string; padding: string; borderRadius: string };
} = {
  s: { fontSize: '0.8rem', padding: '0.25rem 1rem', borderRadius: '0.5rem' },
  m: { fontSize: '1rem', padding: '0.5rem 1.5rem', borderRadius: '1rem' },
  l: { fontSize: '1.2rem', padding: '1rem 2rem', borderRadius: '1.5rem' },
};

const bounceAnimation = keyframes`
  0% { transform: translateY(0); }
  15% { transform: translateY(-8px); }
  30% { transform: translateY(0); }
  45% { transform: translateY(-5px); }
  60% { transform: translateY(0); }
  75% { transform: translateY(-3px); }
  87% { transform: translateY(0); }
  93% { transform: translateY(-2px); }
  100% { transform: translateY(0); }
`;

export const ButtonStyle = css<ButtonProps>`
  border: ${({ $border, theme }) =>
    $border ? `3px solid ${theme.colors.text}` : 'none'};
  padding: ${({ $padding, $size }) =>
    $padding || buttonSizeStyles[$size].padding};
  border-radius: ${({ $rounded, $size }) =>
    $rounded ? 'inherit' : buttonSizeStyles[$size].borderRadius};
  cursor: pointer;
  text-decoration: none;
  font-weight: 500;
  font-family: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ $size }) => buttonSizeStyles[$size].fontSize};

  ${({ $block }) =>
    $block &&
    css`
      display: block;
      width: 100%;
    `}

  margin: ${({ $margin }) => $margin || '0'};

  /* Usamos el tema para el color de texto */
  color: ${({ $color, theme }) => theme.colors[$color] || $color};

  /* Tomamos el color base del tema o el que haya pasado el usuario */
  ${({ $background, theme }) => {
    const baseColor = theme.colors[$background] || $background;
    // Podemos verificar si baseColor es un color válido
    // Polished puede trabajar con '#FFF', 'rgb(255,255,255)', etc.
    // Generaremos un degradado lineal con un tono más claro a la izquierda y el color base a la derecha
    return css`
      background: linear-gradient(
        to right,
        ${lighten(0.15, baseColor)},
        ${baseColor}
      );
    `;
  }}

  /* Outline */
  ${({ $outline, $background, theme }) =>
    $outline &&
    css`
      background: transparent;
      border: 2px solid ${theme.colors[$background] || $background};
      color: ${theme.colors[$background] || $background};
    `}

  /* Disabled */
  ${({ $disabled, theme }) =>
    $disabled &&
    css`
      background: ${theme.colors.background};
      color: ${theme.colors.textSoft};
      border-color: ${theme.colors.textSoft};
      cursor: not-allowed;
    `}

  /* Animación */
  ${({ $animated }) =>
    $animated &&
    css`
      animation: ${bounceAnimation} 1s linear forwards;
    `}
`;

const IconWrapper = styled.span<{ $position: 'left' | 'right' }>`
  display: inline-flex;
  margin-right: ${({ $position }) => ($position === 'left' ? '0.5rem' : '0')};
  margin-left: ${({ $position }) => ($position === 'right' ? '0.5rem' : '0')};
  vertical-align: middle;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled.button<ButtonProps>`
  ${ButtonStyle}
`;

export default function Button({
  children,
  onClick,
  $ariaLabel,
  $animated,
  $disabled,
  $outline,
  $color,
  $background,
  $size,
  $block,
  $margin,
  $padding,
  $icon,
  $iconPosition = 'left', // Posición por defecto
  $rounded,
  ...rest
}: ButtonProps) {
  const [isAnimated, setIsAnimated] = useState(false);

  const handleClick = () => {
    setIsAnimated(true);
    if (onClick && !$disabled) {
      onClick();
    }
  };

  const handleAnimationEnd = () => {
    setIsAnimated(false);
  };

  return (
    <StyledButton
      $ariaLabel={$ariaLabel}
      aria-label={$ariaLabel}
      onClick={handleClick}
      onAnimationEnd={handleAnimationEnd}
      $animated={$animated && isAnimated}
      $disabled={$disabled}
      $outline={$outline}
      $color={$color}
      $background={$background}
      $size={$size}
      $block={$block}
      $margin={$margin}
      $padding={$padding}
      $rounded={$rounded}
      $iconPosition={$iconPosition}
      {...rest}>
      {$icon && $iconPosition === 'left' && (
        <IconWrapper $position="left">
          <DynamicIcon $iconName={$icon} />
        </IconWrapper>
      )}
      {children}
      {$icon && $iconPosition === 'right' && (
        <IconWrapper $position="right">
          <DynamicIcon $iconName={$icon} />
        </IconWrapper>
      )}
    </StyledButton>
  );
}

