import { URL, fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: "./src/test/setup.ts",
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@components": fileURLToPath(new URL("./src/components", import.meta.url)),
      "@routes": fileURLToPath(new URL("./src/routes", import.meta.url)),
      "@hooks": fileURLToPath(new URL("./src/hooks", import.meta.url)),
      "@utils": fileURLToPath(new URL("./src/utils", import.meta.url)),
      "@types": fileURLToPath(new URL("./src/types", import.meta.url)),
      "@services": fileURLToPath(new URL("./src/services", import.meta.url)),
      "@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
      "@packages": fileURLToPath(new URL("../../packages", import.meta.url)),
      "@store": fileURLToPath(new URL("./src/store/rootStore.ts", import.meta.url)),
    },
  },
});