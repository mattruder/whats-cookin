class Pantry {
    constructor(user) {
        this.recipesToCook = user.recipesToCook
        this.ingredients = user.pantry
        this.enoughIngredients = true
        this.ingredientsNeeded = []
        this.ingredientsForRecipe = []
    }

    determineIngredients(recipe) {
      if(!recipe) {
        throw new Error("Recipe is undefined")
      }
      recipe.ingredients.forEach((recipeIngredient) => {
        let ingredient = this.ingredients.find((ing) => {
          return ing.ingredient === recipeIngredient.id
        });
        if (ingredient) {
          let ingredientQuantity = ingredient.amount;
          let recipeIngredientQuantity = recipeIngredient.quantity.amount;
          if (ingredientQuantity >= recipeIngredientQuantity) {
            this.enoughIngredients = true
          }
          else if (ingredientQuantity < recipeIngredientQuantity) {
            this.enoughIngredients = false;
            this.ingredientsNeeded.push(ingredient);
          } else {
            this.enoughIngredients = false;
            this.ingredientsNeeded.push(recipeIngredient)
          }
        }
      })
      if(this.ingredientsNeeded.length > 0) {
        this.enoughIngredients = false
      }
      else {
        this.enoughIngredients = true
      }
        return this.enoughIngredients
      }

    removeIngredients() {
      this.ingredients.forEach((pantryIngredient) => {
        this.ingredientsForRecipe.forEach((recipeIngredient) => {
          if(pantryIngredient.ingredient === recipeIngredient.id) {
            pantryIngredient.amount -= recipeIngredient.quantity.amount * 2
          }
        })
      })
    }
    updatePantry() {
      return this.ingredients;
    }
}





export default Pantry
