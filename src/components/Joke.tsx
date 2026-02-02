import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export interface JokeProps {
	id: number;
	type: string;
	setup: string;
	punchline: string;
}

export default function Joke(props: JokeProps) {
	return (
		<Card key={props.id}>
			<CardContent>
				<Typography>{props.setup}</Typography>
				<Typography>{props.punchline}</Typography>
			</CardContent>
		</Card>
	);
}
