import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";

const queryClient = new QueryClient();

const rootElement = document.getElementById("root");

if (rootElement) {
	createRoot(rootElement).render(
		<StrictMode>
			<QueryClientProvider client={queryClient}>
				<App />
				<Toaster position="bottom-left" richColors />
			</QueryClientProvider>
		</StrictMode>,
	);
} else {
	console.error("Elemento 'root' não encontrado no DOM.");
}
