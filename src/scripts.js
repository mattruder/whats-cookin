import './styles.css';
import apiCalls from './apiCalls';
import './images/turing-logo.png'
import Recipe from './classes/Recipe.js'
import User from './classes/User.js'
import RecipeRepository from './classes/RecipeRepository.js'
const fetchAll = () => {
  Promise.all([fetchusers(), fetchrecipes(), fetchingredients()])}
// import ingredients from './data/ingredients.js'
// import recipes from './data/recipes.js'
// import users from './data/users.js'
let users = `https://what-s-cookin-starter-kit.herokuapp.com/api/v1/users`
let ingredients = `https://what-s-cookin-starter-kit.herokuapp.com/api/v1/ingredients`
let recipes = `https://what-s-cookin-starter-kit.herokuapp.com/api/v1/recipes`

let userDataTest = [];
Promise.all([
  fetch(users)
  .then(response => response.json())
  .then(data => userDataTest.push(data)),
  fetch(ingredients) 
  .then(response => response.json()),
  // .then(data => console.log('ingredients', data)), 
  fetch(recipes)
  .then(response => response.json())
  // .then(data => console.log('recipe', data))
])
console.log('Test', userDataTest)


const user = new User(users.usersData[getRandomIndex(users.usersData)])
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
const recipesToCookButton = document.querySelector(".recipes-to-cook-btn")
const recipesToCookArea = document.querySelector(".recipes-to-cook-area")
const grabRecipe = document.querySelector(".recipe-in-list")
const filteredByTagArea = document.querySelector(".filtered-by-tag-area")
const filterDropdown = document.getElementById("tags")
const filterDropdown1 = document.getElementById("tags1")
const filterButton = document.querySelector(".filter-recipes-btn")
const unfavoriteButton = document.querySelector(".unfavorite-btn")
const unfavoriteButtonSection = document.querySelector(".unfavorite-btn-section")
const allFavoritesArea = document.querySelector(".all-favorites-area")
const filterFavoritesBtn = document.querySelector(".filter-favorite-recipes-btn")
const filterFavoritesArea = document.querySelector(".filter-favorites-dropdown")
const allRecipeSearchbar = document.querySelector(".all-recipe-searchbar")
const favoritesSearchbar = document.querySelector(".favorites-searchbar")
const toCookButtonArea = document.querySelector(".to-cook-button-area")
const viewToCookFromFavorites = document.querySelector(".recipes-to-cook-from-favorites-btn")

window.onload = displayNewImages()

viewAllButton.addEventListener('click', viewAllRecipes)
homeButton.addEventListener('click', goHome)
allRecipeList.addEventListener("click", (event) => {
  displayRecipe(event);
})
displayRecipeSection.addEventListener("click", (event) => {
  addRecipeToFavorites(event);
})

viewToCookFromFavorites.addEventListener("click", displayRecipesToCookArea)

toCookButtonArea.addEventListener("click", addRecipesToCook)

favoritesAreaButton.addEventListener('click', displayFavoriteRecipeArea)
recipesToCookButton.addEventListener('click', displayRecipesToCookArea)

favoriteRecipeArea.addEventListener('click', (event) => {
  displayRecipe(event);
})

