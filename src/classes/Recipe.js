import ingredientsData from '../data/ingredients.js';

class Recipe {
  constructor(recipe) {
    this.name = recipe.name;
    this.id = recipe.id
    this.image = recipe.image;
    this.ingredients = recipe.ingredients;
    this.tags = recipe.tags;
    this.ingredientsList = [];
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
    this.ingredientsList = recipeIngredientIds
console.log('ingredientList', this.ingredientsList)
console.log('ingredients', this.ingredients)
// iterate through ingredientsData, find/compare ids.
// if they match, push ingredient object to our ingredientsList array
}

getRecipeCost() {
  console.log('hello')
  let recipeIngredientIds2 = this.ingredients.map((recipeIngredient) => {
    let filteredIngredients2 = this.ingredientsList.filter((ingredientCost) => {
      console.log('cost', ingredientCost, ingredientCost.estimatedCostInCents)
      if(ingredientCost.id === recipeIngredient.id) {
        return ingredientCost.estimatedCostInCents * recipeIngredient.quantity.amount
      }
    })
      return filteredIngredients2
  })
  console.log(recipeIngredientIds2)
  // let recipeCost = this.ingredientsList.reduce((acc, ingredient) => {
  //
  //     return acc
  // }, [])
  //     return recipeCost

  //console.log('hello', recipeCost)
// declare a variable, set up keys: this.ingredientList.forEach(ingredient) + quantity
// iterate through this.ingredients, take quantity and assign it to the quantity key in the this.ingredientsList array
// Match id's
}

// getRecipeInstructions
};


export default Recipe;
