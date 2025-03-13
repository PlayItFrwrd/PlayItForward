import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(), 
    react()
  ],
});

/**IMPORTANTE:
 *  Vite utiliza Rollup para el "bundling" de producción, y para el servidor de desarrollo, utiliza "esbuild"
 *
 * Vite utiliza WebSockets para habilitar el desarrollo en caliente (HMR). Cuando haces cambios en tu código,
 * Vite envía actualizaciones al navegador a través de esta conexión WebSocket, lo que permite que la página se
 * actualice automáticamente sin necesidad de recargarla por completo. (Interesando para crear chat-apps)
 *
 * A diferencia del protocolo HTTP tradicional, que es unidireccional (el cliente solicita y el servidor responde),
 * WebSocket establece una conexión bidireccional persistente entre el cliente (el navegador) y el servidor.
 *
 * Esto significa que el servidor puede enviar datos al cliente en cualquier momento, sin que el cliente tenga que
 * solicitarlo explícitamente
 */
