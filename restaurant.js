const { chefPrice, inventoryForPurchase } = require("./fishMonger.js")


const adjustedInventory = (price) => { //updates the inventoryForPurchase without the fish the chef purchased
    chefPrice(price).filter(fish => {
        inventoryForPurchase.filter(object => {
            if (object.species === fish.species){
                object.amount /= 2}
            })
        })
        return inventoryForPurchase
    }
    

const fishMenu = (price) => {  //Creates a HTML document for the menu using the information from the array provided
    menuInv = chefPrice(price)
    let headerHTML = "<h1>Menu</h1>"
    const returnvalue = menuInv.map(meal => {
    
     let htmlDOC = ''
     htmlDOC += `\n\t<h2>${meal.species}</h2>\n\t<section class="menu__item>${meal.species} Soup</section>\n\t<section class="menu__item>${meal.species} Sandwich</section>\n\t<section class="menu__item>Grilled ${meal.species}</section>\n`
        
     return htmlDOC
    }).join('')


   
    console.log(headerHTML += '\n<article class="menu">\n' + returnvalue  + '\n</article>')
    console.log("\nAdjusted Inventory")
    console.log("---------------------")
    return adjustedInventory(price)
    }
    
    module.exports = { fishMenu, adjustedInventory }

