import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue()],
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      '@icons': path.resolve(__dirname, './src/assets/icons'),
      '@components': path.resolve(__dirname, './src/components'),
      '@subpages': path.resolve(__dirname, './src/subpages'),
      '@auth': path.resolve(__dirname, './src/auth'),
      '@admin': path.resolve(__dirname, './src/admin'),
      '@admin-blog': path.resolve(__dirname, './src/admin/blog'),
      '@admin-gallery': path.resolve(__dirname, './src/admin/gallery'),
      '@admin-settings': path.resolve(__dirname, './src/admin/settings'),
    },
  },
});
