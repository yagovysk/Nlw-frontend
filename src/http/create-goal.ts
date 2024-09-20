export interface CreateGoalRequest {
	title: string;
	desiredWeeklyFrequency: number;
}

export async function createGoal({
	title,
	desiredWeeklyFrequency,
}: CreateGoalRequest): Promise<void> {
	const response = await fetch("https://nlw-backend-sigma.vercel.app/goals", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			title,
			desiredWeeklyFrequency,
		}),
	});

	if (!response.ok) {
		throw new Error("Error while creating the goal");
	}
}
