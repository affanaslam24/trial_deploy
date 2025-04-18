import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
 server: {
    host: '0.0.0.0',  // Allows access from your public IP
    port: 5175,       // Set the port
  }

})
