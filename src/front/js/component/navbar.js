import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css"
import LogOut from "../../img/log-out.png"
import PizzaFav from "../../img/corazon.png"
import addPizza from "../../img/add-photo.png"
import Logo from "../../img/logo2.png"
import myUser from "../../img/my-user.png"

export const Navbar = () => {

	const exit = () => {
		sessionStorage.removeItem("token")
	}

	return (
		<nav className="navbar navbar-ofi">
			<div className="container ">
				<Link to="/">
					<img className="logo" src={Logo}/>
				</Link>
				<div className="ml-auto">
				<Link to="/demo">
					<	img className="pizza-fav icons" src={PizzaFav}/>
					</Link>
					<Link to="/newpizza">
						<img className="pizza-fav icons" src={addPizza}/>
					</Link>
					<Link to="/demo">
						<img className="my-user" src={myUser}/>
					</Link>
					<Link to="/" onClick={exit}>
						<img className="log-out icons" src={LogOut}/>
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;