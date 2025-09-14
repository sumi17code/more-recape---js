
// array-methods

// map
const products = [
    {name: 'laptop', price: 32000, brand: 'lenovo', color: 'pink'},
    {name: 'mobile', price: 20000, brand: 'samsung', color: 'sky blue'},
    {name: 'watch', price: 2000, brand: 'xaomi', color: 'black'},
    {name: 'laptop', price: 42000, brand: 'acer', color: 'silver'},
    {name: 'mobile', price: 12000, brand: 'nokia', color: 'pink'},
        

]

const result = products.map(product => product.price);
// console.log(result);

// forEach

// products.forEach(product => console.log(product));
// products.forEach(product => console.log(product.color));

// difference between map and forEach
// map returns a new array
// forEach does not return anything (undefined)

// filter

const result2 = products.filter(product => product.brand === 'samsung');
// console.log(result2);

const result3 = products.filter(product => product.price >= 15000);
// console.log(result3);

// filter returns an array of matching elements.

// find

const result4 = products.find(product => product.name === 'mobile');
// console.log(result4);

// find returns the first matching element.





