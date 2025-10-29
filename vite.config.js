import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss(), sentryVitePlugin({
    org: "divyansh-rastogi",
    project: "javascript-react"
  })],

  server: {
    watch: {
      usePolling: true,
      interval: 100,
    },
    // ADD THIS SECTION
    fs: {
      // Be less strict about file system checks
      strict: false,
    }
  },

  build: {
    sourcemap: true
  }
})