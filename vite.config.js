import { defineConfig } from 'vite';
import { svelte, vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { version } from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  //base: "/babywordle/wordle",
  plugins: [svelte({
    preprocess: vitePreprocess()
  })],
  base: process.env.NODE_ENV === 'production' ? '/babywordle/' : '/',
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
