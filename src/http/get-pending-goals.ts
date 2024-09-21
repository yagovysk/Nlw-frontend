export interface GetPendingGoalsResponse {
	pendingGoals: {
		id: string;
		title: string;
		desiredWeeklyFrequency: number;
		completionCount: number;
	}[];
}

export async function getPendingGoals(): Promise<GetPendingGoalsResponse> {
	const serverUrl = process.env.REACT_APP_SERVER_URL || "http://localhost:3333";
	const response = await fetch(`${serverUrl}/pending-goals`);
	const data = await response.json();

	return data;
}
