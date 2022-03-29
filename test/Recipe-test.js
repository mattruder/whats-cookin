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

  it('Should get ingredient ids', () => {
    recipe.createIngredientList()
    //expect(recipeRepository.recipes.length).to.equal(9)
})

  it('Should list an array of ingredients', () => {
    recipe.createIngredientList()
    expect(recipe.ingredientsList.length).to.equal(12)
})

});
