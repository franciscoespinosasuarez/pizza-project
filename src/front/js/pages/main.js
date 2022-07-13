import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { PizzaCard } from "../component/pizzacard/pizzacard";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/main.css";

export const Main = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>FRASE DE INTRODUCCIÓN DE LA PÁGINA WEB</h1>
			<p>
				<img src={rigoImageUrl} />
			</p>
			<div className="Modal que muestra el filtro por ingredientes"></div>
			<div className="row">
				<div className="col">
					<PizzaCard />
					<PizzaCard />
				</div>
				<div className="col">
					<PizzaCard />
					<PizzaCard />
				</div>
				
			</div>
			<div className="alert alert-info">
				{store.message || "Loading message from the backend (make sure your python backend is running)..."}
			</div>
			<p>
				This boilerplate comes with lots of documentation:{" "}
				<a href="https://github.com/4GeeksAcademy/react-flask-hello/tree/95e0540bd1422249c3004f149825285118594325/docs">
					Read documentation
				</a>
			</p>
		</div>
	);
};
