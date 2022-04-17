import './styles.css';
import apiCalls from './apiCalls';
import getData from './apiCalls';
import Recipe from './classes/Recipe.js';
import User from './classes/User.js';
import RecipeRepository from './classes/RecipeRepository.js';
import Pantry from './classes/Pantry.js';

let allData = [];
let userData;
let user;
let recipeRepo;
let recipes;
let ingredientsData;
let userPantry;

const addToUserPantry = (ingredientToAdd) => {
  fetch(`http://localhost:3001/api/v1/users`, {
      method: 'POST',
      body: JSON.stringify(ingredientToAdd),
      headers: {
          'Content-Type' : 'application/json'
      }
  })
  .then(response => response.json())
  .catch(err => console.log('ERROR'))
}

const removeFromUserPantry = (ingredientToRemove) => {
  fetch(`http://localhost:3001/api/v1/users`, {
  method: 'POST',
  body: JSON.stringify(ingredientToRemove),
  headers: {
      'Content-Type' : 'application/json'
  }
})
.then(response => response.json())
.catch(err => console.log('ERROR'))
}

getData().then(data => {
  allData.push(data)
  userData = allData[0][0]
  ingredientsData = allData[0][1]
  recipes = allData[0][2]
  user = new User(userData[9])
  userPantry = new Pantry(user)
  recipeRepo = new RecipeRepository(recipes)
  displayNewImages()
})

let postVar = {
  "userID": 10,
  "ingredientID": 1125,
  "ingredientModification": 20
}

let postVar1 = {
  "userID": 10,
  "ingredientID": 1077,
  "ingredientModification": 20
}



const viewAllButton = document.querySelector(".view-all-btn");
const foodImagesSection = document.querySelector(".food-images-section");
const allRecipesSection = document.querySelector(".all-recipes");
const allRecipeList = document.querySelector(".all-recipe-list");
const homeButton = document.querySelector(".home-btn");
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

myPantryBtn.addEventListener("click", viewMyPantry)

recipesToCookArea.addEventListener("click", (event) => {
  cookRecipe(event)
})

function cookRecipe(event) {

  // getData().then(data => {
  //   allData.push(data)
  //   userData = allData[0][0]
  //   ingredientsData = allData[0][1]
  //   recipes = allData[0][2]
  //   user = new User(userData[9])
  //   userPantry = new Pantry(user)
  //   recipeRepo = new RecipeRepository(recipes)
  // })

  user.recipesToCook.forEach((recipe) => {
    let recipeId = recipe.id + 3;
    userPantry.ingredients = user.pantry
    if(event.target.id === recipeId.toString() && userPantry.determineIngredients(recipe.id) === 'You do not have enough ingredients to cook this recipe.') {
      console.log("you do not have enough ingredients")

    }
    if(event.target.id === recipeId.toString() && userPantry.determineIngredients(recipe.id) === 'You have enough ingredients') {
        console.log("you have enough ingredients")
        console.log("recipe: ", recipe)

        recipe.ingredients.forEach((recipeIngredient) => {
          let ingredientToRemove = {
            "userID": user.id,
            "ingredientID": recipeIngredient.id,
            "ingredientModification": -recipeIngredient.quantity.amount
          }
          removeFromUserPantry(ingredientToRemove)
        })

        user.recipesToCook.forEach((recipeToCook, i) => {
          if(recipeToCook.id === recipe.id) {
            console.log("i ", i)
            user.recipesToCook.splice(i, 1)
            console.log("recipes to cook")
          }
        })



        console.log("user pantry after: ", userPantry)

    }

  })

}

