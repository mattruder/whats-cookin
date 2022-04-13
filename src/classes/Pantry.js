class Pantry {
    constructor(user) {
        this.recipesToCook = user.recipesToCook
        this.ingredients = user.pantry
        this.enoughIngredients = true
    }

    determineIngredients(recipeId) {
        let pantryIngredientsForRecipe = []
        let returnStatement;
        let pantryIngredientArray = [];
        this.recipesToCook.forEach((recipe) => {
            if(recipe.id === recipeId) {

            let recipeIngredients = recipe.ingredients.map((recipeIngredient) => {
                return recipeIngredient.id
            })
            recipeIngredients.forEach((ingredientInTheRecipe) => {
              this.ingredients.forEach((ingredientInThePantry) => {
                if(ingredientInTheRecipe === ingredientInThePantry.ingredient) {
                  pantryIngredientsForRecipe.push(ingredientInThePantry)
                }
              })

            })
            let checkRecipeId = recipeIngredients.forEach((ingredientId) => {
                let pantryArray = this.ingredients.map((ingredient) => {
                    return ingredient.ingredient
                })
                if (pantryArray.includes(ingredientId)) {
                    pantryIngredientArray.push('Yes')
                } else {
                    pantryIngredientArray.push('No')
                }
            })
        }

        if (pantryIngredientArray.includes('No')) {
            returnStatement = 'You do not have enough ingredients to cook this recipe.'
        } else {
          let doesItMatch = []
            recipe.ingredients.forEach((ingredientInRecipe) => {
              pantryIngredientsForRecipe.forEach((pantryIngredient) => {
                if(ingredientInRecipe.id === pantryIngredient.ingredient && pantryIngredient.amount >= ingredientInRecipe.quantity.amount) {
                  doesItMatch.push('Yes')
                }
                else {
                  doesItMatch.push('No')
                }
              })
            })
            if (doesItMatch.includes('No')) {
              returnStatement = 'You do not have enough ingredients to cook this recipe.'
            } else {
              returnStatement = 'You have enough ingredients'
            }
        }
       })
       return returnStatement
    }
}





export default Pantry
