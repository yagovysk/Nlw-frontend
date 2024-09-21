export interface CreateGoalRequest {
	title: string;
	desiredWeeklyFrequency: number;
}

export async function createGoal({
	title,
	desiredWeeklyFrequency,
}: CreateGoalRequest): Promise<void> {
	const serverUrl =
		process.env.REACT_APP_SERVER_URL || "http://0.tcp.ngrok.io:17955";
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
