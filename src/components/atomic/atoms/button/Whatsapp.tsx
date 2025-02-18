import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import styled from 'styled-components';
import Abbr from '../../SEO/abbr/Abbr';
import { Route } from 'next';
import Anchor from '../link/Anchor';

const StyledWhatsapp = styled(Anchor)`
  position: fixed;
  bottom: 1.5rem;
  right: 2rem;
  z-index: 98;
  background-color: #25d366; /* WhatsApp green */
  border: 4px solid #fff;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-decoration: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s;

  &:hover {
    background-color: #128c7e; /* Darker WhatsApp green */

    svg {
      width: 1.8rem;
      height: 1.8rem;
    }
  }
`;

interface WhatsappProps {
  $title?: string;
  $href?: string;
  $ariaLabel?: string;
}

/**
 * @abstract Componente Botón de WhatsApp
 * @description Botón de WhatsApp para redirigir a un enlace de WhatsApp
 * @example <Whatsapp $title="WhatsApp" $href="https://wa.me/573002222222" $ariaLabel="Botón de WhatsApp" />
 * @param $title: string
 * @param $href: string
 * @param $ariaLabel: string
 * @returns Botón de WhatsApp
 */
const Whatsapp = ({
  $title = 'WhatsApp',
  $href = 'https://wa.me/573002222222',
  $ariaLabel = 'Botón de WhatsApp',
}: WhatsappProps) => {
  return (
    <Abbr $title={$title}>
      <StyledWhatsapp
        title={$title}
        href={$href as Route}
        target="_blank"
        aria-label={$ariaLabel}>
        <FaWhatsapp size="1.5rem" />
      </StyledWhatsapp>
    </Abbr>
  );
};

export default Whatsapp;

