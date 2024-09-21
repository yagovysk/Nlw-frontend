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
	const serverUrl =
		process.env.REACT_APP_SERVER_URL ||
		"https://d520-2804-14c-65c0-48a8-dd5e-4114-ea63-c826.ngrok-free.app";
	const response = await fetch(`${serverUrl}/summary`);
	const data = await response.json();

	return data;
}
