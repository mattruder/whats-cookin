class Recipe {
  constructor(recipe, ingredientsData) {
    this.name = recipe.name;
    this.id = recipe.id
    this.image = recipe.image;
    this.ingredients = recipe.ingredients;
    this.tags = recipe.tags;
    this.ingredientsList ;
    this.instructions = recipe.instructions;
    this.ingredientsData = ingredientsData;
  }

createIngredientList() {
  let recipeIngredientIds = this.ingredients.map((recipeIngredient) => {
    let filteredIngredients = this.ingredientsData.ingredientsData.filter((ingredientData) => {
      if(ingredientData.id === recipeIngredient.id) {
        return ingredientData
      }
    })
      return filteredIngredients
  })

  this.ingredientsList = recipeIngredientIds.flat()
}

getRecipeCost() {
  this.createIngredientList()
  let ingredientCosts = []
  this.ingredients.map((recipeIngredient) => {
    let filteredIngredients = this.ingredientsList.filter((ingredient) => {
      if(ingredient.id === recipeIngredient.id) {
        let cost = ingredient.estimatedCostInCents * recipeIngredient.quantity.amount;
        ingredientCosts.push(cost)
      }

    })

      return filteredIngredients

  })
  let finalCost = ingredientCosts.reduce((sum, num) => {
    sum += (num / 100);
    return sum
  }, 0)
  let realFinalCost = Number(finalCost.toFixed(2));
return realFinalCost

}

getRecipeInstructions() {
  let instructions = this.instructions.map((instruction) => {
    return instruction.instruction
  })
  let instructionsString = instructions.toString()
  return instructionsString
}
};


export default Recipe;
