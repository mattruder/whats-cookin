import apiCalls from './apiCalls';
import getData from './apiCalls';
import Recipe from './classes/Recipe.js';
import User from './classes/User.js';
import RecipeRepository from './classes/RecipeRepository.js';
import Pantry from './classes/Pantry.js';

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
const favoriteSearchbarValue = document.querySelector(".favorite-searchbar")
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
const searchbarValue = document.querySelector(".searchbar")
const errorMessage = document.querySelector(".error-message")

let domUpdates = {



  goHome(recipes) {
  this.removeHidden([foodImagesSection, homePageStyling,
  viewAllButton, allRecipeSearchbar])
  this.addHidden([allRecipesSection, favoriteRecipeArea, myPantryArea,
  filterFavoritesArea, displayRecipeSection, filteredByTagArea,
  favoritesSearchbar, toCookButtonArea, recipesToCookArea])
  foodImagesSection.innerHTML = "";
  displayRecipeSection.innerHTML = "";
  filteredByTagArea.innerHTML= "";
  this.displayNewImages(recipes);
},

viewMyPantry(user, ingredientsData) {
  allRecipeList.innerHTML = ""
  this.addHidden([favoritesSearchbar, favoriteRecipeArea,
  recipesToCookArea, toCookButtonArea, filterFavoritesArea,
foodImagesSection, allRecipesSection, viewAllButton, displayRecipeSection,
filteredByTagArea])
  this.removeHidden([allRecipeSearchbar, myPantryArea])

    ingredientsData.forEach((ingredient) => {
      user.pantry.forEach((ingredientInPantry) => {
          if (ingredient.id === ingredientInPantry.ingredient) {
            myPantryArea.innerHTML += `
            <li class="ingredient-in-pantry" id=${ingredient.id}>${ingredient.name} amount: ${ingredientInPantry.amount}</li>`

          }
      })
    })


},

displayNewImages(array) {
  const images = array.map((recipe) => {
    return recipe.image;
  })
  foodImagesSection.innerHTML += `
  <img src=${images[this.getRandomIndex(images)]} alt="image of food">
  <img src=${images[this.getRandomIndex(images)]} alt="image of food">
  <img src=${images[this.getRandomIndex(images)]} alt="image of food">`
},

getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
},

viewAllRecipes(recipeRepo) {
  allRecipeList.innerHTML = ''
  recipeRepo.data.forEach((recipe) => {
    allRecipeList.innerHTML += `
    <li class="recipe-in-list" id=${recipe.id}>${recipe.name}</li>`
  })
  this.addHidden([recipesToCookArea,
  toCookButtonArea, filterFavoritesArea, foodImagesSection, viewAllButton,
displayRecipeSection, filteredByTagArea, myPantryArea, favoritesSearchbar,
favoriteRecipeArea])

this.removeHidden([allRecipesSection, allRecipeSearchbar])

},

searchRecipe(recipeRepo) {
    filteredByTagArea.innerHTML = ""
    let searchInput = searchbarValue.value
    searchInput = searchInput.toLowerCase();
    recipeRepo.data.map((recipe) => {
        if (searchInput.length > 0 && recipe.name.toLowerCase().includes(searchInput)) {
            this.createFilteredArea();
        filteredByTagArea.innerHTML += `
        <h1 id=${recipe.id}>${recipe.name}</h1>
        `
        searchError.classList.add("hidden");
           searchbarValue.value = ''
        } else if (searchInput.length === 0 || !recipe.name.toLowerCase().includes(searchInput)) {
          console.log('error here')
        }
    })
},



searchFavoriteRecipe(user) {
    filteredByTagArea.innerHTML = ''
    let searchInput = favoriteSearchbarValue.value
    searchInput = searchInput.toLowerCase();
    user.favoriteRecipes.forEach((recipe) => {
        if (searchInput.length > 0 && recipe.name.toLowerCase().includes(searchInput)) {
            this.createFilteredArea();
        filteredByTagArea.innerHTML += `
        <h1 id=${recipe.id}>${recipe.name}</h1>
        `
        searchError.classList.add("hidden");
         favoriteSearchbarValue.value = ''
        }
        else if (searchInput.length === 0 || !recipe.name.toLowerCase().includes(searchInput)) {
          console.log('error here')
        }
    })
    favoriteSearchbarValue.value = ""
},

