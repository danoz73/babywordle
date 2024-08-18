import { defineConfig } from 'vite';
import { svelte, vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { version } from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte({
    preprocess: vitePreprocess()
  })],
  // Below is for use when hosting on danoz73.github.io/babywordle
  // base: process.env.NODE_ENV === 'production' ? '/babywordle/' : '/',
  // Below is for use when guessbabysname.com or local
  base: '/',
  build: {
    rollupOptions: {
      output: {
        assetFileNames: `[name]-v${version}.[ext]`,
        entryFileNames: `[name]-v${version}.js`,
        dir: "./dist",
      }
    }
  }
});
