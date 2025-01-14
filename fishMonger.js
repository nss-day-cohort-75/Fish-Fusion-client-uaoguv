const { boatInventory } = require("./fishingBoat.js")

const inventoryForPurchase = boatInventory()

const mongerInventory = (lowPrice, fishAmount) => { //filters down and returns a array of fish that are less than lowPrice and higher than fishAmount
    return inventoryForPurchase.filter(fish => fish.price <= lowPrice)
    .filter(fish => fish.amount > fishAmount)
}

const chefPrice = (chefPriceRange) => { //invokes the mongerInventory to filter down and return an array of fish with price less than chefPrice
    return mongerInventory(chefPriceRange, 10)
}


module.exports = { mongerInventory, chefPrice, inventoryForPurchase}