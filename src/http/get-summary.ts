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

export async function getSummary(): Promise<GetSummaryResponse> {
	const response = await fetch("https://nlw-backend-sigma.vercel.app/summary");
	const data = await response.json();

	return data;
}