viewAllButton.addEventListener("click", viewAllRecipes);
homeButton.addEventListener("click", goHome);
searchBtn.addEventListener("click", searchRecipe);
favoriteSearchBtn.addEventListener("click", searchFavoriteRecipe);
allRecipeList.addEventListener("click", (event) => {
  displayRecipe(event);
});
displayRecipeSection.addEventListener("click", (event) => {
  addRecipeToFavorites(event);
});
viewToCookFromFavorites.addEventListener("click", displayRecipesToCookArea);
toCookButtonArea.addEventListener("click", addRecipesToCook);
favoritesAreaButton.addEventListener("click", displayFavoriteRecipeArea);
recipesToCookButton.addEventListener("click", displayRecipesToCookArea);
favoriteRecipeArea.addEventListener("click", (event) => {
  displayRecipe(event);
});
recipesToCookArea.addEventListener("click", (event) => {
  displayRecipe(event);
});
filterButton.addEventListener("click", (event) => {
  filterRecipes(event);
});
filteredByTagArea.addEventListener("click", (event) => {
  displayRecipe(event);
});
filterFavoritesBtn.addEventListener("click", (event) => {
  filterFavoriteRecipes(event)
});

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function displayNewImages() {
  const images = recipes.map((recipe) => {
    return recipe.image;
  });

  foodImagesSection.innerHTML += `
  <img src=${images[getRandomIndex(images)]}>
  <img src=${images[getRandomIndex(images)]}>
  <img src=${images[getRandomIndex(images)]}>`
};

function viewAllRecipes() {
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
};

function viewMyPantry() {
  userPantry.ingredients = user.pantry
  console.log("user.pantry: ", user.pantry)
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


};



function searchRecipe() {
    filteredByTagArea.innerHTML = ""
    let searchInput = document.querySelector(".searchbar").value
    searchInput = searchInput.toLowerCase();
    recipeRepo.data.forEach((recipe) => {
        if (recipe.name.toLowerCase().includes(searchInput)) {
            createFilteredArea();
        filteredByTagArea.innerHTML += `
        <h1 id=${recipe.id}>${recipe.name}</h1>
        `
        }
    })
    document.querySelector(".searchbar").value = ''
};

function searchFavoriteRecipe() {
    filteredByTagArea.innerHTML = ''
    let searchInput = document.querySelector(".favorite-searchbar").value
    searchInput = searchInput.toLowerCase();
    user.favoriteRecipes.forEach((recipe) => {
        if (recipe.name.toLowerCase().includes(searchInput)) {
            createFilteredArea();
        filteredByTagArea.innerHTML += `
        <h1 id=${recipe.id}>${recipe.name}</h1>
        `
        }
    })
    document.querySelector(".favorite-searchbar").value = ""
};

function displayRecipe(event) {
  createRecipeArea();
  populateRecipeArea();
};

function createRecipeArea() {
  myPantryArea.classList.add("hidden")
  filterFavoritesArea.classList.add("hidden");
  foodImagesSection.classList.add("hidden");
  allRecipesSection.classList.add("hidden");
  favoriteRecipeArea.classList.add("hidden");
  homePageStyling.classList.add("hidden");
  viewAllButton.classList.remove("hidden");
  displayRecipeSection.classList.remove("hidden");
  displayRecipeSection.innerHTML = "";
  toCookButtonArea.innerHTML = "";
  filteredByTagArea.classList.add("hidden");
  allRecipeSearchbar.classList.remove("hidden");
  favoritesSearchbar.classList.add("hidden");
  toCookButtonArea.classList.remove("hidden");
  recipesToCookArea.classList.add("hidden");
};

function createFilteredArea() {
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
};

function populateRecipeArea() {
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
      <img class="recipe-main-image" src="${recipeToDisplay.image}">
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
      updateFavoritesArea()
      displayFavoriteRecipeArea();
    }

    if(event.target.id === newRecipeId2.toString()) {
      addRecipesToCook();
  }

//   if(event.target.id === newRecipeId3.toString()) {
//     // console.log(event.target.id)
//     cookRecipe();
// }
})
};


function displayFavoriteRecipeArea() {
  myPantryArea.classList.add("hidden")
  filterFavoritesArea.classList.remove("hidden");
  foodImagesSection.innerHTML = "";
  foodImagesSection.classList.add("hidden");
  allRecipesSection.classList.add("hidden");
  viewAllButton.classList.remove("hidden");
  displayRecipeSection.classList.add("hidden");
  displayRecipeSection.innerHTML = "";
  filteredByTagArea.innerHTML= "";
  favoriteRecipeArea.classList.remove("hidden");
  allRecipeSearchbar.classList.add("hidden");
  favoritesSearchbar.classList.remove("hidden");
  toCookButtonArea.classList.add("hidden");
  recipesToCookArea.classList.add("hidden");
};

