const { boatInventory } = require("./fishingBoat.js")
const { mongerInventory, adjustedMenu } = require("./fishMonger.js")

const fishMenu = (chefPriceRange) => { //filters down and returns a array of fish with price less than chefPrice
    const mongerInv = mongerInventory(7.50, 10, boatInventory)
    return mongerInv.filter(fish => fish.price <= chefPriceRange)
}

const menuMaker = (menuInv) => {  //Creates a HTML document for the menu using the information from the array provided
    let headerHTML = "<h1>Menu</h1>"
    const returnvalue = menuInv.map(meal => {
    
     let htmlDOC = ''
     htmlDOC += `\n\t<h2>${meal.species}</h2>\n\t<section class="menu__item>${meal.species} Soup</section>\n\t<section class="menu__item>${meal.species} Sandwich</section>\n\t<section class="menu__item>Grilled ${meal.species}</section>\n`
        
     return htmlDOC
    }).join('')
    return headerHTML += '\n<article class="menu">\n' + returnvalue  + '\n</article>'

    }
    
    module.exports = { fishMenu, menuMaker}

/* <h1>Menu</h1>
<article class="menu">
    <h2>Tuna</h2>
    <section class="menu__item">Tuna Soup</section>
    <section class="menu__item">Tuna Sandwich</section>
    <section class="menu__item">Grilled Tuna</section>
</article> */