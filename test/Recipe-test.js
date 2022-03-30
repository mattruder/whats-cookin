import { expect } from 'chai';
import Recipe from '../src/classes/Recipe';
import RecipeRepository from '../src/classes/RecipeRepository';
import recipeData from '../src/data/recipes.js';

describe('Recipe', () => {

  let recipe;
  let recipeRepository;
  let porkchopRecipe;

  beforeEach(() => {
    recipeRepository = new RecipeRepository(recipeData)
    porkchopRecipe = recipeRepository.getRecipeByName("Maple Dijon Apple Cider Grilled Pork Chops")
    recipe = new Recipe(porkchopRecipe[0])
  });

  it('Should be a function', () => {
    expect(Recipe).to.be.a('function');
  });

  it('Should have a name', () => {
    expect(recipe.name).to.equal('Maple Dijon Apple Cider Grilled Pork Chops');
});

  it('Should have an id', () => {
    expect(recipe.id).to.equal(678353);
});

  it('Should have an image', () => {
    expect(recipe.image).to.equal("https://spoonacular.com/recipeImages/678353-556x370.jpg");
});

  it('Should have ingredients', () => {
    expect(recipe.ingredients.length).to.equal(12);
});

  it('Should have tags', () => {
    expect(recipe.tags.length).to.equal(4);
});

  it.skip('Should get ingredient ids', () => {
    recipe.createIngredientList()
    //expect(recipeRepository.recipes.length).to.equal(9)
})

  it.skip('Should list an array of ingredients', () => {
    recipe.createIngredientList()
    expect(recipe.ingredientsList.length).to.equal(12)
})

  it('Should calculate recipe cost', () => {
  expect(recipe.getRecipeCost()).to.be.a('number')
  expect(recipe.getRecipeCost()).to.equal(272.97)
})

  it('Should return instructions', () => {
  expect(recipe.getRecipeInstructions()).to.be.a('string')
  expect(recipe.getRecipeInstructions()).to.equal("Season the pork chops with salt and pepper and grill or pan fry over medium high heat until cooked, about 3-5 minutes per side. (If grilling, baste the chops in the maple dijon apple cider sauce as you grill.)Meanwhile, mix the remaining ingredients except the apple slices, bring to a simmer and cook until the sauce thickens, about 2-5 minutes.Grill or saute the apple slices until just tender but still crisp.Toss the pork chops and apple slices in the maple dijon apple cider sauce and enjoy!")
})

});