function displayRecipesToCookArea() {
  console.log(user.recipesToCook)
  recipesToCookArea.innerHTML = ""
  user.recipesToCook.forEach((recipeToCook) => {
    recipesToCookArea.innerHTML += `
    <div class="recipes-to-cook-styling">
    <h1 id=${recipeToCook.id}>${recipeToCook.name}</h1>
    <button class="cook-recipe-btn" id=${recipeToCook.id + 3}>Cook</button>
    </div>

    `
  })
  myPantryArea.classList.add("hidden")
  filterFavoritesArea.classList.add("hidden");
  foodImagesSection.innerHTML = "";
  foodImagesSection.classList.add("hidden");
  allRecipesSection.classList.add("hidden");
  viewAllButton.classList.remove("hidden");
  displayRecipeSection.classList.add("hidden");
  displayRecipeSection.innerHTML = "";
  favoriteRecipeArea.classList.add("hidden");
  recipesToCookArea.classList.remove("hidden");
  allRecipeSearchbar.classList.remove("hidden");
  favoritesSearchbar.classList.add("hidden");
  toCookButtonArea.classList.add("hidden");
  filteredByTagArea.classList.add("hidden");
};

function addRecipeToFavorites(event) {
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
};

function addRecipesToCook(event) {
  recipeRepo.data.forEach((recipe) => {
    let recipeId2 = recipe.id + 2;
    if(event.target.id === recipeId2.toString() && !user.recipesToCook.includes(recipe)) {
      user.decideToCook(recipe)
      // recipesToCookArea.innerHTML = ""
      // user.recipesToCook.forEach((recipeToCook) => {
      //   recipesToCookArea.innerHTML += `
      //   <div class="recipes-to-cook-styling">
      //   <h1 id=${recipeToCook.id}>${recipeToCook.name}</h1>
      //   <button class="cook-recipe-btn" id=${recipeToCook.id + 3}>Cook</button>
      //   </div>
      //
      //   `
      // })
    }
  })
};

function updateFavoritesArea() {
  favoriteRecipeArea.innerHTML = ""
  user.favoriteRecipes.forEach((favoriteRecipe) => {
  favoriteRecipeArea.innerHTML += `
  <div class="favorite-recipe-styling">
  <h1 id=${favoriteRecipe.id}>${favoriteRecipe.name}</h1>
  <button class="unfavorite-btn" id=${favoriteRecipe.id +1}>Unfavorite</button>
  </div>
    `
})
};

function filterRecipes(event) {
  recipeRepo.data.forEach((recipe) => {
    let recipeTags = recipe.tags.forEach((recipeTag) => {
      if(filterDropdown.value === recipeTag) {
        createFilteredArea();
        filteredByTagArea.innerHTML += `
        <div class="filtered-recipe-styling">
        <h1 id=${recipe.id}>${recipe.name}</h1>
        </div>
        `      }
    })
    return recipeTags
  })
};

function filterFavoriteRecipes(event) {
  user.favoriteRecipes.forEach((recipe) => {
    let recipeTags = recipe.tags.forEach((recipeTag) => {
      if(filterDropdown1.value === recipeTag) {
        createFilteredArea();
        filteredByTagArea.innerHTML += `
        <section class="filtered-recipe-styling">
        <h1 id=${recipe.id}>${recipe.name}</h1>
        </section>
        `      }
    })
    return recipeTags
  })
};

function goHome() {
  console.log("user pantry before: ", userPantry)
  // addToUserPantry(postVar)
  // addToUserPantry(postVar1)
  console.log("user pantry after!: ", userPantry)
  myPantryArea.classList.add("hidden")
  filterFavoritesArea.classList.add("hidden");
  foodImagesSection.innerHTML = "";
  displayNewImages();
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
};
