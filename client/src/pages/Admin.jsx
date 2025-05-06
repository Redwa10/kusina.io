import { Link } from "react-router-dom";
import { useRecipe } from "../contexts/RecipesContext";
import { useState } from "react";
import EditRecipe from "../components/EditRecipe";
import AdminRecipe from "../components/AdminRecipe";

function Admin() {
  const { recipes, isLoading } = useRecipe();
  const [edit, setEdit] = useState(false);
  const [currentRecipe, setCurrentRecipe] = useState(null);


 
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
            return <AdminRecipe setCurrentRecipe={setCurrentRecipe} onSetEdit={setEdit}   key={recipe.id} recipe={recipe} />;
          })}
        </section>
      )}

      {edit && <EditRecipe onSetEdit={setEdit} currentRecipe={currentRecipe} />}
    </main>
  );
}

export default Admin;
