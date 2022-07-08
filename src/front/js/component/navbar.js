import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">LOGO</span>
				</Link>
				<div className="ml-auto">
				<Link to="/demo">
						<button className="btn btn-primary">Favoritas</button>
					</Link>
					<Link to="/demo">
						<button className="btn btn-primary">Mi pizzas</button>
					</Link>
					<Link to="/demo">
						<button className="btn btn-primary">Mis usuario</button>
					</Link>
					<Link to="/demo">
						<button className="btn btn-primary">About us</button>
					</Link>
					<Link to="/demo">
						<button className="btn btn-primary">Log Out</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
