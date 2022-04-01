import { expect } from 'chai';
import Recipe from '../src/classes/Recipe';
import recipeData from '../src/data/recipes.js';
import usersData from '../src/data/users.js';
import User from '../src/classes/User';
import RecipeRepository from '../src/classes/RecipeRepository';

describe('User', () => {

    let recipe;
    let recipeRepository;
    let porkchopRecipe;
    let user;
  
  
    beforeEach(() => {
      recipeRepository = new RecipeRepository(recipeData)
      porkchopRecipe = recipeRepository.getRecipeByName("Maple Dijon Apple Cider Grilled Pork Chops")
      recipe = new Recipe(porkchopRecipe[0])
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

})