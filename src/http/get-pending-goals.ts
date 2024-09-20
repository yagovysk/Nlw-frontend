export interface GetPendingGoalsResponse {
	pendingGoals: {
		id: string;
		title: string;
		desiredWeeklyFrequency: number;
		completionCount: number;
	}[];
}

export async function getPendingGoals(): Promise<GetPendingGoalsResponse> {
	const response = await fetch(
		"https://nlw-backend-sigma.vercel.app/pending-goals",
	);
	const data = await response.json();

	return data;
}
