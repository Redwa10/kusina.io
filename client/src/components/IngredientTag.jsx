function IngredientTag({ing}) {
    console.log(ing)
    return (
        <div>
           {`${ing.currentIng} | ${ing.currentQaunt}`}
        </div>
    )
}

export default IngredientTag
