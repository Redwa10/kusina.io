import { useEffect, useState } from "react";
import Category from "../components/Category";
import Nav from "../components/Nav";
import { useRecipe } from "../contexts/RecipesContext";
import Card from "../components/Card";

function Recipes() {
  const [selected, setSelected] = useState("All");
  const { recipes} = useRecipe();
  const [filtered, setFiltered] = useState([]);

  useEffect(
    function () {
      if (selected === "All") {
        setFiltered(recipes);
        return;
      }
      setFiltered(recipes.filter((recipe) => recipe.category == selected));
    },
    [recipes, selected]
  );

  
  return (
    <main>
      <header>
        <Nav />
      </header>
      <section className="flex gap-5 justify-center mt-25">
        <Category onSetSelected={setSelected} selected={selected}>All</Category>
        <Category onSetSelected={setSelected} selected={selected}>Veg</Category>
        <Category onSetSelected={setSelected} selected={selected}>Meat-based</Category>
        <Category onSetSelected={setSelected} selected={selected}>Desert</Category>
        <Category onSetSelected={setSelected} selected={selected}>Diary</Category>
      </section>
      <section className="grid grid-cols-4 justify-start justify-self-start gap-x-10 gap-y-14 mt-10 w-[80%] m-auto">
        {filtered.map(recipe=>{
            return <Card key={recipe.id} recipe={recipe} />
        })}
      </section>
    </main>
  );
}

export default Recipes;
