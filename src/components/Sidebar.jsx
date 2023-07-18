import React from "react";
import Navbar from "./Navbar";
import SideMenu from "./SideMenu";

const Sidebar = () => {
	return (
		<div className="sidebar">
			<Navbar />
			<SideMenu />
		</div>
	);
};

export default Sidebar;
