const { boatInventory } = require("./fishingBoat.js")

const fishMonger = (lowPrice, fishAmount, inventory) => {
    
    return inventory.filter(fish => fish.price < lowPrice)
    .filter(fish => fish.amount > fishAmount)
}

const chefPrice = (chefPriceRange, inventory) => {
    
    return inventory.filter(fish => fish.price < chefPriceRange)
}

module.exports = { fishMonger, chefPrice }

