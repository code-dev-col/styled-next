import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  external: [
    'react',
    'react-dom',
    'styled-components',
    'react',
    'react-dom',
    'styled-components',
    'next/image',
    'next/link',
    'next/navigation',
    'next',
    'zustand',
  ],
  sourcemap: true,
  clean: true,
  minify: true,
});

