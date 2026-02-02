import { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Joke from "./Joke";
import { IJoke } from "./Joke";

interface IFrontPageProps {
	jokes?: IJoke[];
	saveJoke?(joke: IJoke): void;
}

export default function FrontPage(props: IFrontPageProps) {
	const [loading, setLoading] = useState<boolean>(false);
	const [joke, setJoke] = useState<IJoke>({
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
					try {
						const response = await fetch(url);

						const json: IJoke = await response.json();

						setJoke({
							id: json.id,
							setup: json.setup,
							punchline: json.punchline,
							type: json.type,
						});
					} catch (error) {
						console.error(error);
					}
					setLoading(false);
				}}
			>
				Get Joke
			</Button>
			<Button
				variant="contained"
				onClick={() => {
					if (props.saveJoke) {
						props.saveJoke(joke);
					}
				}}
			>
				Save joke
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
