import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // If this repo is served as a GitHub Pages project site (username.github.io/repo-name),
  // Vite needs the `base` option set to the repo path so assets are referenced correctly.
  base: '/portfolio-demo-2025-2/',
  plugins: [react()],
})
