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
const homeButton = document.querySelector(".home-btn")

const displayRecipeSection = document.querySelector(".display-recipe")
const grabRecipe = document.querySelector(".recipe-in-list")

viewAllButton.addEventListener('click', viewAllRecipes)
homeButton.addEventListener('click', goHome)
// grabRecipe.addEventListener('click', displayRecipe)
allRecipeList.addEventListener("click", (event) => {
  displayRecipe(event);
})


function viewAllRecipes() {
allRecipeList.innerHTML = ""
const recipeRepo = new RecipeRepository(recipes);
foodImagesSection.classList.add("hidden");
allRecipesSection.classList.remove("hidden");
viewAllButton.classList.add("hidden");
recipeRepo.data.forEach((recipe) => {
  allRecipeList.innerHTML += `<li class="recipe-in-list" id=${recipe.name}>${recipe.name}</li>`
})
}

function displayRecipe() {
  console.log('test')
  // foodImagesSection.classList.add("hidden");
  // allRecipesSection.classList.add("hidden");
  // viewAllButton.classList.add("hidden");
  // displayRecipeSection.classList.remove("hidden")
  // displayRecipeSection.innerHTML = ''
  // recipeRepo.forEach((recipe) => {
  //   var mouseclick = event.target.id
  //   console.log(mouseclick)
  //   console.log(recipe.name)
  // if(grabRecipe.innerHTML === recipe.name) {
  //   console.log("hello")
  // }
}


function goHome() {
  foodImagesSection.classList.remove("hidden");
  allRecipesSection.classList.add("hidden");
  viewAllButton.classList.remove("hidden");
}
