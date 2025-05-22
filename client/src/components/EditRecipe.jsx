import { useReducer, useState } from "react";
import { useRecipe } from "../contexts/RecipesContext";
import IngredientTag from "./IngredientTag";

function EditRecipe({ currentRecipe, onSetEdit }) {
  const { recipes, updateRecipes } = useRecipe();

  function handleSetEdit() {
    onSetEdit((edit) => !edit);
  }
  function handleUpdateRecipe(e) {
    e.preventDefault();
    const updatedRecipes = recipes.map((recipe) => {
      return recipe === currentRecipe
        ? { ...recipe, name, imageUrl, category, instructions, cookingTime }
        : recipe;
    });

    updateRecipes(updatedRecipes);
    onSetEdit(false);
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
      case "ingredients/add":
        return {
          ...state,
          ingredients: [...state.ingredients, action.payload],
        };
      case "ingredients/update":
        return { ...state, ingredients: action.payload };

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
    ingredients: currentRecipe.ingredients,
  };
  const [
    { name, imageUrl, category, instructions, cookingTime, ingredients },
    dispatch,
  ] = useReducer(reducer, initialState);

  console.log(ingredients);
  const [currentIng, setCurrentIng] = useState("");
  const [currentQaunt, setCurrentQuant] = useState("");

  function handleAddIng(e) {
    e.preventDefault();
    if (currentIng === "" || currentQaunt === "") {
      alert("fields are empty");
      return;
    }
    const newIng = {
      id: Math.random() * 1000,
      name: currentIng,
      quantity: currentQaunt,
    };
    dispatch({ type: "ingredients/add", payload: newIng });
    setCurrentIng("");
    setCurrentQuant("");
  }
  function handleUpdateIng(newIngs) {
    dispatch({ type: "ingredients/update", payload: newIngs });
  }
  return (
    <div className="fixed z-2 text-white top-[5%] left-[40%]  ">
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

        {/* ingredients */}
        <div className="flex flex-col ">
          <lable className="font-medium capitalize text-lg mb-1">
            Ingredients <span>{`(${ingredients.length})`}</span>
          </lable>

          {/* ingredits container */}
          {ingredients.length > 0 && (
            <div className="w-[100%] p-1.5 mb-0.5 max-h-20 overflow-y-scroll flex  flex-wrap gap-2 bg-[#f7f7f7] border-1 rounded-md  border-[#ccc]">
              {ingredients.map((ing) => (
                <IngredientTag
                  onUpdateIng={handleUpdateIng}
                  ingredients={ingredients}
                  ing={ing}
                />
              ))}
            </div>
          )}

          <div className="flex gap-1 items-center">
            <div className="flex flex-col gap-1">
              <lable className="font-light text-sm ">Ingredient</lable>
              <input
                value={currentIng}
                onChange={(e) => setCurrentIng(e.target.value)}
                className="outline-[#ccc] text-sm max-w-fit border-1 rounded-sm px-1 py-2 border-[#ccc]"
                placeholder="Sugar"
              ></input>
            </div>
            <div className="flex flex-col gap-1">
              <lable className="font-light text-sm ">Quantity</lable>
              <input
                value={currentQaunt}
                onChange={(e) => setCurrentQuant(e.target.value)}
                className="outline-[#ccc] text-sm max-w-fit border-1 rounded-sm px-1 py-2 border-[#ccc]"
                placeholder="2 Spoon"
              ></input>
            </div>

            <button
              onClick={(e) => handleAddIng(e)}
              className="mt-5 ml-auto  drop-shadow-md text-center transition ease-in font-light text-md  text-white bg-primary border-1 border-primary h-[40px] px-2 rounded-md hover:bg-white cursor-pointer hover:text-primary w-fit "
            >
              Add
            </button>
          </div>
        </div>
        {/* ingredients end */}
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
        <button
          onClick={(e) => handleUpdateRecipe(e)}
          className=" ml-auto  drop-shadow-md text-center transition ease-in font-light text-lg  text-white bg-primary border-1 border-primary px-5 py-1 rounded-[100px] hover:bg-white cursor-pointer hover:text-primary w-fit "
        >
          update
        </button>
      </form>
    </div>
  );
}

export default EditRecipe;
