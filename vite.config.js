import { resolve } from "path";
import { defineConfig } from "vite";
import { fileURLToPath } from "url";

// 2. Define __dirname manually
const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, "..");

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
      },
    },
  },
});
