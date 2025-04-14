const flag = true


if(!flag)  // nagation operator-> !flag
{
    console.log("condition satisfied")
}
else
{
    console.log("condition not satisfied") 
}
// when we use 'if' then our program execute only once and when we use 'while' our program execute infanite times or condition become false so we use one condition in while loop
let i=0
while(i>5)
{
    i++
    console.log(i) 
    
}

  //our code atleast execute once, then it will check the condition when we use 'do-while' loop
  do
  {
    i++
  }while(i>5)
    console.log(i);  

    console.log("********")

    // from 1 to 10 give me common multiple values of 2 and 5
    for(let k=1; k<=100; k++)
   {
    if(k%2==0 && k%5==0)  // &&->And operator, || ->OR operator
      {
      console.log(k)
    }
    }

    // while loop
    let requried = true
    while(requried){
      console.log(requried)
      requried=false

    }

    //if we want first 3 number from 1 to 100 give me common multiple values of 2 and 5
    let w=0
    for(let q=1; q<=100; q++)
      {
        if(q%2==0 && q%5==0)
          {
            w++
            console.log(q)
          
          if(w==3)
            {
              break
            }
          }
      }