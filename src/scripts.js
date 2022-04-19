import './styles.css';
import apiCalls from './apiCalls';
import getData from './apiCalls';
import Recipe from './classes/Recipe.js';
import User from './classes/User.js';
import RecipeRepository from './classes/RecipeRepository.js';
import Pantry from './classes/Pantry.js';
import domUpdates from './domUpdate.js'

let allData = [];
let userData;
let user;
let recipeRepo;
let recipes;
let ingredientsData;
let userPantry;

getData().then(data => {
  allData.push(data)
  userData = allData[0][0]
  ingredientsData = allData[0][1]
  recipes = allData[0][2]
  user = new User(userData[domUpdates.getRandomIndex(userData)])
  userPantry = new Pantry(user)
  recipeRepo = new RecipeRepository(recipes)
  domUpdates.displayNewImages(recipes)
})

const viewAllButton = document.querySelector(".view-all-btn");
const foodImagesSection = document.querySelector(".food-images-section");
const allRecipesSection = document.querySelector(".all-recipes");
const allRecipeList = document.querySelector(".all-recipe-list");
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
const myPantryFromFavoritesButton = document.querySelector(".my-pantry-from-favorites")
const searchError = document.querySelector(".search-error")

homeButton.addEventListener("click", () => {
  domUpdates.goHome(recipes);
})

myPantryBtn.addEventListener("click", () => {
  domUpdates.viewMyPantry(user, ingredientsData)
})

recipesToCookArea.addEventListener("click", (event) => {
  domUpdates.cookRecipe(event, user, userPantry)
})

viewAllButton.addEventListener("click", () => {
  domUpdates.viewAllRecipes(recipeRepo)
})

searchBtn.addEventListener("click", () => {
  domUpdates.searchRecipe(recipeRepo)
})

favoriteSearchBtn.addEventListener("click", () => {
  domUpdates.searchFavoriteRecipe(user)
})
allRecipeList.addEventListener("click", (event) => {
  domUpdates.displayRecipe(event, recipeRepo, ingredientsData, user);
});
displayRecipeSection.addEventListener("click", (event) => {
  domUpdates.addRecipeToFavorites(event, recipeRepo, user);
});

viewToCookFromFavorites.addEventListener("click", () => {
  domUpdates.displayRecipesToCookArea(user)
})

myPantryFromFavoritesButton.addEventListener("click", () => {
  domUpdates.viewMyPantry(user, ingredientsData)
})

toCookButtonArea.addEventListener("click", (event) => {
  domUpdates.addRecipesToCook(event, user, recipeRepo)
})
favoritesAreaButton.addEventListener("click", () => {
  domUpdates.displayFavoriteRecipeArea()
})

recipesToCookButton.addEventListener("click", () => {
  domUpdates.displayRecipesToCookArea(user)
})

favoriteRecipeArea.addEventListener("click", (event) => {
  domUpdates.displayRecipe(event, recipeRepo, ingredientsData, user);
});

recipesToCookArea.addEventListener("click", (event) => {
  domUpdates.displayRecipe(event, recipeRepo, ingredientsData, user);
});

filterButton.addEventListener("click", (event) => {
  domUpdates.filterRecipes(event, recipeRepo);
});

filteredByTagArea.addEventListener("click", (event) => {
  domUpdates.displayRecipe(event, recipeRepo, ingredientsData, user);
});

filterFavoritesBtn.addEventListener("click", (event) => {
  domUpdates.filterFavoriteRecipes(event, user)
});


export { ingredientsData, recipes, user, userPantry, recipeRepo }
