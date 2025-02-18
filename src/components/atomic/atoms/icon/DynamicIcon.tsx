// DynamicIcon.tsx
import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

interface DynamicIconProps extends React.SVGProps<SVGSVGElement> {
  $iconName: string;
  $width?: string;
  $height?: string;
}

const iconPacks: {
  [key: string]: {
    [key: string]: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  };
} = {
  fa: FaIcons,
  ai: AiIcons,
};

const DynamicIcon: React.FC<DynamicIconProps> = ({
  $iconName,
  $width,
  $height,
  className,
  ...props
}) => {
  const packPrefix = $iconName.slice(0, 2).toLowerCase();
  const iconPack = iconPacks[packPrefix];
  const IconComponent = iconPack ? iconPack[$iconName] : null;

  if (!IconComponent) return null;

  return (
    <IconComponent
      className={className}
      // No pasamos width/height, sino que usamos style
      style={{ width: $width || '1rem', height: $height || '1rem' }}
      {...props}
    />
  );
};

export default DynamicIcon;

