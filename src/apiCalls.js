// Your fetch requests will live here!
let users = `http://localhost:3001/api/v1/users`
let ingredients = `http://localhost:3001/api/v1/ingredients`
let recipes = `http://localhost:3001/api/v1/recipes`



const getData = () => {
    return Promise.all([
        fetchUserData(),
        fetchIngredient(),
        fetchRecipes()
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


export default getData;
