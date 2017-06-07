/*
Create a function called 'reject'.  
Reject should work in the opposite way of 'filter'
if a function returns 'true', the item should *not* be included in the new array.
*/

var numbers = [10, 20, 30];

function reject(array, iteratorFunction) {
  return array.filter( number => !iteratorFunction(number))
}

function checkBiggerThanFifteen(number) {
    return number > 15
}

console.log(reject(numbers, checkBiggerThanFifteen))