console.log("hello world")

var a = 4   // instead of var we can use (let, const)-> from ES6 JS
console.log(a)
console.log(typeof(a))  // if want to know the Data type of variable we use (typeof())

let b = 64.787
console.log(typeof(b))

const c =  "playwright is an Automation tool"
console.log(typeof(c))


const req = true
console.log(typeof(req))
console.log(!req) // we use this to reverse bollean 

// two more data type is null and undefine

var d = (a+b)
console.log(d)
var  d = a*b
console.log(d)

//let d= a+b (it did not work because we can not redeclear variable with let keyword but possible with var
// if want to use 'let' we will reasigning the variables 
let e = a-b
console.log(d)
e = a/b