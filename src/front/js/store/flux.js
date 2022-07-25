import config from "../config";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: null,
      message: null,
      itemArray: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      syncTokenFromSessionStore: () => {
        const token = sessionStorage.getItem("token");
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
          const resp = await fetch(`${config.hostname}/api/token`, opts);
          if (resp.status !== 200) {
            alert("error");
            return false;
          }

          const data = await resp.json();
          sessionStorage.setItem("token", data.access_token);
          setStore({ token: data.access_token });
        } catch (error) {
          console.log("hay un error");
        }
      },

      // FILTER array
      filter_function: (ingredient) => {
        const store = getStore();
        const aux = [...store.itemArray, ingredient];
        setStore({ itemArray: aux });
        console.log(store.itemArray);
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
            if (i !== index) {
              return obj;
            }
          });
          setStore({ itemArray: aux });
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

      //demo
      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
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
      },
    },
  };
};

export default getState;
