import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],

  build: {
    // Code splitting untuk optimasi
    rollupOptions: {
      output: {
        manualChunks: {
          // Pisahkan vendor libraries
          vendor: ["react", "react-dom", "react-router-dom"],
        },
        // Naming convention yang lebih baik
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
      },
    },

    minify: "esbuild",
    cssCodeSplit: true,

    // Target browsers modern
    target: "esnext",

    // Chunk size warning limit
    chunkSizeWarningLimit: 1000,
  },

  // Optimasi dependency pre-bundling
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
  },

  // Server config (untuk development)
  server: {
    port: 3000,
  },
});
