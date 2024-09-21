export interface CreateGoalCompletionRequest {
	goalId: string;
}

export async function createGoalCompletion({
	goalId,
}: CreateGoalCompletionRequest): Promise<void> {
	const serverUrl =
		process.env.REACT_APP_SERVER_URL || "http://0.tcp.ngrok.io:17955";
	const response = await fetch(`${serverUrl}/completions`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			goalId,
		}),
	});

	if (!response.ok) {
		throw new Error("Error while creating the goal completion");
	}
}
