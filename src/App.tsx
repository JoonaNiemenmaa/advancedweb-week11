import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router";

import Header from "./components/Header.tsx";
import FrontPage from "./components/FrontPage.tsx";
import SavedPage from "./components/SavedPage.tsx";
import { useJokes } from "./hooks/useJokes";

export default function App() {
	const jokes = useJokes();
	return (
		<BrowserRouter>
			<Header></Header>
			<Routes>
				<Route
					path="/"
					element={
						<FrontPage
							savedJokes={jokes.savedJokes}
							saveJoke={jokes.saveJoke}
						></FrontPage>
					}
				/>
				<Route
					path="/saved"
					element={
						<SavedPage
							jokes={jokes.savedJokes}
							deleteJoke={jokes.deleteJoke}
						></SavedPage>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}
