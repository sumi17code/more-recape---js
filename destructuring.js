
// array destructuring

const numbers =[13, 56, 87, 23];

const [a, b, c, d] = numbers;
// console.log(a, b, c, d);

// object destructuring

const person = {
    name: 'Nur',
    age: 35,
    profession: 'Teacher',
    address: {
        city: 'Bhola',
        country: 'Bangladesh',

    },
    friends: ['abul', 'karim', 'rahim'],
    Email: 'asadad@gmail.com'
}

const {name, age, address, Email, profession, friends} = person;
// console.log(address, friends)
console.log(Email, profession);