createFilteredArea() {
  this.addHidden([myPantryArea, filterFavoritesArea, foodImagesSection,
  allRecipesSection, favoriteRecipeArea, displayRecipeSection, toCookButtonArea])
  this.removeHidden([filteredByTagArea, viewAllButton])
  displayRecipeSection.innerHTML = "";
},

displayRecipe(event, recipeRepo, ingredientsData, user) {
  this.createRecipeArea();
  this.populateRecipeArea(recipeRepo, ingredientsData, user);
},

createRecipeArea() {
  displayRecipeSection.innerHTML = "";
  toCookButtonArea.innerHTML = "";
  this.addHidden([myPantryArea, filterFavoritesArea, foodImagesSection, allRecipesSection,
  favoriteRecipeArea, homePageStyling, recipesToCookArea, favoritesSearchbar,
  filteredByTagArea])
  this.removeHidden([allRecipeSearchbar, toCookButtonArea, viewAllButton, displayRecipeSection])

},

populateRecipeArea(recipeRepo, ingredientsData, user) {
  recipeRepo.data.forEach((recipe) => {
    let newRecipeId = recipe.id + 1;
    let newRecipeId2 = recipe.id + 2;
    let newRecipeId3 = recipe.id + 3;
    if(event.target.id === recipe.id.toString()) {
      let recipeToDisplay = new Recipe(recipe, ingredientsData)
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
      <img class="recipe-main-image" src="${recipeToDisplay.image}" alt="image of recipe food">
      <h1>${recipeToDisplay.name}</h1>
      <div class="favorite-btn-area">
       <button class="favorite-btn" id=${recipeToDisplay.id}>Favorite Recipe</button>
      </div>
      <h2>Cost: $${recipeCost}</h2>
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
      this.updateFavoritesArea(user)
      this.displayFavoriteRecipeArea();
    }

    if(event.target.id === newRecipeId2.toString()) {
      addRecipesToCook();
  }
})
},

displayRecipesToCookArea(user) {
  recipesToCookArea.innerHTML = ""
  user.recipesToCook.forEach((recipeToCook) => {
    recipesToCookArea.innerHTML += `
    <div class="recipes-to-cook-styling">
      <h1 id=${recipeToCook.id}>${recipeToCook.name}</h1>
      <button class="cook-recipe-btn" id=${recipeToCook.id + 3}>Cook</button>
    </div>

    `
  })
  this.addHidden([myPantryArea, filterFavoritesArea, favoritesSearchbar, toCookButtonArea,
  filteredByTagArea, foodImagesSection, allRecipesSection, displayRecipeSection,
  favoriteRecipeArea])
  this.removeHidden([viewAllButton, recipesToCookArea, allRecipeSearchbar])

  displayRecipeSection.innerHTML = "";
  foodImagesSection.innerHTML = "";
},

displayFavoriteRecipeArea() {
  this.addHidden([myPantryArea, foodImagesSection, allRecipesSection, displayRecipeSection,
  allRecipeSearchbar, toCookButtonArea, recipesToCookArea])
  this.removeHidden([viewAllButton, favoritesSearchbar, favoriteRecipeArea, filterFavoritesArea])

    displayRecipeSection.innerHTML = "";
    filteredByTagArea.innerHTML= "";
    foodImagesSection.innerHTML = "";
},

addRecipeToFavorites(event, recipeRepo, user) {
  recipeRepo.data.forEach((recipe) => {
    if(event.target.id === recipe.id.toString() && !user.favoriteRecipes.includes(recipe)) {
      user.favoriteRecipe(recipe)
        favoriteRecipeArea.innerHTML = ""
      user.favoriteRecipes.forEach((favoriteRecipe) => {
        favoriteRecipeArea.innerHTML += `
        <div class="favorite-recipe-styling">
          <h1 id=${favoriteRecipe.id}>${favoriteRecipe.name}</h1>
          <button class="unfavorite-btn" id=${favoriteRecipe.id +1}>Unfavorite</button>
        </div>
          `
      })
    }
  })
},

