import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/alessandro-kevin-aprilio.portofolio', // for root domain deployment like alessandro-kevin-aprilio.portofolio
})
