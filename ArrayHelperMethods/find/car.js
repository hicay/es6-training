function Car(model) {
    this.model = model;
}

var cars = [
    new Car('Buick'),
    new Car('Camaro'),
    new Car('Focus')
];

var car;

car = cars.find((car) => {
    return car.model === 'Focus';
});

console.log(car);