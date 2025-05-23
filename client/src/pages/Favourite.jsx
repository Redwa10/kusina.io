import Card from "../components/Card";
import Nav from "../components/Nav";
import { useRecipe } from "../contexts/RecipesContext";

function Favourite() {
  const { userFavourite, searchResult, search } = useRecipe();

  const searchedList= searchResult.map(recipe=>recipe.name)
  const favSearch= userFavourite.filter(recipe=>searchedList.includes(recipe.name))
  console.log(favSearch);

  return (
    <div>
      <Nav />
      <header className="font-lex font-extrabold w-[80%] m-auto mt-25 text-[28px]">
        <div className="absolute bg-primary w-[155px] top-[205px] left-[245px] h-[5.5px]"></div>
        Your Favourites
      </header>
      <section
        className={`${
          favSearch.length === 0 && search !== ""
            ? `flex justify-center mt-30`
            : `grid grid-cols-4 justify-start justify-self-start gap-x-10 gap-y-14 mt-10 w-[80%] m-auto ${
                favSearch.length !== 0 && `mt-20`
              }`
        }`}
      >
        {search === "" ? (
          userFavourite.map((fav) => <Card key={fav.id} recipe={fav} />)
        ) : !favSearch.length ? (
          <div className="text-center text-2xl text-[#444]">
            Can't find a recipe with this name
          </div>
        ) : (
          favSearch.map((recipe) => {
            return <Card key={recipe.id} recipe={recipe} />;
          })
        )}
      </section>
    </div>
  );
}

export default Favourite;
