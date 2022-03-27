import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
import recipeData from '../src/data/recipes.js';

describe('Recipe', () => {

  let recipeRepository;

  beforeEach(() => {
    recipeRepository = new RecipeRepository(recipeData)
  })

  it.skip('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });
  it.skip('should have the recipes', () => {
    expect(recipeRepository.data).to.equal(recipeData)
  })
  it('should filter recipe by tag', () => {

    recipeRepository.getRecipeByTag(`hor d'oeuvre`)
    console.log(recipeRepository.recipes)
    expect(recipeRepository.recipes.length).to.equal(9)
  })
})