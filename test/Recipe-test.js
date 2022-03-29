import { expect } from 'chai';
import Recipe from '../src/classes/Recipe';
import RecipeRepository from '../src/classes/RecipeRepository';
import recipeData from '../src/data/recipes.js';

describe('Recipe', () => {

  let recipe;
  let recipeRepository;

  beforeEach(() => {
    recipe = new Recipe(recipeData)
    recipeRepository = new RecipeRepository(recipeData)
  });

  it('Should be a function', () => {
    expect(Recipe).to.be.a('function');
  });



});
