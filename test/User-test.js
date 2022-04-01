import { expect } from 'chai';
import Recipe from '../src/classes/Recipe';
import recipeData from '../src/data/recipes.js';
import usersData from '../src/data/users.js';
import User from '../src/classes/User';
import RecipeRepository from '../src/classes/RecipeRepository';

describe('User', () => {

    let recipe;
    let recipe2;
    let recipeRepository;
    let porkchopRecipe;
    let chocoCookie;
    let user;
  
  
    beforeEach(() => {
      recipeRepository = new RecipeRepository(recipeData)
      porkchopRecipe = recipeRepository.getRecipeByName("Maple Dijon Apple Cider Grilled Pork Chops")
      chocoCookie = recipeRepository.getRecipeByName("Loaded Chocolate Chip Pudding Cookie Cups")
      recipe = new Recipe(porkchopRecipe[0])
      recipe2 = new Recipe(chocoCookie[0])
      user = new User(usersData[0])
    });

    it('should be a function', () => {
        expect(User).to.be.a('function')
    })

    it('should instantiate a instance of User', () => {
        expect(user).to.be.an.instanceOf(User)
    })

    it('should not have any favoriteRecipes', () => {
        expect(user.favoriteRecipes).to.deep.equal([])
    })

    it('should have a name', () => {
        expect(user.name).to.equal("Saige O'Kon")
    })

    it('should have an id', () => {
        expect(user.id).to.equal(1)
    })

    it('should have a pantry', () => {
        expect(user.pantry.length).to.equal(35)
    })

    it('should have a recipe to cook', () => {
        expect(user.recipesToCook).to.deep.equal([])
    })

    it('should have a favorite recipe', () => {
        user.favoriteRecipe(recipe)
        expect(user.favoriteRecipes).to.deep.equal([recipe])
    })

    it('should not favorite the same recipe', () => {
        user.favoriteRecipe(recipe)
        user.favoriteRecipe(recipe)
        expect(user.favoriteRecipes).to.deep.equal([recipe])
    })

    it('should remove a favorite recipe', () => {
        user.favoriteRecipe(recipe)
        user.unfavoriteRecipe(recipe)
        expect(user.favoriteRecipes).to.deep.equal([])
    })

    it('should decide a recipe to cook', () => {
        user.decideToCook(recipe)
        expect(user.recipesToCook).to.deep.equal([recipe])
    })

    it('should have filtered favorite recipes', () => {
        expect(user.filteredFavoriteRecipes).to.deep.equal([])
    })

    it('should filter recipe by tag', () => {
        user.favoriteRecipe(recipe)
        user.favoriteRecipe(recipe2)
        user.filterFavoriteRecipeByTag('antipasti')
        expect(user.filteredFavoriteRecipes).to.deep.equal([recipe2])
    })

    it('should filter recipe by name', () => {
        user.favoriteRecipe(recipe)
        user.favoriteRecipe(recipe2)
        user.filterFavoriteRecipeByName('Loaded Chocolate Chip Pudding Cookie Cups')
        expect(user.filteredFavoriteRecipes).to.deep.equal([recipe2])
    })

})