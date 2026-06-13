import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    // Output compiled files to public/react
    // so Express can serve them
    outDir: "public/react",
    rollupOptions: {
      input: "src/main.jsx",
    },
  },
});