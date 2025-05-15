import { Link, NavLink } from "react-router-dom";
import Button from "./Button";
import { useRecipe } from "../contexts/RecipesContext";

function Nav({ src = "logo-2.svg" }) {
  const { search, onSearch } = useRecipe();
  return (
    <header className="w-[80%] m-auto mt-5">
      <nav className="flex justify-between items-center">
        <Link to={"/home"} id="logo">
          <img width={170} src={src} alt="" />
        </Link>
        <div className="flex  gap-6 items-center">
          <ul className="flex gap-5 text-[16.5px] text-[#232323]">
            <li className="hover:text-primary transition ease-in">
              <NavLink to={"/home"}>Home</NavLink>
            </li>
            <li className="hover:text-primary transition ease-in">
              <NavLink to={"/recipes"}>Recipes</NavLink>
            </li>
            <li className="hover:text-primary transition ease-in">
              <NavLink to={"/favourite"}>Favourite</NavLink>
            </li>
          </ul>
          <input  className="outline-0 border-1 border-[#c3c3c3] text-[#222222] rounded-lg px-2 py-1"
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
  );
}


export default Nav;
