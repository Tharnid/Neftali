const number = 1;
const num2 = number;

console.log(num2);

const person = {
    name: 'Tharnid'
};

// const secondPerson = person;
const secondPerson = {
    ...person
};

person.name = 'Saldor';

console.log(secondPerson);