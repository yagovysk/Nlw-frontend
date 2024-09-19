import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import path from "node:path";

// Simular o __dirname para usar com ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"), // Usando o __dirname simulado
		},
	},
	build: {
		rollupOptions: {
			external: ["dayjs/locale/pt-br"],
		},
	},
});
