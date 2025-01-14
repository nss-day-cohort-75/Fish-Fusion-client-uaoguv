const { fishMenu } = require("./restaurant.js")
const { menuMaker } = require("./restaurant.js")


const dailyPriceLimit = 3.99
const menu = fishMenu(dailyPriceLimit)
console.log(menu)

console.log(menuMaker(menu))
// leave this code 

