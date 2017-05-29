// Create an array of cars
var cars = [
    { model: 'Camaro', price: 'expensive' },
    { model: 'Focus', price: 'cheap' }
];

// Create an array to hold car prices'
var prices = cars.map((car) => {
    return car.price;
});

console.log(prices);