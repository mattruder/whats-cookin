class Pantry {
    constructor(user) {
        this.recipesToCook = user.recipesToCook
        this.ingredients = user.pantry
        this.enoughIngredients = true
        this.ingredientsNeeded = []
    }



    determineIngredients(recipeId) {
      this.ingredientsNeeded = [];
        let returnStatement;
        let pantryIngredientArray = [];
        let allRecipeIngredients = []
        this.recipesToCook.forEach((recipe) => {
            if(recipe.id === recipeId) {
            let recipeIngredients = recipe.ingredients.map((recipeIngredient) => {
                allRecipeIngredients.push(recipeIngredient)
                return recipeIngredient.id
            })

            let checkRecipeId = recipeIngredients.forEach((ingredientId) => {
                let pantryArray = this.ingredients.map((ingredient) => {
                    return ingredient.ingredient
                })
                if (pantryArray.includes(ingredientId)) {
                    pantryIngredientArray.push('Yes')
                } else {
                    allRecipeIngredients.forEach((allRecipeIngredient) => {
                      if(allRecipeIngredient.id === ingredientId) {
                        this.ingredientsNeeded.push(allRecipeIngredient)
                      }
                    })
                    pantryIngredientArray.push('No')
                }
            })
        }
        if (pantryIngredientArray.includes('No')) {
            returnStatement = 'You do not have enough ingredients to cook this recipe.'
        } else {
          let doesItMatch = [];
            recipe.ingredients.forEach((ingredientInRecipe) => {
            let hasIngredient = this.ingredients.find((thePantryIngredient) => {
                return ingredientInRecipe.id === thePantryIngredient.ingredient && ingredientInRecipe.quantity.amount <= thePantryIngredient.amount
              })
              if(hasIngredient) {
                doesItMatch.push('Yes')
              }
              else {
                allRecipeIngredients.forEach((allRecipeIngredient) => {
                  if(allRecipeIngredient.id === ingredientInRecipe.id) {
                    let pantryIngredientAmount = ((this.ingredients.filter((thePantryIngredient) => {
                      if (allRecipeIngredient.id === thePantryIngredient.ingredient) {
                        return thePantryIngredient.amount
                      }
                    })))
                    allRecipeIngredient.quantity.amount = ingredientInRecipe.quantity.amount - pantryIngredientAmount[0].amount
                    if(!this.ingredientsNeeded.includes(allRecipeIngredient)) {
                      this.ingredientsNeeded.push(allRecipeIngredient)
                    }

                  }
                })

                doesItMatch.push('No')
              }
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
