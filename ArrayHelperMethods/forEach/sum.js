// Create an array of numbers
var numbers = [1,2,3,4,5]; 

// Create a variable to hold the sum
var sum = 0;

// Adder function
var adder = (number) => {
    sum += number;
}

// Loop over the array, incrementing the sum variable
numbers.forEach(adder);

// Print the sum variable
console.log(sum);