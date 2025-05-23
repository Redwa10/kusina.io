import { Link } from "react-router-dom";
import { useRecipe } from "../contexts/RecipesContext";
import { useState } from "react";
import EditRecipe from "../components/EditRecipe";
import AdminRecipe from "../components/AdminRecipe";
import AddRecipe from "../components/AddRecipe";

function Admin() {
  const { recipes, isLoading, search, searchResult, onSearch } = useRecipe();
  const [edit, setEdit] = useState(false);
  const [add, setAdd] = useState(false);
  const [currentRecipe, setCurrentRecipe] = useState(null);

  return (
    <main>
      <header className="w-[80%] m-auto mt-5">
        <nav className="flex justify-between items-center">
          <Link to={"/home"} id="logo">
            <img width={170} src="logo-2.svg" alt="" />
          </Link>
          <div className="flex  gap-6 items-center">
            <input
              className="outline-0 border-1 border-[#c3c3c3] text-[#222222] rounded-lg px-2 py-1"
              value={search}
              onChange={(e) => onSearch(e.target.value.toLowerCase())}
              placeholder="search a recipe"
            ></input>
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
          {search === "" ? recipes.length===0?<div className="min-w-screen font-bold text-4xl text-center mt-15 text-[#ededed]">There are no Recipes yet!!</div> :(
            recipes.map((recipe) => {
              return (
                <AdminRecipe
                  setCurrentRecipe={setCurrentRecipe}
                  onSetEdit={setEdit}
                  key={recipe.id}
                  recipe={recipe}
                />
              );
            })
          ) : !searchResult.length ? (
            <div className="text-center text-2xl text-[#444] mt-22">
              Can't find a recipe with this name
            </div>
          ) : (
            searchResult.map((recipe) => {
              return (
                <AdminRecipe
                  setCurrentRecipe={setCurrentRecipe}
                  onSetEdit={setEdit}
                  key={recipe.id}
                  recipe={recipe}
                />
              );
            })
          )}
        </section>
      )}

      {edit && <EditRecipe onSetEdit={setEdit} currentRecipe={currentRecipe} />}
      {add && <AddRecipe onsetAdd={setAdd} currentRecipe={currentRecipe} />}
      <div className="flex mt-2  mb-3 mr-2">
        {!isLoading && search === "" && recipes.length > 0 && (
          <button
            onClick={() => setAdd(!add)}
            className=" ml-auto  drop-shadow-md text-center transition ease-in font-light text-lg  text-white bg-primary border-1 border-primary px-5 py-1 rounded-[100px] hover:bg-white cursor-pointer hover:text-primary w-fit "
          >
            Add
          </button>
        )}
      </div>
    </main>
  );
}

export default Admin;
