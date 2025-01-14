const { boatInventory } = require("./fishingBoat.js")

const mongerInventory = (lowPrice, fishAmount, inventory) => { //filters down and returns a array of fish that are less than lowPrice and higher than fishAmount
    return inventory.filter(fish => fish.price <= lowPrice)
    .filter(fish => fish.amount > fishAmount)
}

const adjustedMenu = (newInventory) => { //divides the amount of fish in inventory by 2 and returns new array
    const menuItems = newInventory.map(fish => {
    fish.amount /= 2
    return fish
})
return menuItems
}

module.exports = { mongerInventory, adjustedMenu}