/* Inheritance is the main piller in object oriented programming 
- one class can inherit/acquire the properties,methods of another class
-The Class which inherits the properties of other is known as subclass (derived class, child class)
-The Class whose properties are inherited is known as superclass or parent class
//Use the "extends" keyword to inherit all methods from another class.
//Use the "super" method to call the parent's constructor function. */
const Person= require("./basics7")
class Pet extends Person 
{
    get location()
    {
        return "BlueCross"
    }
    constructor(firstName,lastName)
    {
        //call parent class constructor
        super(firstName, lastName)

    }

}

let pet = new Pet("Max", "Roy")
pet.fullName()
console.log(pet.location)

