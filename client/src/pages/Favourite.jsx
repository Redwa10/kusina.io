import Card from "../components/Card";
import Nav from "../components/Nav";
import { useRecipe } from "../contexts/RecipesContext";

function Favourite() {
  const { userFavourite } = useRecipe();

  console.log(userFavourite);

  return (
    <div>
      <Nav />
      <header className="font-lex font-extrabold w-[80%] m-auto mt-25 text-[28px]">
        <div className="absolute bg-primary w-[155px] top-[205px] left-[245px] h-[5.5px]"></div>
        Your Favourites
      </header>
      <section className=" grid grid-cols-4 w-[80%] m-auto mt-[50px] font-poppins mb-100px">
        {userFavourite.map((fav) => (
          <Card key={fav.id} recipe={fav} />
        ))}
      </section>
    </div>
  );
}

export default Favourite;
