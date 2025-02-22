// Note: Exporting all components from the index.ts file is a good practice to keep the codebase clean and organized.
/**
 * @packageDocumentation
 * @module index
 * @preferred
 */
/* animated */
export { default as Marquee } from './components/atomic/atoms/animated/Marquee';

/* button */
export { default as Back } from './components/atomic/atoms/button/Back';
export { default as Button } from './components/atomic/atoms/button/Button';
export { default as InstallPWAButton } from './components/atomic/atoms/button/InstallPWAButton';
export { default as ThemeToggle } from './components/atomic/atoms/button/ThemeToggle';
export { default as Whatsapp } from './components/atomic/atoms/button/Whatsapp';

/* form */
export { default as CheckBox } from './components/atomic/atoms/form/CheckBox';
export { default as Dropdown } from './components/atomic/atoms/form/Dropdown';
export { default as Input } from './components/atomic/atoms/form/Input';
export { default as RadioButton } from './components/atomic/atoms/form/RadioButton';
export { default as TextBox } from './components/atomic/atoms/form/TextBox';

/* icon */
export { default as DynamicIcon } from './components/atomic/atoms/icon/DynamicIcon';
export { default as IconBox } from './components/atomic/atoms/icon/IconBox';

/* iframe */
export { default as Iframe } from './components/atomic/atoms/iframe/Iframe';

/* image */
export { default as Background } from './components/atomic/atoms/image/Background';
export { default as Carousel } from './components/atomic/atoms/image/Carousel';
export { default as Images } from './components/atomic/atoms/image/Images';
export { default as ImagesContainer } from './components/atomic/atoms/image/ImagesContainer';

/* link */
export { default as Anchor } from './components/atomic/atoms/link/Anchor';

/* list */
export { default as ListItem } from './components/atomic/atoms/list/ListItem';
export { default as UnorderedList } from './components/atomic/atoms/list/UnorderedList';

/* structure */
export { default as Center } from './components/atomic/atoms/structure/Center';
export { default as ContainerFlex } from './components/atomic/atoms/structure/ContainerFlex';
export { default as ContainerRelative } from './components/atomic/atoms/structure/ContainerRelative';
export { default as ContainerAbsolute } from './components/atomic/atoms/structure/ContainerAbsolute';
export { default as Grid } from './components/atomic/atoms/structure/Grid';
export { default as Container } from './components/atomic/atoms/structure/Container';
export { default as ThreeColumns } from './components/atomic/atoms/structure/ThreeColumns';
export { default as TwoColumns } from './components/atomic/atoms/structure/TwoColumns';

/* text */
export { default as SmallText } from './components/atomic/atoms/text/SmallText';
export { default as Text } from './components/atomic/atoms/text/Text';
export { default as Title } from './components/atomic/atoms/text/Title';

/* SEO */
export { default as Abbr } from './components/atomic/SEO/abbr/Abbr';

/* hooks */
export { default as useScroll } from './hooks/useScroll';
export { default as useWidth } from './hooks/useWidth';

/* performance */
export { default as MemoWrapper } from './components/atomic/atoms/performance/MemoWrapper';
export { default as LazyLoad } from './components/atomic/molecules/perfomance/LazyLoad';