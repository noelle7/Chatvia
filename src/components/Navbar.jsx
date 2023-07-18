import React from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CommentIcon from "@mui/icons-material/Comment";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import SettingsIcon from "@mui/icons-material/Settings";
import { ReactComponent as Logo } from "./../img/logo.svg";

const Navbar = () => {
	return (
		<div className="navbar">
			<Logo className="logo" />
			<PersonOutlineIcon />
			<CommentIcon />
			<PeopleOutlineIcon />
			<ContactPageIcon />
			<SettingsIcon />
		</div>
	);
};

export default Navbar;
