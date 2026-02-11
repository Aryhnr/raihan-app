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

    // Minifikasi optimal
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log di production
        drop_debugger: true,
      },
    },

    // CSS code splitting
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
