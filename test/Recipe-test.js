import { expect } from 'chai';
import Recipe from '../src/classes/Recipe';

describe('Recipe', () => {

  let porkchopRecipe;
  let recipe;

  beforeEach(() => {
    porkchopRecipe = {
      "id": 678353,
      "image": "https://spoonacular.com/recipeImages/678353-556x370.jpg",
      "ingredients": [
        {
          "id": 1009016,
          "quantity": {
            "amount": 1.5,
            "unit": "cups"
          }
        },
        {
          "id": 9003,
          "quantity": {
            "amount": 2,
            "unit": ""
          }
        },
        {
          "id": 20027,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        },
        {
          "id": 1002046,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        },
        {
          "id": 11215,
          "quantity": {
            "amount": 1,
            "unit": "clove"
          }
        },
        {
          "id": 1012046,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        },
        {
          "id": 19911,
          "quantity": {
            "amount": 0.25,
            "unit": "cup"
          }
        },
        {
          "id": 16112,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        },
        {
          "id": 10010062,
          "quantity": {
            "amount": 24,
            "unit": "ounce"
          }
        },
        {
          "id": 1102047,
          "quantity": {
            "amount": 4,
            "unit": "servings"
          }
        },
        {
          "id": 16124,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        },
        {
          "id": 1016168,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Season the pork chops with salt and pepper and grill or pan fry over medium high heat until cooked, about 3-5 minutes per side. (If grilling, baste the chops in the maple dijon apple cider sauce as you grill.)Meanwhile, mix the remaining ingredients except the apple slices, bring to a simmer and cook until the sauce thickens, about 2-5 minutes.Grill or saute the apple slices until just tender but still crisp.Toss the pork chops and apple slices in the maple dijon apple cider sauce and enjoy!",
          "number": 1
        }
      ],
      "name": "Maple Dijon Apple Cider Grilled Pork Chops",
      "tags": [
        "lunch",
        "main course",
        "main dish",
        "dinner",
        "hor d'oeuvre"
      ]
    }
    recipe = new Recipe(porkchopRecipe)
  });

  it('Should be a function', () => {
    expect(Recipe).to.be.a('function');
  });

  it('Should instantiate a new Recipe ', () => {
    expect(recipe).to.be.an.instanceof(Recipe);
  });

  it('Should have a recipe name', () => {
    expect(recipe.name).to.equal('Maple Dijon Apple Cider Grilled Pork Chops');
});

  it('Should have a recipe id', () => {
    expect(recipe.id).to.equal(678353);
});

  it('Should have a recipe image', () => {
    expect(recipe.image).to.equal("https://spoonacular.com/recipeImages/678353-556x370.jpg");
});

  it('Should have a list of ingredients', () => {
    expect(recipe.ingredients.length).to.equal(12);
});

  it('Should have recipe tags', () => {
    expect(recipe.tags.length).to.equal(5);
});

  it('Should be able to get ingredient ids', () => {
    recipe.createIngredientList()
    expect(recipe.ingredientsList[0].id).to.equal(1009016)
});

  it('Should list an array of ingredients', () => {
    recipe.createIngredientList()
    expect(recipe.ingredientsList.length).to.equal(12)
});

  it('Should calculate the recipe cost', () => {
  expect(recipe.getRecipeCost()).to.be.a('number')
  expect(recipe.getRecipeCost()).to.equal(272.97)
});

  it('Should return cooking instructions', () => {
  expect(recipe.getRecipeInstructions()).to.be.a('string')
  expect(recipe.getRecipeInstructions()).to.equal("Season the pork chops with salt and pepper and grill or pan fry over medium high heat until cooked, about 3-5 minutes per side. (If grilling, baste the chops in the maple dijon apple cider sauce as you grill.)Meanwhile, mix the remaining ingredients except the apple slices, bring to a simmer and cook until the sauce thickens, about 2-5 minutes.Grill or saute the apple slices until just tender but still crisp.Toss the pork chops and apple slices in the maple dijon apple cider sauce and enjoy!")
});

});
