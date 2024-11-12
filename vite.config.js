import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// plugin to compress
import viteCompression from "vite-plugin-compression";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      algorithm: "brotliCompress",
      threshold: 10240,
    }),
  ],
});
