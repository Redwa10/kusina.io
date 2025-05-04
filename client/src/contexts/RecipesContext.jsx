import { createContext, useContext, useEffect, useReducer } from "react";

const recipesProvider = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "recipes":
      return { ...state, recipes: action.payload,isLoading: false  };
      break;
    case "loading":
      return { ...state, isLoading: true};
      break;
    default:
      break;
  }
}
function RecipesContext({ children }) {
  const [{ recipes, isLoading }, dispatch] = useReducer(reducer, {
    recipes: [],
    isLoading: false,
  });

  useEffect(function () {
    async function getData() {
      dispatch({ type: "loading" });
      const res = await fetch("http://localhost:3000/recipes");
      const data = await res.json();
      dispatch({ type: "recipes", payload: data });
      
    }
    getData();
  }, []);

  //   setInterval(() => {
  //     dispatch({ type: "loading" });
  //   }, 3000);
  return (
    <recipesProvider.Provider value={{ recipes, isLoading }}>
      {children}
    </recipesProvider.Provider>
  );
}
function useRecipe() {
  const context = useContext(recipesProvider);
  return context;
}

export { RecipesContext, useRecipe };
