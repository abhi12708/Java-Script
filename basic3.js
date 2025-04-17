//Array is a collection of elements
var marks = Array(6)
//create object of Array to initialize the value of array "new is memory location operator"
var marks= new Array (20,40,35,12,37,100)
//another syntax to initialize the value of array
var marks = [20,40,35,12,37,100]

// Breake the Array in sub Area or create sub Array from the main Array, we use method "slice(index, index)"
subMarks= marks.slice(2,5)
console.log(subMarks)

// to access (retrive) the Array value
console.log(marks[2])

//Assign the value in the array 
marks[3] = 14
console.log(marks)

// lenth of Array one method in the JS called lenght
console.log(marks.length)

// increase the size of Array add one more element in the Array we use "push" method
marks.push(65)
console.log(marks)

//delete element present in the end, we use "pop" method
 marks.pop()
 console.log(marks)

 // Add element in the beginning, we use "unshift" method
 marks.unshift(12)
 console.log(marks)

 //to find the index of element we use methpod "indexof"
console.log(marks.indexOf(100))

// to find element present in the Array or not, we use method "includes"
console.log(marks.includes(120))

//print one by one elements of Array
for(let i=0; i<marks.length; i++ )
    {
        console.log(marks[i])
    }

//Sum of All elements which are present in the Array
var Sum=0
for(let i=0; i<marks.length; i++ )
    {
       Sum= Sum+ marks[i]
    }
    console.log(Sum)

//Array Function (reduce, filter,map)
// reduce method perform operation on all elements present in the Array-> Sum of All elements which are present in the Array using "reduce" method 
//anonymas function which take two argumnet
let total= marks.reduce((sum,mark)=>sum+mark,0)   //initialize the value of sum in the last "0"
console.log(total)

var scores = [12,13,14,16]
// create new array with even number of score Array and multiply each value with 3 and sum them
var evenScore =[]
for(let i=0; i<scores.length; i++ )
    {
        if(scores[i]%2==0)
            {
                //console.log(score[i])
                evenScore.push(scores[i])
            }
    }

console.log(evenScore)

//Another way to the help of "filter" method
let newFilterEvenScores= scores.filter(score=>score%2==0)
console.log(newFilterEvenScores)

//map function modify each and every element present in Array, mappinng one value to new value
let mappedArray = newFilterEvenScores.map(score=>score*3)
console.log(mappedArray)
var totalVal= mappedArray.reduce((sum,val)=> sum+val,0)
console.log(totalVal)

// create new array with even number of score1 Array and multiply each value with 3 and sum them
var scores1 = [12,13,14,16]

let sumValue = scores1.filter(score=>score%2==0).map(score=>score*3).reduce((sum,val)=> sum+val,0)
console.log(sumValue)

//******sorting***** two sort in array one for string and another one for number
let fruits = ["banana","orange","grapes","apple"]
console.log(fruits.sort())   //this sort method only sort the string
// reverse the sorted string
console.log(fruits.reverse())

// sorting the number
var numSort = [15,13,3.43,11,16,12,14]
//console.log(numSort.sort())

/*numSort.sort(function(a,b)
{
    return a-b
})*/
console.log(numSort.sort((a,b)=>a-b))
console.log(numSort.sort((a,b)=>b-a))  //accending order
