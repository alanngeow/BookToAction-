import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "public/react",
    rollupOptions: {
      input: "src/main.jsx",
      output: {
        // Fixed filenames — no more hash changes
        entryFileNames: "main.js",
        assetFileNames: "main.css"
      }
    }
  }
});