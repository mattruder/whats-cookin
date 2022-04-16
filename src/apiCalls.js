// Your fetch requests will live here!
let users = `http://localhost:3001/api/v1/users`
let ingredients = `http://localhost:3001/api/v1/ingredients`
let recipes = `http://localhost:3001/api/v1/recipes`



const getData = () => {
    return Promise.all([
        fetchUserData(),
        fetchIngredient(),
        fetchRecipes()
        // addToUserPantry(),
        // removeFromUserPantry()
    ])
}

const fetchUserData = () => {
    return fetch(users)
    .then(response => response.json())
    .catch(err => console.log('ERROR'))
}

const fetchIngredient = () => {
    return fetch(ingredients)
    .then(response => response.json())
    .catch(err => console.log('ERROR'))
}

const fetchRecipes = () => {
    return fetch(recipes)
    .then(response => response.json())
    .catch(err => console.log('ERROR'))
}

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


export default getData;
