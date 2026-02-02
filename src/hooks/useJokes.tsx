import { useState } from "react";
import { IJoke } from "../components/Joke";

export function useJokes(): [IJoke[], (joke: IJoke) => void] {
	const [jokes, setJokes] = useState<IJoke[]>([]);

	function saveJoke(joke: IJoke) {
		const newJokes = jokes.map((joke) => joke);
		newJokes.push(joke);
		setJokes(newJokes);
		console.log(newJokes);
	}

	return [jokes, saveJoke];
}
