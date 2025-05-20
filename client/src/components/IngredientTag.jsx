function IngredientTag({ ing, onUpdateIng, ingredients }) {
  console.log(ing);

  function handleUpdate(id) {
    const newIngs = ingredients.filter((ing) => ing.id !== id);
    onUpdateIng(newIngs);
  }
  return (
    <div className="bg-[#e5e5e5] py-1 px-3 rounded-xl flex gap-2 items-center">
      <span>
        {" "}
        {`${
          ing.name?.charAt(0).toUpperCase() + ing.name?.slice(1).toLowerCase()
        } | ${ing.quantity}`}
      </span>
      <span
        onClick={() => handleUpdate(ing.id)}
        className="text-[#fe5353]  text-sm cursor-pointer hover:text-[red]"
      >
        X
      </span>
    </div>
  );
}

export default IngredientTag;
