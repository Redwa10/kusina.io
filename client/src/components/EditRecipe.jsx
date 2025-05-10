import { useReducer } from "react";
import { useRecipe } from "../contexts/RecipesContext";

function EditRecipe({ currentRecipe, onSetEdit }) {
  const { recipes,updateRecipes } = useRecipe();

  function handleSetEdit() {
    onSetEdit((edit) => !edit);
  }
  function handleUpdateRecipe(e) {
    e.preventDefault()
    const updatedRecipes = recipes.map((recipe) => {
  return recipe===currentRecipe ? {...recipe,name,imageUrl,category,instructions,cookingTime}:recipe
      
    });
   
    updateRecipes(updatedRecipes)
    onSetEdit(false)
  }
  function reducer(state, action) {
    switch (action.type) {
      case "category":
        return { ...state, category: action.payload };
      case "name":
        return { ...state, name: action.payload };
      case "imageUrl":
        return { ...state, imageUrl: action.payload };
      case "instructions":
        return { ...state, instructions: action.payload.split(",") };
      case "cookingTime":
        return { ...state, cookingTime: action.payload };

      default:
        console.log("unknown action type");
        break;
    }
  }
  const initialState = {
    name: currentRecipe.name,
    imageUrl: currentRecipe.imageUrl,
    category: currentRecipe.category,
    instructions: currentRecipe.instructions,
    cookingTime: currentRecipe.cookingTime,
  };
  const [{ name, imageUrl, category, instructions, cookingTime }, dispatch] =
    useReducer(reducer, initialState);
  return (
    <div className="fixed z-2 text-white top-[15%] left-[40%]  ">
      <div
        onClick={handleSetEdit}
        className="fixed top-0 left-0 min-w-screen min-h-screen bg-[#0000005b] z-[-1]"
      ></div>
      <form className=" bg-[#fff] text-black flex flex-col gap-3 px-5 py-7 w-[450px] rounded-md ">
        <p
          onClick={handleSetEdit}
          className="select-none cursor-pointer absolute top-2 left-[93%] font-bold text-xl text-red-500  "
        >
          X
        </p>
        <div className="flex flex-col ">
          <lable className="font-medium capitalize text-lg">name</lable>
          <input
            value={name}
            onChange={(e) =>
              dispatch({ type: "name", payload: e.target.value })
            }
            className="outline-[#ccc] border-1 rounded-sm px-1 py-2 border-[#ccc]"
            placeholder="Avocado Salad"
          ></input>
        </div>
        <div className="flex flex-col ">
          <lable className="font-medium capitalize text-lg">Image Url</lable>
          <input
            value={imageUrl}
            onChange={(e) =>
              dispatch({ type: "imageUrl", payload: e.target.value })
            }
            className="outline-[#ccc] border-1 rounded-sm px-1 py-2 border-[#ccc]"
            placeholder="http://imagelink.com"
          ></input>
        </div>
        <div className="flex flex-col ">
          <lable className="font-medium capitalize text-lg">Instructions</lable>
          <input
            value={instructions}
            onChange={(e) =>
              dispatch({ type: "instructions", payload: e.target.value })
            }
            className="outline-[#ccc] border-1 rounded-sm px-1 py-2 border-[#ccc]"
            placeholder="step 1, step 2 ,step 3"
          ></input>
        </div>
        <div className="flex flex-col ">
          <lable className="font-medium capitalize text-lg">Cooking Time</lable>
          <input
            value={cookingTime}
            onChange={(e) =>
              dispatch({ type: "cookingTime", payload: e.target.value })
            }
            className="outline-[#ccc] border-1 rounded-sm px-1 py-2 border-[#ccc]"
            placeholder="15 minutes"
          ></input>
        </div>
        <div className="flex flex-col ">
          <lable className="font-medium capitalize text-lg">category</lable>
          <select
            onChange={(e) =>
              dispatch({ type: "category", payload: e.target.value })
            }
            value={category}
            className="outline-[#ccc] border-1 rounded-sm px-1 py-2 border-[#ccc]"
            placeholder="15 minutes"
          >
            <option>Veg</option>
            <option>Meat-based</option>
            <option>Desert</option>
            <option>Dairy</option>
          </select>
        </div>
        <button onClick={e=>handleUpdateRecipe(e)} className=" ml-auto  drop-shadow-md text-center transition ease-in font-light text-lg  text-white bg-primary border-1 border-primary px-5 py-1 rounded-[100px] hover:bg-white cursor-pointer hover:text-primary w-fit ">
          update
        </button>
      </form>
    </div>
  );
}

export default EditRecipe;
