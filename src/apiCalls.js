// Your fetch requests will live here!
let users = `https://what-s-cookin-starter-kit.herokuapp.com/api/v1/users`
fetch(users)
.then(response => response.json())
// .then(data => console.log(data))

let ingredients = `https://what-s-cookin-starter-kit.herokuapp.com/api/v1/ingredients`
fetch(ingredients)
.then(response => response.json())
// .then(data => console.log('ingredients', data))

let recipes = `https://what-s-cookin-starter-kit.herokuapp.com/api/v1/recipes`
fetch(recipes)
.then(response => response.json())
// .then(data => console.log('recipe', data))
// console.log('I will be a fetch request!')

