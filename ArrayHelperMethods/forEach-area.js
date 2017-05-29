// Create an array of images
var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];

// Create a variable to hold the areas
var areas = [];

// Calculate the area of image
function calculate(image){
    areas.push(image.height * image.width);
}

// Loop over the array, calculate the area
images.forEach(calculate)

// Print the areas variable
console.log(areas);