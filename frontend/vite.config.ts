import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dns from "dns";
dns.setDefaultResultOrder("ipv4first");
import istanbul from "vite-plugin-istanbul";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
  ],
  server: {
    host: true,
    port: 3001,
    proxy: {
      "/api": "http://localhost:3000",
      "/score": "http://localhost:3000",
      "/high": "http://localhost:3000",
      "/medium": "http://localhost:3000",
      "/low": "http://localhost:3000",
      "/tips": "http://localhost:3000",
      "/users": "http://localhost:3000",
    },
  },
});
