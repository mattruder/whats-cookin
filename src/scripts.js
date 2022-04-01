import './styles.css';
import apiCalls from './apiCalls';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import Recipe from './classes/Recipe.js'
import User from './classes/User.js'
import RecipeRepository from './classes/RecipeRepository.js'
import ingredients from './data/ingredients.js'
import recipes from './data/recipes.js'
import users from './data/users.js'

const user = new User(users[getRandomIndex(users)])
console.log(user)
const recipeRepo = new RecipeRepository(recipes);
const viewAllButton = document.querySelector(".view-all-btn");
const foodImagesSection = document.querySelector(".food-images-section");
const allRecipesSection = document.querySelector(".all-recipes");
const allRecipeList = document.querySelector(".all-recipe-list");
const homeButton = document.querySelector(".home-btn")
const favoriteRecipeArea = document.querySelector(".favorite-recipe-area")
const favoritesAreaButton = document.querySelector(".favorites-btn")
const favoriteRecipeButton = document.querySelector(".favorite-btn")
const displayRecipeSection = document.querySelector(".display-recipe")
const userAreaButton = document.querySelector(".user-btn")
const userArea = document.querySelector(".user-area")
const grabRecipe = document.querySelector(".recipe-in-list")
const filteredByTagArea = document.querySelector(".filtered-by-tag-area")
const filterDropdown = document.getElementById("tags")
const filterButton = document.querySelector(".filter-recipes-btn")
const unfavoriteButton = document.querySelector(".unfavorite-btn")

window.onload = displayNewImages()

viewAllButton.addEventListener('click', viewAllRecipes)
homeButton.addEventListener('click', goHome)
unfavoriteButton.addEventListener('click', removeFavoriteRecipe);
// grabRecipe.addEventListener('click', displayRecipe)
allRecipeList.addEventListener("click", (event) => {
  displayRecipe(event);
})
displayRecipeSection.addEventListener("click", (event) => {
  addRecipeToFavorites(event);
})
favoritesAreaButton.addEventListener('click', displayFavoriteRecipeArea)
userAreaButton.addEventListener('click', displayUserArea)
favoriteRecipeArea.addEventListener('click', (event) => {
  displayRecipe(event);
})
filterButton.addEventListener('click', (event) => {
  filterRecipes(event);
})
filteredByTagArea.addEventListener('click', (event) => {
  displayRecipe(event);
})

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function displayNewImages() {
  const images = recipes.map((recipe) => {
    return recipe.image;
  })

  foodImagesSection.innerHTML += `
  <img src=${images[getRandomIndex(images)]}>
  <img src=${images[getRandomIndex(images)]}>
  <img src=${images[getRandomIndex(images)]}>`
}

function viewAllRecipes() {
allRecipeList.innerHTML = ""
foodImagesSection.classList.add("hidden");
allRecipesSection.classList.remove("hidden");
viewAllButton.classList.add("hidden");
recipeRepo.data.forEach((recipe) => {
  allRecipeList.innerHTML += `<li class="recipe-in-list" id=${recipe.id}>${recipe.name}</li>`
})
}

const searchBtn = document.querySelector('.search-btn')

searchBtn.addEventListener('click', searchRecipe)

function searchRecipe() {
    filteredByTagArea.innerHTML = ''
    let searchInput = document.querySelector('.searchbar').value
    searchInput = searchInput.toLowerCase();
    recipeRepo.data.forEach((recipe) => {
        if (recipe.name.toLowerCase().includes(searchInput)) {
            createFilteredArea();
        filteredByTagArea.innerHTML += `
        <h1 id=${recipe.id}>${recipe.name}</h1>
        `
        }
    })
    document.querySelector('.searchbar').value = ''
}

function displayRecipe(event) {
  createRecipeArea();
  populateRecipeArea();
}

function createRecipeArea() {
  foodImagesSection.classList.add("hidden");
  allRecipesSection.classList.add("hidden");
  favoriteRecipeArea.classList.add("hidden")
  viewAllButton.classList.add("hidden");
  displayRecipeSection.classList.remove("hidden")
  displayRecipeSection.innerHTML = ''
  filteredByTagArea.classList.add("hidden")
}

