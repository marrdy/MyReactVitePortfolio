import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import meDp from '@assets/meDp.jpg'; 
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/MyReactVitePortfolio/"
})
