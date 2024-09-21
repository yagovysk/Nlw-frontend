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
	const serverUrl = process.env.REACT_APP_SERVER_URL || "http://localhost:3333";
	const response = await fetch(`${serverUrl}/summary`);
	const data = await response.json();

	return data;
}
