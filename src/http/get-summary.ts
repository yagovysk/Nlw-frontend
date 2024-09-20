export interface GetSummaryResponse {
	summary: {
		completed: number;
		total: number;
		goalsPerDay: Record<
			string,
			{
				id: string;
				title: string;
				createdAt: string;
			}[]
		>;
	};
}

export async function getSummary(): Promise<GetSummaryResponse | null> {
	try {
		const response = await fetch(
			"https://nlw-backend-sigma.vercel.app/summary",
		);

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = await response.json();

		// Verifique se a estrutura está correta
		if (
			data &&
			data.summary &&
			typeof data.summary.completed === "number" &&
			typeof data.summary.total === "number" &&
			typeof data.summary.goalsPerDay === "object"
		) {
			return data;
		} else {
			throw new Error("Invalid response structure");
		}
	} catch (error) {
		console.error("Error fetching summary:", error);
		return null; // Retorne null em caso de erro
	}
}
