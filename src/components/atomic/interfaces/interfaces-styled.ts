export type Size = 's' | 'm' | 'l';
export type FlexDirection = 'row' | 'column';
export type IconsObjType = {
  [key: string]: React.ReactNode;
};

export type IconPosition = 'left' | 'right' | undefined;

export interface ButtonProps {
  onClick?: (e?: React.FormEvent<Element>) => void | Promise<void>;
  /** Propiedad obligatoria para el aria-label */
  $ariaLabel: string;
  /** Color del texto. Se usará para acceder a theme.colors. */
  $color: string;
  /** Color de fondo. Se usará para acceder a theme.colors. */
  $background: string;
  /** Tamaño del botón */
  $size: Size;
  /** Tipo del botón */
  type: 'button' | 'submit' | 'reset';
  /** Contenido del botón */
  children: React.ReactNode;
  // Opcionales:
  $outline?: boolean;
  $block?: boolean;
  $margin?: string;
  $padding?: string;
  $icon?: string;
  $iconPosition?: IconPosition;
  $rounded?: boolean;
  $disabled?: boolean;
  $animated?: boolean;
  $border?: boolean;
}

interface SectionVideoProps {
  $backVideoAndImagesAbove?: string[];
  $childrenAbove?: boolean;
  children: React.ReactNode;
}

export interface SectionProps extends SectionVideoProps {
  $marginTop?: Size;
  $background?: string;
  $shadowBottom?: boolean;
  $shadowTop?: boolean;
  $rounded?: boolean;
  $noPadding?: boolean;
  $maxHeight?: boolean;
  $isCenter?: boolean;
  $backgroundColor?: string;
  $backgroundPosition?: string;
  $zIndex?: number;
  $overflowHidden?: boolean;
  $minHeight?: string;
  $isAnimated?: boolean;
}

export interface VideoSectionPlayerProps extends SectionVideoProps {
  $none?: '';
}

// Define la estructura del botón en cada item
export interface ButtonData {
  icon: string;
  iconPosition: IconPosition;
  enable: boolean;
  text: string;
  link: string;
  ariaLabel: string;
}

// Define la estructura de cada imagen del carrusel
export interface CarouselImageData {
  src: string;
  alt: string;
  text: string;
  smalltext: string;
  button: ButtonData;
  imagePriority?: boolean;
  horarioSemana: string;
  horarioFinSemana: string;
}

// Y si lo deseas, el tipo del arreglo completo:

export type CarouselImagesData = CarouselImageData[];

