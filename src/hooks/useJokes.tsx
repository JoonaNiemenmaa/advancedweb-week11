import { useState } from "react";
import { IJoke } from "../components/Joke";

interface UseJokes {
	savedJokes: IJoke[];
	saveJoke(joke: IJoke): void;
	deleteJoke(id: number): void;
}

export function useJokes(): UseJokes {
	const [jokes, setJokes] = useState<IJoke[]>([]);

	function saveJoke(joke: IJoke) {
		const newJokes = jokes.map((joke) => joke);
		newJokes.push(joke);
		setJokes(newJokes);
		console.log(newJokes);
	}

	function deleteJoke(id: number) {
		const newJokes = jokes.filter((joke) => joke.id !== id);
		setJokes(newJokes);
		console.log(newJokes);
	}

	return {
		savedJokes: jokes,
		saveJoke: saveJoke,
		deleteJoke: deleteJoke,
	};
}
