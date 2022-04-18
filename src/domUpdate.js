import apiCalls from './apiCalls';
import getData from './apiCalls';
import Recipe from './classes/Recipe.js';
import User from './classes/User.js';
import RecipeRepository from './classes/RecipeRepository.js';
import Pantry from './classes/Pantry.js';
import { recipeRepo } from './scripts.js';
// import { user } from './scripts.js';
import { recipes } from './scripts.js';
import { userPantry } from './scripts.js';
// import { ingredientsData } from './scripts.js';

const viewAllButton = document.querySelector(".view-all-btn");
const foodImagesSection = document.querySelector(".food-images-section");
const allRecipesSection = document.querySelector(".all-recipes");
const allRecipeList = document.querySelector(".all-recipe-list");
// const homeButton = document.querySelector(".home-btn");
const favoriteRecipeArea = document.querySelector(".favorite-recipe-area");
const favoritesAreaButton = document.querySelector(".favorites-btn");
const favoriteRecipeButton = document.querySelector(".favorite-btn");
const displayRecipeSection = document.querySelector(".display-recipe");
const recipesToCookButton = document.querySelector(".recipes-to-cook-btn");
const recipesToCookArea = document.querySelector(".recipes-to-cook-area");
const grabRecipe = document.querySelector(".recipe-in-list");
const filteredByTagArea = document.querySelector(".filtered-by-tag-area");
const filterDropdown = document.getElementById("tags");
const filterDropdown1 = document.getElementById("tags1");
const filterButton = document.querySelector(".filter-recipes-btn");
const unfavoriteButton = document.querySelector(".unfavorite-btn");
const unfavoriteButtonSection = document.querySelector(".unfavorite-btn-section");
const allFavoritesArea = document.querySelector(".all-favorites-area");
const filterFavoritesBtn = document.querySelector(".filter-favorite-recipes-btn");
const filterFavoritesArea = document.querySelector(".filter-favorites-dropdown");
const allRecipeSearchbar = document.querySelector(".all-recipe-searchbar");
const favoritesSearchbar = document.querySelector(".favorites-searchbar");
const toCookButtonArea = document.querySelector(".to-cook-button-area");
const viewToCookFromFavorites = document.querySelector(".recipes-to-cook-from-favorites-btn");
const homePageStyling = document.querySelector(".home-page-styling");
const filteredRecipeStyling = document.querySelector(".filtered-recipe-styling");
const searchBtn = document.querySelector('.search-btn');
const favoriteSearchBtn = document.querySelector(".favorite-search-btn");
const myPantryBtn = document.querySelector(".my-pantry")
const myPantryArea = document.querySelector(".my-pantry-area")
const cookBtn = document.querySelector(".cook-recipe-btn")
const homeButton = document.querySelector(".home-btn");
// let allData = [];
// let userData;
// let user;
// let recipeRepo;
// let recipes;
// let ingredientsData;
// let userPantry;

// getData().then(data => {
//   allData.push(data)
//   userData = allData[0][0]
//   ingredientsData = allData[0][1]
//   recipes = allData[0][2]
//   user = new User(userData[9])
//   userPantry = new Pantry(user)
//   recipeRepo = new RecipeRepository(recipes)
//   displayNewImages()
// })

let domUpdates = {



  goHome() {
  console.log("user pantry before: ", userPantry)
  // addToUserPantry(postVar)
  // addToUserPantry(postVar1)
  console.log("user pantry after!: ", userPantry)
  myPantryArea.classList.add("hidden")
  filterFavoritesArea.classList.add("hidden");
  foodImagesSection.innerHTML = "";
  // this.displayNewImages(recipes);
  foodImagesSection.classList.remove("hidden");
  allRecipesSection.classList.add("hidden");
  favoriteRecipeArea.classList.add("hidden");
  viewAllButton.classList.remove("hidden");
  displayRecipeSection.classList.add("hidden");
  displayRecipeSection.innerHTML = "";
  filteredByTagArea.innerHTML= "";
  filteredByTagArea.classList.add("hidden");
  allRecipeSearchbar.classList.remove("hidden");
  favoritesSearchbar.classList.add("hidden");
  toCookButtonArea.classList.add("hidden");
  recipesToCookArea.classList.add("hidden");
  homePageStyling.classList.remove("hidden");
},

viewMyPantry(user, ingredientsData) {
  myPantryArea.classList.remove("hidden")
  recipesToCookArea.classList.add("hidden")
  toCookButtonArea.classList.add("hidden")
  allRecipeList.innerHTML = ""
  filterFavoritesArea.classList.add("hidden")
  foodImagesSection.classList.add("hidden");
  allRecipesSection.classList.add("hidden");
  viewAllButton.classList.add("hidden");
  displayRecipeSection.classList.add("hidden")
  filteredByTagArea.classList.add("hidden")
  allRecipeSearchbar.classList.remove("hidden");
  favoritesSearchbar.classList.add("hidden");
  favoriteRecipeArea.classList.add("hidden");
    ingredientsData.forEach((ingredient) => {
      user.pantry.forEach((ingredientInPantry) => {
          if (ingredient.id === ingredientInPantry.ingredient) {
            myPantryArea.innerHTML += `<li class="ingredient-in-pantry" id=${ingredient.id}>${ingredient.name} amount: ${ingredientInPantry.amount}</li>`

          }
      })
    })


},

displayNewImages(array) {
  console.log(array)
  const images = array.map((recipe) => {
    return recipe.image;
  })
  foodImagesSection.innerHTML += `
  <img src=${images[this.getRandomIndex(images)]}>
  <img src=${images[this.getRandomIndex(images)]}>
  <img src=${images[this.getRandomIndex(images)]}>`
},

getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
},

viewAllRecipes(recipeRepo) {
  recipesToCookArea.classList.add("hidden")
  toCookButtonArea.classList.add("hidden")
  allRecipeList.innerHTML = ""
  filterFavoritesArea.classList.add("hidden")
  foodImagesSection.classList.add("hidden");
  allRecipesSection.classList.remove("hidden");
  viewAllButton.classList.add("hidden");
  displayRecipeSection.classList.add("hidden")
  filteredByTagArea.classList.add("hidden")
  myPantryArea.classList.add("hidden")
  allRecipeSearchbar.classList.remove("hidden");
  favoritesSearchbar.classList.add("hidden");
  favoriteRecipeArea.classList.add("hidden");
  recipeRepo.data.forEach((recipe) => {
    allRecipeList.innerHTML += `<li class="recipe-in-list" id=${recipe.id}>${recipe.name}</li>`
  })
},

searchRecipe(recipeRepo) {
    filteredByTagArea.innerHTML = ""
    let searchInput = document.querySelector(".searchbar").value
    searchInput = searchInput.toLowerCase();
    recipeRepo.data.forEach((recipe) => {
        if (recipe.name.toLowerCase().includes(searchInput)) {
            this.createFilteredArea();
        filteredByTagArea.innerHTML += `
        <h1 id=${recipe.id}>${recipe.name}</h1>
        `
        }
    })
    document.querySelector(".searchbar").value = ''
},

createFilteredArea() {
  myPantryArea.classList.add("hidden")
  filterFavoritesArea.classList.add("hidden");
  foodImagesSection.classList.add("hidden");
  allRecipesSection.classList.add("hidden");
  favoriteRecipeArea.classList.add("hidden");
  displayRecipeSection.classList.add("hidden");
  displayRecipeSection.innerHTML = "";
  filteredByTagArea.classList.remove("hidden");
  toCookButtonArea.classList.add("hidden");
  viewAllButton.classList.remove("hidden");
}




}

export default domUpdates
