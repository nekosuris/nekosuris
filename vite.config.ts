import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import sass from "vite-plugin-sass";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    sass(),
  ],
});
