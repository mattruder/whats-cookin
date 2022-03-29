import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
import recipeData from '../src/data/recipes.js';

describe('Recipe Repository', () => {

  let recipeRepository;
  //let recipe;

  beforeEach(() => {
    //recipe = new Recipe(recipeData)
    recipeRepository = new RecipeRepository(recipeData)
  })

  it.skip('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });
  it.skip('should have the recipes', () => {
    expect(recipeRepository.data).to.equal(recipeData)
  })
  it.skip('should filter recipe by tag', () => {

    recipeRepository.getRecipeByTag(`hor d'oeuvre`)
    expect(recipeRepository.recipes.length).to.equal(9)
  })
  it.skip('should filter recipe by name', () => {

    recipeRepository.getRecipeByName(`Dirty Steve`)
    expect(recipeRepository.recipes.length).to.equal(1)
    console.log(recipeRepository.recipes)
  })
})
