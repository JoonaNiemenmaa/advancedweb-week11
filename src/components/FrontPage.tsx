import { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Joke from "./Joke";
import { JokeProps } from "./Joke";

interface IResponse {
	id: number;
	setup: string;
	punchline: string;
	type: string;
}

export default function FrontPage() {
	const [loading, setLoading] = useState<boolean>(false);
	const [joke, setJoke] = useState<JokeProps>({
		id: 0,
		setup: "no joke",
		punchline: "very sad :(",
		type: "there's no type",
	});

	return (
		<Box>
			<Typography variant="h1">Welcome to Joke Generator!</Typography>
			<Button
				variant="contained"
				onClick={async () => {
					const url =
						"https://official-joke-api.appspot.com/random_joke";
					setLoading(true);
					await fetch(url)
						.then((response) => {
							return response.json();
						})
						.then((json: IResponse) => {
							setJoke({
								id: json.id,
								setup: json.setup,
								punchline: json.punchline,
								type: json.type,
							});
						});

					setLoading(false);
				}}
			>
				Get Joke
			</Button>
			{loading ? (
				<Typography variant="caption">Loading a joke...</Typography>
			) : (
				<Joke
					id={joke.id}
					setup={joke.setup}
					punchline={joke.punchline}
					type={joke.type}
				></Joke>
			)}
		</Box>
	);
}
