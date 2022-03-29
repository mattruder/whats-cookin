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
console.log(this.ingredientsList)
// iterate through ingredientsData, find/compare ids.
// if they match, push ingredient object to our ingredientsList array
}

// getRecipeCost

// getRecipeInstructions
};


export default Recipe;
