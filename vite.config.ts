import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  // Using the provided key as fallback
  const apiKey = env.API_KEY || "AIzaSyBfBv1AcTl7BCwKD6Ifs2BMGmRnE1wfxDo";

  return {
    plugins: [react()],
    define: {
      // This prevents "process is not defined" error in the browser
      'process.env.API_KEY': JSON.stringify(apiKey),
    }
  };
});