updateFavoritesArea(user) {
  favoriteRecipeArea.innerHTML = ""
  user.favoriteRecipes.forEach((favoriteRecipe) => {
  favoriteRecipeArea.innerHTML += `
  <div class="favorite-recipe-styling">
    <h1 id=${favoriteRecipe.id}>${favoriteRecipe.name}</h1>
    <button class="unfavorite-btn" id=${favoriteRecipe.id +1}>Unfavorite</button>
  </div>
    `
  })
},

addRecipesToCook(event, user, recipeRepo) {
  recipeRepo.data.forEach((recipe) => {
    let recipeId2 = recipe.id + 2;
    if(event.target.id === recipeId2.toString() && !user.recipesToCook.includes(recipe)) {
      user.decideToCook(recipe)
    }
  })
},

filterRecipes(event, recipeRepo) {
  recipeRepo.data.forEach((recipe) => {
    let recipeTags = recipe.tags.forEach((recipeTag) => {
      if(filterDropdown.value === recipeTag) {
        this.createFilteredArea();
        filteredByTagArea.innerHTML += `
        <div class="filtered-recipe-styling">
          <h1 id=${recipe.id}>${recipe.name}</h1>
        </div>
        `      }
    })
    return recipeTags
  })
},

filterFavoriteRecipes(event, user) {
  user.favoriteRecipes.forEach((recipe) => {
    let recipeTags = recipe.tags.forEach((recipeTag) => {
      if(filterDropdown1.value === recipeTag) {
        this.createFilteredArea();
        filteredByTagArea.innerHTML += `
        <section class="filtered-recipe-styling">
          <h1 id=${recipe.id}>${recipe.name}</h1>
        </section>
        `      }
    })
    return recipeTags
  })
},

cookRecipe(event, user, userPantry) {
  userPantry = new Pantry(user)
  user.recipesToCook.forEach((recipe) => {
    let recipeId = recipe.id + 3;
    if(event.target.id === recipeId.toString() && userPantry.determineIngredients(recipe) === false) {
      console.log("you do not have enough ingredients")
    }
    else {
      console.log("you have enough ingredients")
        recipe.ingredients.forEach((recipeIngredient) => {
          let ingredientToRemove = {
            "userID": user.id,
            "ingredientID": recipeIngredient.id,
            "ingredientModification": -recipeIngredient.quantity.amount
          }
          this.removeFromUserPantry(ingredientToRemove)
        })
        user.recipesToCook.forEach((recipeToCook, i) => {
          if(recipeToCook.id === recipe.id) {
            console.log("i ", i)
            user.recipesToCook.splice(i, 1)
            console.log("recipes to cook")
          }
        })

    }

  })

},

removeFromUserPantry(ingredientToRemove) {
  fetch(`http://localhost:3001/api/v1/users`, {
  method: 'POST',
  body: JSON.stringify(ingredientToRemove),
  headers: {
      'Content-Type' : 'application/json'
  }
  })
  .then(response => {
    this.checkError(response)
  })
  .catch(err => setTimeout(errorMessage.classList.remove('hidden'), 1000))
},

addToUserPantry(ingredientToAdd) {
  fetch(`http://localhost:3001/api/v1/users`, {
      method: 'POST',
      body: JSON.stringify(ingredientToAdd),
      headers: {
          'Content-Type' : 'application/json'
      }
  })
  .then(response => response.json())
  .then(this.checkError())
  .catch(err => console.log('ERROR'))
},

removeHidden(array) {
  array.forEach((element) => {
    element.classList.remove("hidden")
  })
},

addHidden(array) {
  array.forEach((element) => {
    element.classList.add("hidden")
  })
},

checkError(response) {
  if(response.status >= 200 && response.status <= 299) {
    return response.json()
  } else {
    throw Error(response.statusText)
    console.log(response.statusText)
  }
}

}

export default domUpdates
