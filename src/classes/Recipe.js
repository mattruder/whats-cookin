import ingredientsData from '../data/ingredients.js';

class Recipe {
  constructor(recipe) {
    this.name = recipe.name;
    this.id = recipe.id
    this.image = recipe.image;
    this.ingredients = recipe.ingredients;
    this.tags = recipe.tags;
    this.ingredientsList ;
    this.instructions = recipe.instructions
// instructions:
// cost: 0
    //console.log('1', this.ingredients)
  }

createIngredientList() {
// let ingredientNames = []
// let recipeIngredientIds = this.ingredients.map((ingredient) => {
//   return ingredient.id
// })
  let recipeIngredientIds = this.ingredients.map((recipeIngredient) => {
    let filteredIngredients = ingredientsData.filter((ingredientData) => {
      if(ingredientData.id === recipeIngredient.id) {
        return ingredientData
      }
    })
      return filteredIngredients
  })

    this.ingredientsList = recipeIngredientIds.flat()


// iterate through ingredientsData, find/compare ids.
// if they match, push ingredient object to our ingredientsList array
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
      // console.log(filteredIngredients)

      return filteredIngredients

  })
  let finalCost = ingredientCosts.reduce((sum, num) => {
    sum += (num / 100);
    return sum
  }, 0)
return finalCost

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
