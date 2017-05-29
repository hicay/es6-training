/*  Implement a 'pluck' function.  
 *  Pluck should accept an array and a string representing a property name and return an  array containing that property from each object.
 */

var paints = [ 
    { color: 'red' }, 
    { color: 'blue' }, 
    { color: 'yellow' }
];

var pluck = (array, property) => {
    return array.map((obj) => {
        return obj[property];
    });
}

var result = pluck(paints, 'color'); // returns ['red', 'yellow', 'blue'];

console.log(result);