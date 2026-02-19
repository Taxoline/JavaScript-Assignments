/*
  Write a function `getUniqueElements` which takes an array as input and returns a new array containing only the unique elements from the input array.

  What are unique elements?
  - Elements that appear only once in the array or the first occurrence of each element in case of duplicates.

  Example:
  - Input: [10, 20, 30, 10, 40, 20]
  - Output: [10, 20, 30, 40]

  - Input: [1, 2, 3, 4, 5]
  - Output: [1, 2, 3, 4, 5]

  - Input: []
  - Output: []

  just to test

  Once you've implemented the logic, test your code by running
  - `npm run test-unique`
*/

function getUniqueElements(arr) {
  let seen=new Set();
  let narr=[];

  for(let num of arr){

    
    if(!seen.has(num)){
      narr.push(num);
      seen.add(num);
    }
    
  }
  return narr;
}

module.exports = getUniqueElements;