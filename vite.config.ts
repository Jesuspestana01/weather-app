import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        // Añadimos las nuevas deprecaciones que reporta Bootstrap
        silenceDeprecations: [
          'legacy-js-api', 
          'import', 
          'if-function', 
          'global-builtin', 
          'color-functions'
        ], 
      },
    },
  },
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})