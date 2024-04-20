import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    // Add a hash to the output filenames for cache busting
    chunkFileNames: "assets/[name]-[hash].js",
    cssCodeSplit: true,
  },
  optimizeDeps: {
    exclude: ["js-big-decimal"],
  },
});
