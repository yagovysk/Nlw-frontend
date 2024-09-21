export interface CreateGoalRequest {
	title: string;
	desiredWeeklyFrequency: number;
}

export async function createGoal({
	title,
	desiredWeeklyFrequency,
}: CreateGoalRequest): Promise<void> {
	const serverUrl =
		process.env.REACT_APP_SERVER_URL ||
		"https://d520-2804-14c-65c0-48a8-dd5e-4114-ea63-c826.ngrok-free.app";
	const response = await fetch(`${serverUrl}/goals`, {
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
