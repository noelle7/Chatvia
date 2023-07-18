import {
	Button,
	FormControl,
	Input,
	InputAdornment,
	InputLabel,
	Link,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import React from "react";

const Register = () => {
	return (
		<div className="signUpContainer">
			<div className="textContainer">
				<h1 className="logo">Chatvia</h1>
				<h2>Sign Up</h2>
				<p>Get your Chatvia account now.</p>
			</div>

			<div className="formContainer">
				<div className="formWrapper">
					<form action="">
						<FormControl variant="standard">
							<InputLabel htmlFor="email">Email</InputLabel>
							<Input
								id="email"
								placeholder="Enter Email"
								margin="normal"
								required
								startAdornment={
									<InputAdornment position="start">
										<MailOutlineIcon />
									</InputAdornment>
								}
							/>
						</FormControl>

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

						{/* <TextField
							id="username"
							label="Username"
							type="text"
							placeholder="Enter Username"
							variant="outlined"
							size="small"
							margin="normal"
							required
						/> */}

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

						<Button variant="contained">Sign up</Button>
						<p>
							By register you agree to the Chatvia&nbsp;
							<Link href="#" underline="none">
								{"Terms of Use"}
							</Link>
						</p>
					</form>
				</div>
			</div>

			<div className="textContainer">
				<p>Already have an account ? Signin </p>
				<p>© 2023 Chatvia. Made by Noelle Huang</p>
			</div>
		</div>
	);
};

export default Register;
