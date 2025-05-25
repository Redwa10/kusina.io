import { memo } from "react";
import { useRecipe } from "../contexts/RecipesContext";

const AdminRecipe= memo( function AdminRecipe({ recipe,setCurrentRecipe,onSetEdit }) {
    const {recipes,updateRecipes} = useRecipe()
    function handleDelete(id) {
        const updatedRecipe = recipes.filter((recipe) => recipe.id !== id);
        
        updateRecipes(updatedRecipe);
      }
    
    return (
      <div className="w-[80%] m-auto mt-15 flex justify-between font-poppins">
        <div className="flex  items-center justify-between gap-3">
          <div className="w-[230px] h-[150px] rounded-lg overflow-hidden">
            <img
              className="w-full h-full object-cover object-center"
              width={250}
              src={`${recipe.imageUrls}`}
              alt="food"
            />
          </div>
          <div>
            <p className="font-bold">{recipe.name}</p>
            <p className="text-primary font-bold">
              {recipe.ingredients.length}{" "}
              <span className="text-[12px] font-normal text-black">
                Ingredients
              </span>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-5">
          <div
            onClick={() => {
              onSetEdit(edit=>!edit);
              setCurrentRecipe(recipe);
            }}
            className="flex select-none  flex-col items-center cursor-pointer"
          >
            <img className="ml-2" width={30} src="edit.svg" alt="edit" />
            <span className="text-[rgba(146, 139, 139, 1)]">edit</span>
          </div>
          <div
            onClick={() => handleDelete(recipe.id)}
            className="flex  select-none flex-col items-center cursor-pointer"
          >
            <img width={30} src="delete.svg" alt="delete" />
            <span className="text-[rgba(146, 139, 139, 1)]">delete</span>
          </div>
        </div>
      </div>
    );
  }
)
  export default AdminRecipe