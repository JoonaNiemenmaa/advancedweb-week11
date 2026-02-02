import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

export interface IJoke {
	id: number;
	type: string;
	setup: string;
	punchline: string;
}

interface Props {
	joke: IJoke;
	deleteJoke(id: number): void;
}

export default function Joke(props: Props) {
	return (
		<Card key={props.joke.id}>
			<CardContent>
				<Typography>{props.joke.setup}</Typography>
				<Typography>{props.joke.punchline}</Typography>
				<Button
					variant="text"
					onClick={() => {
						props.deleteJoke(props.joke.id);
					}}
				>
					Delete
				</Button>
			</CardContent>
		</Card>
	);
}
