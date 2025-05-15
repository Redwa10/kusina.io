import { memo, useState } from "react";
import { Link } from "react-router-dom";
import { useRecipe } from "../contexts/RecipesContext";

const Card = memo(function Card({ recipe }) {
  const { userFavouriteList,favourite,updateFav } = useRecipe();
  const [isOver, setIsOver] = useState(false);

  function handleUpdateFav(){
   if(userFavouriteList.includes(recipe.id)){
    const newFav= favourite.filter(fav=> fav.id !== recipe.id)
    updateFav(newFav)
   }else{
    const newFav= [...favourite,recipe]
    updateFav(newFav)
   }
  }
  //301*187
  return (
    <div className=" animate-pop drop-shadow-xl  max-w-fit">
      <div className="w-[280px] max-h-[187px] overflow-hidden bg-black rounded-t-[20px]  ">
        <img
          className="w-full h-full object-cover object-center hover:scale-120 transition ease-in "
          width={280}
          height={150}
          src={`${recipe.imageUrls}`}
          alt="food"
        />
      </div>
      <div className="bg-white rounded-b-[20px] ">
        <p className="font-bold ml-3 pt-2 text-[13px]">{recipe.name}</p>
        <p className="mt-0.5 ml-3 font-bold text-primary text-[18px]">
          {recipe.ingredients.length}
          <span className="font-normal text-[#a6a6a6] text-[16px] ">
            {" "}
            ingredient
          </span>
        </p>
        <div className="flex justify-between w-[90%] m-auto items-center pb-4 px-1 py-2">
          <div onClick={handleUpdateFav}
            onMouseEnter={() => setIsOver(true)}
            onMouseLeave={() => setIsOver(false)}
          >
            {isOver ? (
              <img
                className="cursor-pointer hover:fill-[#ccc]"
                src="love-red.svg"
                alt="heart"
              />
            ) : (
              <img
                className="cursor-pointer hover:fill-[#ccc]"
                src={`${
                  userFavouriteList.includes(recipe.id)
                    ? `love-red.svg`
                    : "love.svg"
                }`}
                alt="heart"
              />
            )}
          </div>

          <Link to={`/recipes/${recipe.id}`}>
            <button className="drop-shadow-md text-center mt-0.5 transition ease-in font-light text-md  text-white bg-primary border-1 border-primary px-3 py-1 rounded-[100px] hover:bg-white cursor-pointer hover:text-primary">
              Read more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
});
export default Card;
