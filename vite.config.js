import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: "3000",
  },
  plugins: [react(), eslint()],
  optimizeDeps: {
    exclude: ["js-big-decimal"],
  },
});
