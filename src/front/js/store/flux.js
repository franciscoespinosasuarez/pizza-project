const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},


			syncTokenFromSessionStore: () => {
				const token = sessionStorage.getItem("token")
				if (token && token!= "" && token != undefined) setStore ( {token: token})
			},




			//LOGIN
			login: async (email, password) => {
				const opts = {
					method: "POST",
					headers: {
					  "Content-Type": "application/json",
					},
					body: JSON.stringify({
					  email: email,
					  password: password,
					}),
				  };

				  try {
					const resp = await fetch("https://3001-franciscoes-pizzaprojec-p6abymg56kx.ws-eu54.gitpod.io/api/login",opts)
					if (resp.status !== 200){
					  alert("error");
					  return false;
					}
  
					const data = await resp.json();
					console.log("viene del back",data)
					sessionStorage.setItem("token", data.access_token);
					setStore( {token: data.access_token} )
					console.log(data.access_token)
					
					return true
				  }
				  catch(error){
					console.log("hay un error")
				  }
			},



			getMessage: async () => {
				const store = getStore();
				const opts = {
					headers: {
						"Authorization": "Bearer " + store.token
					}
				}


				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello", opts)
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