recipesToCookArea.addEventListener("click", (event) => {
  displayRecipe(event);
})
filterButton.addEventListener('click', (event) => {
  filterRecipes(event);
})
filteredByTagArea.addEventListener('click', (event) => {
  displayRecipe(event);
})
filterFavoritesBtn.addEventListener('click', (event) => {
  filterFavoriteRecipes(event)
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
    recipesToCookArea.classList.add("hidden")
  toCookButtonArea.classList.add("hidden")
allRecipeList.innerHTML = ""
filterFavoritesArea.classList.add("hidden")
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

const favoriteSearchBtn = document.querySelector('.favorite-search-btn')

favoriteSearchBtn.addEventListener('click', searchFavoriteRecipe)


function searchFavoriteRecipe() {
    filteredByTagArea.innerHTML = ''
    let searchInput = document.querySelector('.favorite-searchbar').value
    searchInput = searchInput.toLowerCase();
    user.favoriteRecipes.forEach((recipe) => {
        if (recipe.name.toLowerCase().includes(searchInput)) {
            createFilteredArea();
        filteredByTagArea.innerHTML += `
        <h1 id=${recipe.id}>${recipe.name}</h1>
        `
        }
    })
    document.querySelector('.favorite-searchbar').value = ''
}

function displayRecipe(event) {
  createRecipeArea();
  populateRecipeArea();
}

function createRecipeArea() {
  filterFavoritesArea.classList.add("hidden")
  foodImagesSection.classList.add("hidden");
  allRecipesSection.classList.add("hidden");
  favoriteRecipeArea.classList.add("hidden")
  viewAllButton.classList.add("hidden");
  displayRecipeSection.classList.remove("hidden")
  displayRecipeSection.innerHTML = ''
  toCookButtonArea.innerHTML = ''
  filteredByTagArea.classList.add("hidden")
  allRecipeSearchbar.classList.remove("hidden");
  favoritesSearchbar.classList.add("hidden");
  toCookButtonArea.classList.remove("hidden")
    recipesToCookArea.classList.add("hidden")
}

function createFilteredArea() {
  filterFavoritesArea.classList.add("hidden")
  foodImagesSection.classList.add("hidden");
  allRecipesSection.classList.add("hidden");
  favoriteRecipeArea.classList.add("hidden")
  viewAllButton.classList.add("hidden");
  displayRecipeSection.classList.add("hidden")
  displayRecipeSection.innerHTML = ''
  filteredByTagArea.classList.remove("hidden")
  toCookButtonArea.classList.add("hidden")
  }

function populateRecipeArea() {
  recipeRepo.data.forEach((recipe) => {
    let newRecipeId = recipe.id + 1;
    let newRecipeId2 = recipe.id + 2;
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
      toCookButtonArea.innerHTML += `
      <button class="to-cook-btn" id=${newRecipeId2}>Add To My Cook List</button>
     `
    }

    if(event.target.id === newRecipeId.toString()) {
      user.unfavoriteRecipe(recipe)
      updateFavoritesArea()
      displayFavoriteRecipeArea();
    }

    if(event.target.id === newRecipeId2.toString()) {
      console.log('hello')
      addRecipesToCook();
  }
})
}


function displayFavoriteRecipeArea() {
  filterFavoritesArea.classList.remove("hidden")
  foodImagesSection.innerHTML = ''
  foodImagesSection.classList.add("hidden");
  allRecipesSection.classList.add("hidden");
  viewAllButton.classList.add("hidden");
  displayRecipeSection.classList.add("hidden");
  displayRecipeSection.innerHTML = '';
  filteredByTagArea.innerHTML= "";
  favoriteRecipeArea.classList.remove("hidden");
  allRecipeSearchbar.classList.add("hidden");
  favoritesSearchbar.classList.remove("hidden");
  toCookButtonArea.classList.add("hidden")
  recipesToCookArea.classList.add("hidden")
}

function displayRecipesToCookArea() {
  filterFavoritesArea.classList.add("hidden")
  foodImagesSection.innerHTML = ''
  foodImagesSection.classList.add("hidden");
  allRecipesSection.classList.add("hidden");
  viewAllButton.classList.add("hidden");
  displayRecipeSection.classList.add("hidden");
  displayRecipeSection.innerHTML = ''
  favoriteRecipeArea.classList.add("hidden")
  recipesToCookArea.classList.remove("hidden")
  allRecipeSearchbar.classList.remove("hidden");
  favoritesSearchbar.classList.add("hidden");
  toCookButtonArea.classList.add("hidden")
}

function addRecipeToFavorites(event) {
  recipeRepo.data.forEach((recipe) => {
    if(event.target.id === recipe.id.toString() && !user.favoriteRecipes.includes(recipe)) {
      user.favoriteRecipe(recipe)
        favoriteRecipeArea.innerHTML = ''
      user.favoriteRecipes.forEach((favoriteRecipe) => {
        favoriteRecipeArea.innerHTML += `
        <h1 id=${favoriteRecipe.id}>${favoriteRecipe.name}</h1>
        <button class="unfavorite-btn" id=${favoriteRecipe.id +1}>Unfavorite</button>
          `
      })
    }
  })
}

function addRecipesToCook(event) {
  recipeRepo.data.forEach((recipe) => {
    let recipeId2 = recipe.id + 2;
    if(event.target.id === recipeId2.toString() && !user.recipesToCook.includes(recipe)) {
      user.decideToCook(recipe)
        recipesToCookArea.innerHTML = ''
      user.recipesToCook.forEach((recipeToCook) => {
        recipesToCookArea.innerHTML += `
        <h1 id=${recipeToCook.id}>${recipeToCook.name}</h1>
          `
      })
    }
  })
}

function updateFavoritesArea() {
  favoriteRecipeArea.innerHTML = ''
user.favoriteRecipes.forEach((favoriteRecipe) => {
  favoriteRecipeArea.innerHTML += `
  <h1 id=${favoriteRecipe.id}>${favoriteRecipe.name}</h1>
  <button class="unfavorite-btn" id=${favoriteRecipe.id +1}>Unfavorite</button>
    `
})
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

function filterFavoriteRecipes(event) {
  user.favoriteRecipes.forEach((recipe) => {
    let recipeTags = recipe.tags.forEach((recipeTag) => {
      if(filterDropdown1.value === recipeTag) {
        createFilteredArea();
        filteredByTagArea.innerHTML += `
        <h1 id=${recipe.id}>${recipe.name}</h1>
        `      }
    })
    return recipeTags
  })
}



function goHome() {
  filterFavoritesArea.classList.add("hidden")
  foodImagesSection.innerHTML = ''
  displayNewImages()
  foodImagesSection.classList.remove("hidden");
  allRecipesSection.classList.add("hidden");
  favoriteRecipeArea.classList.add("hidden")
  viewAllButton.classList.remove("hidden");
  displayRecipeSection.classList.add("hidden");
  displayRecipeSection.innerHTML = ''
  filteredByTagArea.innerHTML= "";
  filteredByTagArea.classList.add("hidden");
  allRecipeSearchbar.classList.remove("hidden");
  favoritesSearchbar.classList.add("hidden");
  toCookButtonArea.classList.add("hidden")
    recipesToCookArea.classList.add("hidden")
}
