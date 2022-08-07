import config from "../config";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: null,
      user_name:"",
      itemArray: [], //este son los ingredientes
      pizzas: [],
      users: [],
      ingredient: [],
      recipe: [],
      user_id: 0,
      pizza_id: 0,
      createPizza: [],
      filterIngredient: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      syncTokenFromSessionStore: () => {
        const token = localStorage.getItem("token");
        if (token && token != "" && token != undefined)
          setStore({ token: token });
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
          const resp = await fetch(`${config.hostname}/api/login`, opts);

          if (![200, 401].includes(resp.status)) {
            return null;
          }

          const data = await resp.json();
          console.log({ data });

          if (resp.status == 200) {
            localStorage.setItem("token", data.access_token);
            setStore({ token: data.access_token });
            //guarda id usuario en localStore (30/07)
            localStorage.setItem("user_id",data.user_id)
            setStore({user_id: data.user_id})
            
          }

          return data;
        } catch (error) {
          console.log(error);
        }
      },


      // para obtener userID en todas las páginas

      setUserId: (data)=>{
        setStore( {user_id: data} )
      },

      getUserId: () => {
        const token = localStorage.getItem("token")
        fetch(`${config.hostname}/api/userid`, {
          method:"GET",
          headers:{
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token,
          }
      })
      .then((res) => {
          return res.json()
      })
      .then((data) => {
          setStore({ user_id: data })
      })
      },

      // FILTER array lugar donde se guardan los ingredientes
      filter_function: (ingredient) => {
        const store = getStore();
        const aux = [...store.itemArray, ingredient];
        setStore({ itemArray: aux });
        const aux2 = [...store.createPizza, ingredient.id]
        setStore({ createPizza: "" })
        setStore({ createPizza: aux2 });
        console.log("ingrediente id " + store.createPizza);
      },

      eliminate_ingredient: (ingredient) => {
        const store = getStore();
        let index = -1;
        for (let i = 0; i < store.itemArray.length; i++) {
          const aux = store.itemArray[i];
          if (aux.id === ingredient.id) {
            index = i;
            break;
          }
        }

        if (index > -1) {
          const aux = store.itemArray.filter((obj, i) => {
            console.log("obj es: " + obj.id)
            if (i !== index) {
              return obj;
            }
            
          });

          const aux2 = store.createPizza.filter((obj, i) => {
            console.log("obj es: " + obj.id)
            if (i !== index) {
              return obj;
            }
            
          })
          ;

          

        console.log("aux es:")
        console.log(aux)
        setStore({ itemArray: aux });

        setStore({ createPizza: aux2 })
        }
      },

      exist: (ingredient) => {
        const store = getStore();
        for (let i = 0; i < store.itemArray.length; i++) {
          const aux = store.itemArray[i];
          if (aux.id === ingredient.id) {
            return true;
          }
        }
        return false;
      },

      //Carga las pizzas:

      getPizzas: async () => {
        const res = await fetch(`${config.hostname}/api/pizza`, {
          method: "GET",
        });

        const data = await res.json();
        await setStore({ pizzas: data });
      },

       //Cargar las recetas:
      
       getRecipe: async () => {
        const res = await fetch(`${config.hostname}/api/recipe`, {
          method: 'GET',
        });

        const data = await res.json();
        await setStore({ recipe: data });
      },

      //Cargar los ingredientes:
      getIngredient: async () => {
        const res = await fetch(`${config.hostname}/api/ingredient`,{
          method: 'GET',
        });

        const data = await res.json();
        console.log(data);
        await setStore({ ingredient: data })
      },

      //Cargar las recetas:
      getRecipes: async () => {
        const res = await fetch(`${config.hostname}/api/recipe`,{
          method: 'GET',
        });

        const data = await res.json();
        console.log(data);
        await setStore({ recipe: data })
      },

      //Carga la id de la pizza:
      getPizzaId: (id) => {
        setStore({pizza_id: id})
      },

      //demo
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
      },
    },
  };
};

export default getState;
