/*
Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

The geese are any strings in the following array, which is pre-populated in your solution:

     let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

For example, if this array were passed as an argument:

     let birds = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]

Your function would return the following array:

     let filteredBirds = ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

*/

function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

  return birds.filter((bird) => !geese.includes(bird));
  // return an array containing all of the strings in the input array except those that match strings in geese
}
// console.log tests
console.log(
  gooseFilter([
    "Mallard",
    "Hook Bill",
    "African",
    "Crested",
    "Pilgrim",
    "Toulouse",
    "Blue Swedish",
  ])
); // --> ['Mallard', 'Hook Bill', 'Crested', 'Blue Swedish']