function createFilteredArea() {
  foodImagesSection.classList.add("hidden");
  allRecipesSection.classList.add("hidden");
  favoriteRecipeArea.classList.add("hidden")
  viewAllButton.classList.add("hidden");
  displayRecipeSection.classList.add("hidden")
  displayRecipeSection.innerHTML = ''
  filteredByTagArea.classList.remove("hidden")
}

function populateRecipeArea() {
  recipeRepo.data.forEach((recipe) => {
    if(event.target.id === recipe.id.toString()) {
      let recipeToDisplay = new Recipe(recipe)
      let recipeCost = recipeToDisplay.getRecipeCost()
      recipeToDisplay.createIngredientList()
      const officialIngredients = recipeToDisplay.ingredientsList.map((ingredient) => {
        return ` ${ingredient.name}`
      })
      let recipeInstructions = recipe["instructions"]
      let officialInstructions = recipeInstructions.map((instruction) => {
        return instruction.instruction
      }).flat()
      displayRecipeSection.innerHTML += `
      <img src="${recipeToDisplay.image}">
      <h1>${recipeToDisplay.name}</h1>
      <button class="favorite-btn" id=${recipeToDisplay.id}>Favorite Recipe</button>
      <h2>Cost: ${recipeCost}</h2>
      <h3>Ingredients: </h3>
      <p>${officialIngredients}</p>
      <h3>Instructions: </h3>
      <p>${officialInstructions}</p>
      `
    }
  })
}

function displayFavoriteRecipeArea() {
  foodImagesSection.innerHTML = ''
  foodImagesSection.classList.add("hidden");
  allRecipesSection.classList.add("hidden");
  viewAllButton.classList.add("hidden");
  displayRecipeSection.classList.add("hidden");
  displayRecipeSection.innerHTML = '';
  filteredByTagArea.innerHTML= "";
  favoriteRecipeArea.classList.remove("hidden")
}

function displayUserArea() {
  foodImagesSection.innerHTML = ''
  foodImagesSection.classList.add("hidden");
  allRecipesSection.classList.add("hidden");
  viewAllButton.classList.add("hidden");
  displayRecipeSection.classList.add("hidden");
  displayRecipeSection.innerHTML = ''
  favoriteRecipeArea.classList.add("hidden")
  userArea.classList.remove("hidden")
}

function addRecipeToFavorites(event) {
  recipeRepo.data.forEach((recipe) => {
    if(event.target.id === recipe.id.toString() && !user.favoriteRecipes.includes(recipe)) {
      user.favoriteRecipe(recipe)
        console.log(user.favoriteRecipes)
        favoriteRecipeArea.innerHTML = ''
      user.favoriteRecipes.forEach((favoriteRecipe) => {
        // if(!user.favoriteRecipes.includes(recipe)) {
        // }
        //console.log('hello')
        favoriteRecipeArea.innerHTML += `
        <h1 id=${favoriteRecipe.id}>${favoriteRecipe.name}</h1>
        <button class="unfavorite-btn">Unfavorite</button>
        `
      })
    }
  })
}

function removeFavoriteRecipe() {
  //if(event.target.closest())
  console.log('hello')
}

function filterRecipes(event) {
  recipeRepo.data.forEach((recipe) => {
    let recipeTags = recipe.tags.forEach((recipeTag) => {
      if(filterDropdown.value === recipeTag) {
        createFilteredArea();
        filteredByTagArea.innerHTML += `
        <h1 id=${recipe.id}>${recipe.name}</h1>
        `      }
    })
    return recipeTags
  })
}



function goHome() {
  foodImagesSection.innerHTML = ''
  displayNewImages()
  foodImagesSection.classList.remove("hidden");
  allRecipesSection.classList.add("hidden");
  favoriteRecipeArea.classList.add("hidden")
  viewAllButton.classList.remove("hidden");
  displayRecipeSection.classList.add("hidden");
  displayRecipeSection.innerHTML = ''
  filteredByTagArea.innerHTML= "";
  filteredByTagArea.classList.add("hidden")
}
