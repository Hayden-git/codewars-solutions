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
  let geese = [
    "African Geese",
    "Roman Tufted Geese",
    "Toulouse Geese",
    "Pilgrim Geese",
    "Steinbacher Geese",
  ];

  return birds.filter((bird) => !geese.includes(bird));
  // return an array containing all of the strings in the input array except those that match strings in geese
}
// console.log tests
console.log(
  gooseFilter([
    "Mallard",
    "Hook Bill",
    "African Geese",
    "Crested",
    "Pilgrim Geese",
    "Toulouse Geese",
    "Blue Swedish",
  ])
); // --> ['Mallard', 'Hook Bill', 'Crested', 'Blue Swedish']

/* Explanation: the provided function is an arrow function (bird) => !geese.includes(bird). This function takes a bird (an element from the birds array) as an argument and returns true if bird is not included in the geese array (!geese.includes(bird)), and false otherwise.

 The .filter() method creates a new array with all elements that pass the test implemented by the provided function. In this case, the provided function is the arrow function described above. The filter() method returns an array of all elements in the birds array that are not included in the geese array.

 The .includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate. By using the logical NOT operator ! in front of geese.includes(bird), the function inverts the result, so it returns true for birds that are not geese, and false for birds that are geese.

 Then, the .filter() method filters out the geese from the list of birds.
*/
