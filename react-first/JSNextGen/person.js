class Person {
    constructor() {
        // props here
        this.name = 'Tharnid';
    }

    printMyName() {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
