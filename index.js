// Code your solution here
function findMatching(arr, match) {
    const names = arr.filter(element => element.toLowerCase() === match.toLowerCase())
    return names;
}

function fuzzyMatch(arr, match) {
    const names = arr.filter(element => element.slice(0,match.length) === match)
    return names;
} 
    
function matchName(arr, match) {
    const names = arr.filter(element => element.name === match)
    return names;
}
