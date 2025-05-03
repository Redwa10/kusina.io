function Card() {
    //301*187
  return (
    <div className=" drop-shadow-xl  max-w-fit">
      <div className="w-[280px] bg-black rounded-t-[20px]  ">
        <img src="food.png" alt="food" />
      </div>
      <div className="bg-white rounded-b-[20px] ">
        <p className="font-bold ml-3 pt-2 text-[15px]">Tramisu Cake With Strawberry Sauce</p>
        <p className="mt-0.5 ml-3 font-bold text-primary text-[18px]">
          12<span className="font-normal text-[#a6a6a6] text-[16px] "> ingredient</span>
        </p>
        <div className="flex justify-between w-[90%] m-auto items-center px-1 py-2">
          <img className="cursor-pointer hover:fill-amber-50" src="love.svg" alt="heart" />
          <button className="drop-shadow-md text-center mt-0.5 transition ease-in font-light text-md  text-white bg-primary border-1 border-primary px-3 py-1 rounded-[100px] hover:bg-white cursor-pointer hover:text-primary">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
