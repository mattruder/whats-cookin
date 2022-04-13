class Pantry {
    constructor(user) {
        this.recipesToCook = user.recipesToCook
        this.ingredients = user.pantry
        this.enoughIngredients = true
    }

    determineIngredients(recipeId) {
        //check if recipe is the same
        var correctRecipe = []
        let pantryIngredientArray = [];
        this.recipesToCook.forEach((recipe) => {
            if(recipe.id === recipeId) {
                console.log('recipe')
            correctRecipe.push(recipe)
            let recipeIngredients = recipe.ingredients.map((recipeIngredient) => {
                return recipeIngredient.id
            })
                // check if ingredients match inside the pantry  based off id num
                // iterate through recipeIngredient array --> if pantry ingredient id matches
                // recipe ingredient id's ** .includes() ** move on to next step to check quantity
              
            let checkRecipeId = recipeIngredients.forEach((ingredientId) => {
                let pantryArray = this.ingredients.map((ingredient) => {
                    return ingredient.ingredient
                })
                if (pantryArray.includes(ingredientId)) {
                    pantryIngredientArray.push('Yes')
                } else {
                    pantryIngredientArray.push('No')
                }
                // console.log('check', pantryIngredientArray)
            })
        }
       })
    //    if (pantryIngredientArray.includes('No')) {
    //        return 'You do not have enough ingredients to cook this recipe.'
    //    } else {
        //    console.log(this.recipesToCook)
           console.log('correct recipe', correctRecipe)
    //    }

    }

}





export default Pantry