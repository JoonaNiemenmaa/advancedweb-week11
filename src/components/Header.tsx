import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { Link } from "react-router";

export default function Header() {
	return (
		<AppBar>
			<Toolbar>
				<Typography sx={{ textAlign: "left", flexGrow: 1 }}>
					Joke Generator
				</Typography>
				<Button color="inherit" component={Link} to="/">
					Home
				</Button>
				<Button color="inherit" component={Link} to="/saved">
					Saved
				</Button>
			</Toolbar>
		</AppBar>
	);
}
