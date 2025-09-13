
// Re-cape the basics of js

// Variables

var name = "Sumi Akter";
                                // with var we can re-declare and re-assign the variables.
var name = "Sultana";


let age = 22;
// let age =23; cannot re-declare with let but can re-assign

age = 23;  

// re-assigning is possible.


const country = "Bangladesh";
// const country = "South Korea";

// can not re-declare and cannot re-assign with const.
// so country = "south korea" will give error.



// Conditions in JS

const num = 20;

if(num >= 15 && num <= 25){
    // console.log ("yes, the number is between 15 and 25");
}
else{
    // console.log("no, the number is not between 15 and 25");
}

if(5 > 3){
    // console.log(true);
}
else{
    // console.log(false);
}

// array

const friends = ["Sumi", "Sultana", "Salma", "Sohana"];

// console.log(friends);

// console.log(friends[3]);   
// acessesing array element by index number.

friends.push("sadia");
// console.log(friends);
// adding an element to the array on the last position.


friends.pop();
// console.log(friends);

// removing the last element of the array.

friends.shift("Sumi");
// console.log(friends);
// removing the first element of the array.

friends.unshift("Sumi");
// console.log(friends);
// adding an element to the first position of the array.


// console.log(friends.slice(2, 4));
// slicing the array from index 2 to index 4 but not including index 4.


// console.log(friends.splice(1, 2));
// removing 2 elements from index 1.


