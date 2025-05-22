import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Card from "../components/Card";
import { useRecipe } from "../contexts/RecipesContext";
import { useAuth } from "../contexts/AuthContext";

function Home() {
  const { recipes, isLoading } = useRecipe();
  const { user } = useAuth();
  return (
    <main>
      <Nav />

      <header className="font-lex font-extrabold w-[80%] m-auto mt-25 text-[28px]">
        <div className="absolute bg-primary w-[136px] top-[205px] h-[5.5px]"></div>
        Welcome to Kushina,<span className="text-primary"> {user.name}</span>
      </header>
      <section className="w-[80%] m-auto mt-[50px] font-poppins mb-100px ">
        <div className="flex justify-between items-center font-medium">
          <p className="text-[19px] ">Popular recipes</p>
          <Link to="/recipes">
            <div className="flex">
              <p className="text-primary ">View all</p>{" "}
              <img src="right.svg"></img>{" "}
            </div>
          </Link>
        </div>
        <div className="grid grid-cols-4 justify-start justify-self-start gap-x-10 gap-y-14 mt-5">
          {isLoading ? (
            <p>loading......</p>
          ) : (
            recipes.map((recipe) => {
              return <Card key={recipe.id} recipe={recipe} />;
            })
          )}
        </div>
      </section>
    </main>
  );
}

export default Home;
