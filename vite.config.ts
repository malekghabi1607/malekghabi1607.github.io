import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuration complète pour ton site
export default defineConfig({
  plugins: [react()],
  base: '/', // très important pour un site sur un domaine racine
  optimizeDeps: {
    exclude: ['lucide-react'], // tu gardes ton exclusion
  },
  build: {
    outDir: 'dist', // dossier par défaut pour le déploiement
  },
})