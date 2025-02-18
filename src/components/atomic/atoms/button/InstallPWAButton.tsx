import React, { useState, useEffect } from 'react';
import Button from './Button';
import styled from 'styled-components';

const StyledFloatingButton = styled.div`
  position: fixed;
  bottom: 1.5rem;
  left: 2rem;
  z-index: 98;
`;

const InstallPWAButton: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<Event | null>(null);
  const [showButton, setShowButton] = useState(false);

  // Función que detecta si la app ya está instalada
  const isAppInstalled = () =>
    window.matchMedia('(display-mode: standalone)').matches ||
    /* eslint-disable-next-line */
    (window.navigator as any).standalone === true;

  useEffect(() => {
    // Si la app ya está instalada, no mostramos el botón
    if (isAppInstalled()) {
      setShowButton(false);
      return;
    }

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowButton(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    // Muestra el prompt de instalación
    // @ts-expect-error prompt no está en el tipo Event
    deferredPrompt.prompt();
    // Espera la respuesta del usuario
    // @ts-expect-error userChoice no está en el tipo Event
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      console.log('El usuario aceptó la instalación.');
    } else {
      console.log('El usuario rechazó la instalación.');
    }
    setDeferredPrompt(null);
    setShowButton(false);
  };

  if (!showButton) return null;

  return (
    <StyledFloatingButton>
      <Button
        type="button"
        $ariaLabel="Ingresar al sistema"
        $color="text"
        $background="alert"
        $icon="FaDownload"
        $iconPosition="left"
        $block={true}
        $size="m"
        $border={true}
        $animated={true}
        onClick={handleInstallClick}>
        Instalar App
      </Button>
    </StyledFloatingButton>
  );
};

export default InstallPWAButton;

