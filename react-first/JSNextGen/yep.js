// use let if you really are creating a variable
// const if you want to create a constant value

// arrow functions
// this inside arrow function always represents the info in function

// function printMyName(name) {
//     console.log(name);
// }

// printMyName("Tharnid");

const printMyName = (name) => { // remove parens if only one argument
    // console.log(name);
    console.log('Tharnid!!!');
}

// printMyName('Tharnid!!!');
printMyName();

// const multiply = (number) => {
//     return number * 2;
// }
const multiply = (number) => number * 2;
console.log(multiply(22));

