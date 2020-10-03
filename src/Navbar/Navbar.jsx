import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Navbar/Navbar.css";
import logo from "../Assets/logo-white-1x.png";

function Navbar() {
	const [navbar, setNavbar] = useState(false);

	const changeNavBg = () => {
		// console.log(window.scrollY);
		if (window.scrollY >= 50) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};

	window.addEventListener("scroll", changeNavBg);

	return (
		<>
			<div className="nav-bg">
				<div className="row">
					<div className="col-12">
						<nav className={navbar ? "navbar bg active" : "navbar bg"}>
							<NavLink exact className="navbar-brand" to="/">
								<strong>
									<img
										className="logo"
										src={logo}
										width="30"
										height="30"
										alt="logo"
										loading="lazy"
									></img>{" "}
								</strong>
							</NavLink>
						</nav>
					</div>
				</div>
			</div>
		</>
	);
}

export default Navbar;
