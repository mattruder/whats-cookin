import './styles.css';
import apiCalls from './apiCalls';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import Recipe from './classes/Recipe.js'
import RecipeRepository from './classes/RecipeRepository.js'
import ingredients from './data/ingredients.js'
import recipes from './data/recipes.js'
import users from './data/users.js'

const viewAllButton = document.querySelector(".view-all-btn");
const foodImagesSection = document.querySelector(".food-images-section");
const allRecipesSection = document.querySelector(".all-recipes");
const allRecipeList = document.querySelector(".all-recipe-list");

viewAllButton.addEventListener('click', viewAllRecipes)

function viewAllRecipes() {
const recipeRepo = new RecipeRepository(recipes);
foodImagesSection.classList.add("hidden");
allRecipesSection.classList.remove("hidden");
recipeRepo.data.forEach((recipe) => {
  allRecipeList.innerHTML += `<li>${recipe.name}</li>`
})


console.log(recipeRepo);
}
