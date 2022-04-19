class RecipeRepository {
  constructor(data) {
    this.data = data;
    this.recipes = [];
  }
  
  getRecipeByTag(tag) {
    this.recipes = []
    this.data.filter((recipe) => {
      if (recipe.tags.includes(tag)) {
        this.recipes.push(recipe)
      }
    })
  }

  getRecipeByName(phrase) {
    this.recipes = []
    this.data.filter((recipe) => {
      if (recipe.name.includes(phrase)) {
        this.recipes.push(recipe)
      }
    })
    return this.recipes
  }
};




export default RecipeRepository;
