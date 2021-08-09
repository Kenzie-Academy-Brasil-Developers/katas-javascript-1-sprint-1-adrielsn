function oneThroughTwenty() {
 
  /* Your code goes below
   Write a for or a while loop
   return the result*/
   
   let meuRetorno = []
      
   for (let n=1;n<=20;n++) {
   meuRetorno.push(n)
   }

  return meuRetorno
}
console.log(oneThroughTwenty())

function evensToTwenty() {
    
   /* Your code goes below
   Write a for or a while loop
   return the result */

   let meuRetorno = []

   for (let n=2;n<=20;n+=2) {
   meuRetorno.push(n)
  }

  return meuRetorno
}

console.log(evensToTwenty())

function oddsToTwenty() {
    
  /* Your code goes below
  Write a for or a while loop
  return the result */

  let meuRetorno = []

   for (let n=1;n<20;n+=2){
    meuRetorno.push(n)
  }
    return meuRetorno

}

console.log(oddsToTwenty())

function multiplesOfFive() {
    
  /* Your code goes below
  Write a for or a while loop
  return the result */

  let meuRetorno = []

  for (let n=5;n<=100;n+=5) {
  meuRetorno.push(n)
}
  return meuRetorno

}

console.log(multiplesOfFive())

function squareNumbers() {
    
 /* Your code goes below
  Write a for or a while loop
  return the result */  

  let meuRetorno = []

  for (let n=1;n<=10;n++) {
  meuRetorno.push(n*n)
}
  return meuRetorno
}

console.log(squareNumbers())

function countingBackwards() {
    
  /* Your code goes below
  Write a for or a while loop
  return the result */

  let meuRetorno = []

  for (let n=20;n>0;n-=1) {
    meuRetorno.push(n)
}
  return meuRetorno
}


console.log(countingBackwards())

function evenNumbersBackwards() {
    
 /* Your code goes below
  Write a for or a while loop
  return the result */

  let meuRetorno = []

  for (let n=20;n>0;n-=2) {
    meuRetorno.push(n)
}
  return meuRetorno

}

console.log(evenNumbersBackwards())

function oddNumbersBackwards() {
    
 /* Your code goes below
  Write a for or a while loop
  return the result */

  let meuRetorno = []

  for (let n=19;n>0;n-=2) {
    meuRetorno.push(n)
}
  return meuRetorno

}

console.log(oddNumbersBackwards())

function multiplesOfFiveBackwards() {
    
 /* Your code goes below
  Write a for or a while loop
  return the result */

  let meuRetorno = []

  for (let n=100;n>0;n-=5) {
    meuRetorno.push(n)
}
  return meuRetorno
}

console.log(multiplesOfFiveBackwards())

function squareNumbersBackwards() {
    
   /* Your code goes below
  Write a for or a while loop
  return the result */

  let meuRetorno = []

  for (let n=10;n>=1;n--) {
  meuRetorno.push(n*n)
}
  return meuRetorno
}

console.log(squareNumbersBackwards())
