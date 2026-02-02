import { Box } from "@mui/material";
import Joke from "./Joke";
import { IJoke } from "./Joke";

interface ISavedPageProps {
	savedJokes: IJoke[];
	deleteJoke(id: number): void;
}

export default function SavedPage(props: ISavedPageProps) {
	const jokes = props.savedJokes.map((joke) => {
		return <Joke joke={joke} deleteJoke={props.deleteJoke}></Joke>;
	});

	return <Box>{jokes}</Box>;
}
