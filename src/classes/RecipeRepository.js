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
  }

  // goal: an array that is based on the tag
  // input: recipe data array
  // output: an array that is based on the tag
  // Steps: 
  // push recipes if tag matches into the recipe tag
}




export default RecipeRepository;
