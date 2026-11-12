import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://futbollibre.life',
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'directory',
  },
});
