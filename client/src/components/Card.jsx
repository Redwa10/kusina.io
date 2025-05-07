import { memo } from "react";
import { Link } from "react-router-dom";

const Card= memo( function Card({ recipe }) {
  //301*187
  return (
    <div className=" animate-pop drop-shadow-xl  max-w-fit">
      <div className="w-[280px] max-h-[187px] overflow-hidden bg-black rounded-t-[20px]  ">
        <img
          className="w-full h-full object-cover object-center hover:scale-120 transition ease-in "
          width={280}
          height={150}
          src={`${recipe.imageUrl}`}
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
          <img
            className="cursor-pointer hover:fill-amber-50"
            src="love.svg"
            alt="heart"
          />
          <Link to={`${recipe.id}`}>
            <button className="drop-shadow-md text-center mt-0.5 transition ease-in font-light text-md  text-white bg-primary border-1 border-primary px-3 py-1 rounded-[100px] hover:bg-white cursor-pointer hover:text-primary">
              Read more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
) 
export default Card;
