import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router";

import Header from "./components/Header.tsx";
import FrontPage from "./components/FrontPage.tsx";
import SavedPage from "./components/SavedPage.tsx";
import useJokes from "./hooks/useJokes.tsx";

export default function App() {
	const [jokes, saveJoke] = useJokes();
	return (
		<BrowserRouter>
			<Header></Header>
			<Routes>
				<Route
					path="/"
					element={
						<FrontPage
							jokes={jokes}
							saveJoke={saveJoke}
						></FrontPage>
					}
				/>
				<Route
					path="/saved"
					element={<SavedPage jokes={jokes}></SavedPage>}
				/>
			</Routes>
		</BrowserRouter>
	);
}
