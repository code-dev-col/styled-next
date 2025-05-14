// src/sizes.ts
export interface ButtonSizeDef {
  fontSize: string;
  padding: string;
  borderRadius: string;
}

export const defaultButtonSizes: Record<'s' | 'm' | 'l', ButtonSizeDef> = {
  s: { fontSize: '0.8rem', padding: '0.25rem 1rem', borderRadius: '0.5rem' },
  m: { fontSize: '1rem', padding: '0.5rem 1.5rem', borderRadius: '1rem' },
  l: { fontSize: '1.2rem', padding: '1rem 2rem', borderRadius: '1.5rem' },
};

