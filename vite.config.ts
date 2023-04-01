import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "assets", replacement: "/src/assets" },
      { find: "hooks", replacement: "/src/hooks" },
      { find: "layout", replacement: "/src/layout" },
      { find: "menu-items", replacement: "/src/menu-items" },
      { find: "routes", replacement: "/src/routes" },
      { find: "store", replacement: "/src/store" },
      { find: "themes", replacement: "/src/themes" },
      { find: "ui-component", replacement: "/src/ui-component" },
      { find: "utils", replacement: "/src/utils" },
      { find: "views", replacement: "/src/views" },
    ],
  },
});
