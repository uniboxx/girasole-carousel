import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  base: '/girasole-carousel/',

  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
});
