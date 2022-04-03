// Your fetch requests will live here!
let users = `https://what-s-cookin-starter-kit.herokuapp.com/api/v1/users`
let ingredients = `https://what-s-cookin-starter-kit.herokuapp.com/api/v1/ingredients`
let recipes = `https://what-s-cookin-starter-kit.herokuapp.com/api/v1/recipes`



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
}

const fetchIngredient = () => {
    return fetch(ingredients)
    .then(response => response.json())
}

const fetchRecipes = () => {
    return fetch(recipes)
    .then(response => response.json())
}


export default getData;
