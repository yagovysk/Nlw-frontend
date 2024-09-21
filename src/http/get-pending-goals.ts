export interface GetPendingGoalsResponse {
	pendingGoals: {
		id: string;
		title: string;
		desiredWeeklyFrequency: number;
		completionCount: number;
	}[];
}

export async function getPendingGoals(): Promise<GetPendingGoalsResponse> {
	const serverUrl =
		process.env.REACT_APP_SERVER_URL ||
		"https://d520-2804-14c-65c0-48a8-dd5e-4114-ea63-c826.ngrok-free.app";
	const response = await fetch(`${serverUrl}/pending-goals`);
	const data = await response.json();

	return data;
}
