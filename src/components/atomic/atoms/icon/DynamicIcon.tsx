import React from 'react';
import * as FaIcons from 'react-icons/fa';

export interface DynamicIconProps extends React.SVGProps<SVGSVGElement> {
  $iconName: string; // Eliminamos el valor por defecto aquí
  $width?: string;
  $height?: string;
}

const DynamicIcon: React.FC<DynamicIconProps> = ({
  $iconName,
  $width,
  $height,
  className,
  ...props
}) => {
  // Obtenemos el componente del paquete de Font Awesome
  const IconComponent = FaIcons[$iconName as keyof typeof FaIcons];

  if (!IconComponent) {
    console.error(`DynamicIcon: No se encontró el ícono ${$iconName}`);
    return null;
  }

  return (
    <IconComponent
      className={className}
      style={{ width: $width || '1rem', height: $height || '1rem' }}
      {...props}
    />
  );
};

export default DynamicIcon;

