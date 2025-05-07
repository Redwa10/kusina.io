import { createContext, useContext, useEffect, useReducer } from "react";

const recipesProvider = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "recipes":
      return { ...state, recipes: action.payload,isLoading: false  };
      break;
    case "add/recipe":
      return {...state, recipes:[...state.recipes,action.payload]}
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
    favourite:[],
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

  // useEffect(fucntion () {
    
  // },[])
function updateRecipes(data){
  dispatch({type:"recipes",payload:data})
}
function addRecipe(data){
  dispatch({type:"add/recipe",payload:data})
}
  return (
    <recipesProvider.Provider value={{ recipes, isLoading,updateRecipes,addRecipe }}>
      {children}
    </recipesProvider.Provider>
  );
}
function useRecipe() {
  const context = useContext(recipesProvider);
  return context;
}

export { RecipesContext, useRecipe};
