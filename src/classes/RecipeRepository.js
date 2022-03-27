class RecipeRepository {
  constructor(data) {
    this.data = data;
    this.recipes = [];
    console.log('here', this.data[0].tags)
  }
  getRecipeByTag(tag) {
    const filteredRecipe = this.data.filter((recipe) => {
      if (recipe.tags.includes(tag)) {
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
