
// ``  = template string

const firstName = "Sumi";
const lastName = "Akter";
const hobby = "coding";

const a = 30;
const b = 20;

// console.log(`My name is ${firstName} ${lastName}. 
//     I love to code.
//     My hobby is ${hobby}.
//     I want to be a web developer.
//     I have ${a + b} taka in my pocket.`);

    // this is a multi line string. And also we can use variable in this string. With `` (template string) we can do this dynamically.
    // we can do any mathematical operation in this string. And also can do many more things including function and loop etc.


    // arrow function


    const sum = (a, b) =>a + b;
    // console.log(sum(20, 30));

    // if there is only one line of code in the function then we can write it like this. no need to write return and {}.

    const multiple = (a, b) =>{
        const result = a * b;
        return result;
    }
    // console.log(multiple(5, 6));

    // but if there are multiple line of code in the function then we have to write it like this. we have to use return and {}.
    // if there is only one parameter then we can skip the () also. 


// spread operator

const numbers = [1, 2, 3, 4, 5];

// console.log(...numbers);

const newNumbers = [...numbers, 6,7, 8,9, 10];
// console.log(newNumbers)

// we can use spread operator in array and object also. we can copy  an array or object using spread operator.
