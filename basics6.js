// javascript object - collection of properties

let person = {
    firstName:'Abhishek',
    lastName : 'Sharma',
    age: 25,  
    // we also add method in the object
    fullName : function()
    {
       console.log( this.firstName+this.lastName)   //cocinating the two string - "this" represent current object


    }
}
console.log(person.fullName())  // if we call the object function we need to add bracket () at the end of function name
console.log(person.lastName)
console.log(person['lastName']) //another way to access the properties of objest in the Array form

//change the properties at the run time
 person.firstName = 'Yogesh'
 console.log(person.firstName)

 //Add new property
 person.company = 'Bajaj'
 console.log(person)
 //delete any property of object
 delete person.company
 console.log(person)

 //check property exist in the object
 console.log('company' in person)

 //to print the value of all property  of javascript object
 for(let key in person)
    {
        console.log(person[key])
    }