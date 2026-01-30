import { useEffect } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function FrontPage() {
	useEffect(() => {});

	return (
		<Box>
			<Typography variant="h1">Welcome to Joke Generator!</Typography>
			<Card
				variant="outlined"
				sx={{
					width: "200px",
				}}
			>
				<CardContent>very funny joke</CardContent>
			</Card>
			<Button variant="contained">Get joke</Button>
		</Box>
	);
}
