export interface CreateGoalCompletionRequest {
	goalId: string;
}

export async function createGoalCompletion({
	goalId,
}: CreateGoalCompletionRequest): Promise<void> {
	const response = await fetch(
		"https://nlw-backend-sigma.vercel.app/completions",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				goalId,
			}),
		},
	);

	if (!response.ok) {
		throw new Error("Error while creating the goal completion");
	}
}
