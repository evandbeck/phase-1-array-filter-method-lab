// Code your solution here
const drivers = []

function findMatching(drivers, string) {
    return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(driver => driver.toLowerCase().substring(0, string.length) === string.toLowerCase())
}

function matchName(drivers, string) {
    return drivers.filter(driver => driver.name === string)
}