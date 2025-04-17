//String

let day = 'tuesday '  // we wright string in "" or '' doesn't matter

// string is treated as Array 
console.log(day.length)  // length of string

let subDay= day.slice(4,7)   // subString of "tuesday"
console.log(subDay)

// access any character in this string
console.log(day[1])

//split this string in two different string-> tue day
let splitDay= day.split("s")
console.log(splitDay)  // split base on s
console.log(splitDay[1].length)
console.log(splitDay[1].trim().length)

// to find difference between two date
let date = '23'
let nextDate = '27'
/*(let diff= nextDate - date
console.logdiff) */   // this is not correct way to find difference bocz this number is in String form 
//so we use method "parseInt" to convert String inot a number

let diff= parseInt(nextDate) -parseInt(date)
console.log(diff)
//convert back your number to string 
diff.toString()

// concatenates the String
let newQuote = day+ "is Funday"
console.log(newQuote)

// to find the exact location of Array "indexOf" method we use
let val = newQuote.indexOf("day",5)  // our search mechanism start from given index -> ("day",5)
console.log(val)

// tuesday is Funday  - how many times day has been occured in the String
let count =0 
 let value = newQuote.indexOf("day")
 while(value!== -1)
    {
        count++
        value = newQuote.indexOf("day", value+1)

    }
    console.log(count)


