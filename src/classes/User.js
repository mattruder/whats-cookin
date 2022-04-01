class User {
    constructor(userData) {
        this.favoriteRecipes = []
        this.filteredFavoriteRecipes = []
        this.name = userData.name
        this.id = userData.id
        this.pantry = userData.pantry
        this.recipesToCook = []
    }

    favoriteRecipe(recipe) {
        if(!this.favoriteRecipes.includes(recipe)){
            this.favoriteRecipes.push(recipe)
        }
    }

    unfavoriteRecipe(recipe) {
        this.favoriteRecipes.forEach((favoriteRecipe) => {
          let indexPosition = this.favoriteRecipes.indexOf(favoriteRecipe)
          if (this.favoriteRecipes[indexPosition].id === recipe.id) {
            this.favoriteRecipes.splice(indexPosition, 1);
            }
        })
    }

    decideToCook(recipe) {
        if(!this.recipesToCook.includes(recipe)){
            this.recipesToCook.push(recipe)
        }
    }

    filterFavoriteRecipeByTag(tag) {
        this.favoriteRecipes.filter((recipe) => {
            if (recipe.tags.includes(tag)) {
                this.filteredFavoriteRecipes.push(recipe)
            }
        })
    }

    filterFavoriteRecipeByName(name) {
        this.favoriteRecipes.filter((recipe) => {
            if (recipe.name.includes(name)) {
                this.filteredFavoriteRecipes.push(recipe)
            }
        })
    }

}





export default User;
