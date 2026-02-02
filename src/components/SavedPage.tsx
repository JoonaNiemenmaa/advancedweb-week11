import { Box } from "@mui/material";
import Joke from "./Joke";
import { IJoke } from "./Joke";

interface ISavedPageProps {
	jokes: IJoke[];
}

export default function SavedPage(props: ISavedPageProps) {
	const jokes = props.jokes.map((joke) => {
		return (
			<Joke
				id={joke.id}
				setup={joke.setup}
				punchline={joke.punchline}
				type={joke.type}
			></Joke>
		);
	});

	return <Box>{jokes}</Box>;
}
