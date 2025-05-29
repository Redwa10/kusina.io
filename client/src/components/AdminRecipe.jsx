import { memo } from "react";
import { useRecipe } from "../contexts/RecipesContext";
import { useNavigate } from "react-router-dom";

const AdminRecipe = memo(function AdminRecipe({
  recipe,
  setCurrentRecipe,
  onSetEdit,
}) {
  const navigate = useNavigate()
  const { recipes, updateRecipes } = useRecipe();
  async function handleDelete(recipe) {
    const res = await fetch(
      `http://127.0.0.1:8000/recipebook/admin/recipes/${recipe.name.split(" ").join("-")}/`,
      {
        method: "DELETE",
        headers: {
          Authorization: `JWT ${localStorage.getItem("user")}`,
        },
      }
    );

    if (!res.ok) {
      console.log(res);
    } else {
      const updatedRecipe = recipes.filter((myrecipe) => myrecipe.id !== recipe.id);

      updateRecipes(updatedRecipe);
    }
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
            navigate(`/recipes/${recipe.id}`)
          }}
          className="flex select-none  flex-col items-center cursor-pointer"
        >
          <img className="ml-2" width={30} src="view.svg" alt="edit" />
          <span className="text-[rgba(146, 139, 139, 1)]">View</span>
        </div>
        <div
          onClick={() => {
            onSetEdit((edit) => !edit);
            setCurrentRecipe(recipe);
          }}
          className="flex select-none  flex-col items-center cursor-pointer"
        >
          <img className="ml-2" width={30} src="edit.svg" alt="edit" />
          <span className="text-[rgba(146, 139, 139, 1)]">edit</span>
        </div>
        <div
          onClick={() => handleDelete(recipe)}
          className="flex  select-none flex-col items-center cursor-pointer"
        >
          <img width={30} src="delete.svg" alt="delete" />
          <span className="text-[rgba(146, 139, 139, 1)]">delete</span>
        </div>
      </div>
    </div>
  );
});
export default AdminRecipe;
