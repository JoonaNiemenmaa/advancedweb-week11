import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router";

import Header from "./components/Header.tsx";
import FrontPage from "./components/FrontPage.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Header></Header>
							<FrontPage></FrontPage>
						</>
					}
				/>
				<Route path="/saved" element={<App></App>} />
			</Routes>
		</BrowserRouter>
	</StrictMode>,
);
