import { Link } from "react-router-dom";
import { useRecipe } from "../contexts/RecipesContext";
import { useState } from "react";
import EditRecipe from "../components/EditRecipe";

function Admin() {
  const { recipes, updateRecipes, isLoading } = useRecipe();
  const [edit, setEdit] = useState(false);
  const [currentRecipe, setCurrentRecipe] = useState(null);

  function handleDelete(id) {
    const updatedRecipe = recipes.filter((recipe) => recipe.id !== id);
    updateRecipes(updatedRecipe);
  }

  function AdminRecipe({ recipe }) {
    return (
      <div className="w-[80%] m-auto mt-15 flex justify-between font-poppins">
        <div className="flex  items-center justify-between gap-3">
          <div className="w-[230px] h-[150px]">
            <img
              className="w-full h-full object-cover object-center"
              width={250}
              src={`${recipe.imageUrl}`}
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
              setEdit(!edit);
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
  return (
    <main>
      <header className="w-[80%] m-auto mt-5">
        <nav className="flex justify-between items-center">
          <Link to={"/home"} id="logo">
            <img width={170} src="logo-2.svg" alt="" />
          </Link>
          <div className="flex  gap-6 items-center">
            <button className="drop-shadow-md text-center transition ease-in font-light text-lg  text-white bg-primary border-1 border-primary px-5 py-1 rounded-[100px] hover:bg-white cursor-pointer hover:text-primary">
              Log out
            </button>
          </div>
        </nav>
      </header>
      {isLoading ? (
        <div>loading</div>
      ) : (
        <section>
          {recipes.map((recipe) => {
            return <AdminRecipe key={recipe.id} recipe={recipe} />;
          })}
        </section>
      )}

      {edit && <EditRecipe onSetEdit={setEdit} currentRecipe={currentRecipe} />}
    </main>
  );
}

export default Admin;
