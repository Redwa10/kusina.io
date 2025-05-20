function IngredientTag({ing}) {
    console.log(ing)
    return (
        <div className="bg-[#e5e5e5] py-1 px-3 rounded-xl flex gap-2 items-center">
          <span> {`${ing.currentIng} | ${ing.currentQaunt}`}</span>
          <span className="text-[#fe5353]  text-sm cursor-pointer hover:text-[red]">X</span>
        </div>
    )
}

export default IngredientTag
