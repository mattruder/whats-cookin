import { expect } from 'chai';
import Pantry from '../src/classes/Pantry';
import User from '../src/classes/User';

describe('Pantry', () => {
    let user;
    let pantry;
    let recipe;
    beforeEach(() => {

    const userInfo =
            {
              "name": "Saige O'Kon",
              "id": 1,
              "pantry": [
                {
                  "ingredient": 1009016,
                  "amount": 2
                },
                {
                  "ingredient": 9003,
                  "amount": 3
                },
                {
                  "ingredient": 20027,
                  "amount": 2
                },
                {
                  "ingredient": 11215,
                  "amount": 5
                },
                {
                  "ingredient": 2047,
                  "amount": 6
                },
                {
                  "ingredient": 8901,
                  "amount": 1.5
                  }

               ]
            }
        user = new User(userInfo)
        pantry = new Pantry(user)
        recipe = {
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
                "id": 8901,
                "quantity": {
                  "amount": 1,
                  "unit": "tablespoon"
                }
              },
              {
                "id": 20027,
                "quantity": {
                  "amount": 1,
                  "unit": "tablespoon"
                }
              },
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
    })

    it('Should be a function', () => {
        expect(Pantry).to.be.a('function');
      });

    it('Should instantiate a new pantry', () => {
        expect(pantry).to.be.an.instanceof(Pantry);
      });

    it(`Should contain the user's ingredients`, () => {
        expect(pantry.ingredients).to.deep.equal(user.pantry)
    })

    it(`Should determine whether a user's pantry has enough ingredients`, () => {
        user.decideToCook(recipe)
      console.log('user: ', user)

// console.log('2nd user log: ', user)

        expect(pantry.enoughIngredients).to.equal(true)
        expect(pantry.determineIngredients(678353)).to.equal('You have enough ingredients')
    })



})
