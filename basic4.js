// function-> block of code can be executed together by wrapping them in a module is called function.

function add(a,b)   //"add" is a name of function & (a,b) is two parameter 
{
    return a+b   // return result back to the user 
}
// if we want to execute that function we need to call that function
let sum= add(2,3)  // we need to catch this in one variable 
console.log(sum)

//Another way to write the function in JS, do not have name is callwed them Anyonymus function -- function expression

let sumOfInteger= function(c,d)   //only Anyonymus function can be assign to a variable
{
    return c+d
}
console.log(sumOfInteger(2,3))


// one more way
let sumOfIntegers= (c,d)=> c+d  //=> fat pipe
console.log(sumOfIntegers(2,3))