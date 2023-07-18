import {
	Button,
	Checkbox,
	FormControl,
	FormControlLabel,
	Input,
	InputAdornment,
	InputLabel,
	Link,
} from "@mui/material";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import React from "react";
import { useState } from "react";
import { CheckBox } from "@mui/icons-material";

const Login = () => {
	const [rememberMe, setRememberMe] = useState(false);

	const handleRememberMeChange = (e) => {
		setRememberMe(e.target.checked);
	};

	const handleSignIn = () => {
		// Implement your sign-in logic here, using the 'rememberMe' state if needed.
		// For demo purposes, we're just logging the 'rememberMe' value.
		console.log("Remember Me:", rememberMe);
	};

	return (
		<div className="signUpContainer">
			<div className="textContainer">
				<h1 className="logo">Chatvia</h1>
				<h2>Sign In</h2>
				<p>Sign in to continue to Chatvia.</p>
			</div>

			<div className="formContainer">
				<div className="formWrapper">
					<form action="">
						<FormControl variant="standard">
							<InputLabel htmlFor="username">Username</InputLabel>
							<Input
								id="username"
								label="Username"
								type="text"
								placeholder="Enter Username"
								variant="outlined"
								margin="normal"
								required
								startAdornment={
									<InputAdornment position="start">
										<PermIdentityIcon />
									</InputAdornment>
								}
							/>
						</FormControl>

						<FormControl variant="standard">
							<InputLabel htmlFor="password">Password</InputLabel>
							<Input
								id="password"
								label="Password"
								type="password"
								placeholder="Enter Password"
								variant="outlined"
								margin="normal"
								required
								startAdornment={
									<InputAdornment position="start">
										<LockOpenIcon />
									</InputAdornment>
								}
							/>
						</FormControl>

						{/* <FormControlLabel
							control={
								<CheckBox
									checked={rememberMe}
									onChange={handleRememberMeChange}
								/>
							}
							label="Remember Me"
						/> */}
						<FormControlLabel
							control={<Checkbox />}
							label="Remember Me"
							checked={rememberMe}
							onChange={handleRememberMeChange}
						/>

						<Button variant="contained" onClick={handleSignIn}>
							Sign in
						</Button>
					</form>
				</div>
			</div>

			<div className="textContainer">
				<p>Don't have an account? Signup now </p>
				<p>© 2023 Chatvia. Made by Noelle Huang</p>
			</div>
		</div>
	);
};

export default Login;
