// ... spread operator
// used to split up array elements OR object properties

// ... rest operator
// Used to merge a list of function arguments into an array

// spread
const person = {
    name: 'Tharnid'
};

const newPerson = {
    ...person,
    age: 28
}

console.log(newPerson);

// rest used in function
const filter = (...args) => {
    return args.filter(el => el === 1);
}

console.log(filter(1, 2, 3));