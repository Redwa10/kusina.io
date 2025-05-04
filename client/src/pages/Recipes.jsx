import Category from "../components/Category";
import Nav from "../components/Nav";

function Recipes() {
  return (
    <main>
      <header>
        <Nav />
      </header>
      <section className="flex gap-5 justify-center mt-25">
        <Category selected>All</Category>
        <Category>Meat-based</Category>
        <Category>Veg</Category>
        <Category>Desert</Category>
        <Category>Diary</Category>
      </section>
    </main>
  );
}

export default Recipes;
