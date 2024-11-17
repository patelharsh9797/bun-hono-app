import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), TanStackRouterVite()],
	resolve: {
		alias: {
			"@": path.resolve(import.meta.dir, "./src"),
			"@server": path.resolve(import.meta.dir, "../server"),
		},
	},
	server: {
		watch: {
			usePolling: true,
		},
		proxy: {
			"/api": {
				target: "http://api:3000",
				changeOrigin: true,
			},
		},
	},
});
