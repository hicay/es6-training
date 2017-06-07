// Create an array of products
var products = [
    { name: 'cucumber', type: 'vegetable', quantity : 0, price : 1 },
    { name: 'banana', type: 'fruit', quantity : 10, price : 15 },
    { name: 'celery', type: 'vegetable', quantity : 30, price : 9 },
    { name: 'orange', type: 'fruit', quantity : 3, price : 15}
];

var filteredProducts = products.filter((product) => {
    return product.type === 'vegetable' 
        && product.quantity > 0 
        && product.price < 10 
});

console.log(filteredProducts);