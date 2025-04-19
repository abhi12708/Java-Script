// classes is only introduies in the ES6 engine in the java script
// when we want same person object represent as a Class
module.exports = class Person {  //to make this class public we use "module.exports = "
    age = 25  
    get location ()  //this property also can be repregented as a getter method
    {
        return "Ballia"
    }

    //constructor is the method which executes by default when we create object of the class
    constructor(firstName, lastName /*instace variable*/)
    {
        //create new property for this class to access outside this whole class
        this.firstName = firstName
        this.lastName = lastName
    }

    // create one method
    fullName(){
        console.log(this.firstName+this.lastName)
    }


}

// how to create object of class
/*let person= new Person()
console.log(person.age)
console.log(person.location)*/

//for constructor create object
/* let person = new Person ("sheru", "sharma")
let person1 = new Person ("Tim", "Jhon")
console.log(person.age)
console.log(person.location)
console.log(person.fullName())  //call method of class
console.log(person1.fullName())  */

// to access this class in any other file make the 'claas' as Public we need to export the class so we use" module.exports = class name ""