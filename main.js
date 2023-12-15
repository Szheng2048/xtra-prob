function isEvenlyDivisible(num1, num2) {
  return num1 % num2 === 0
}

function halfSquare(num1) {
  return num1 ** 2 / 2
}

function isLong(str) {
  return str.length >= 15
}

function exclaim(sentence) {
  if(sentence[sentence.length-1]!== "!"){
    return sentence + "!"
  } else {
    let str = ""
    for(char of sentence){
      if(char !== "!"){
        str = str + char
      } else {
        str = str
      }
    }
    return str + "!"
  } 
    // for(let i = 0; i <= sentence.length; i ++){
    //   if(sentence[i]!== "!"){
    //     sentence = sentence + sentence.length[i]
    //   } else{
    //     sentence = sentence
    //   }
    // } return sentence + "!"
  
}

function countWords(str) {
  let length = 0
  for(let char of str){
    if( char === " ") {
      length = length + 1
    }
  }
  return length + 1
}

function containsDigit(str1) {
  if(str1 % str1 === 0){
    return true
  } else if ((str1.indexOf(0) !== -1)||(str1.indexOf(1) !== -1)||(str1.indexOf(2) !== -1)||(str1.indexOf(3) !== -1)||(str1.indexOf(4) !== -1)||(str1.indexOf(5) !== -1)||(str1.indexOf(6) !== -1)||(str1.indexOf(7) !== -1)||(str1.indexOf(8) !== -1)||(str1.indexOf(9) !== -1)){
    return true
  } else{
    return false
  }
}

function containsLowerCase(str) {
  if(str.indexOf("a")!== -1||str.indexOf("b")!== -1||str.indexOf("c")!== -1||str.indexOf("d")!== -1||str.indexOf("e")!== -1||str.indexOf("f")!== -1||str.indexOf("g")!== -1||str.indexOf("h")!== -1||str.indexOf("i")!== -1||str.indexOf("j")!== -1||str.indexOf("k")!== -1||str.indexOf("l")!== -1||str.indexOf("m")!== -1||str.indexOf("n")!== -1||str.indexOf("o")!== -1||str.indexOf("p")!== -1||str.indexOf("q")!== -1||str.indexOf("r")!== -1||str.indexOf("s")!== -1||str.indexOf("t")!== -1||str.indexOf("u")!== -1||str.indexOf("v")!== -1||str.indexOf("w")!== -1||str.indexOf("x")!== -1||str.indexOf("y")!== -1||str.indexOf("z")!== -1){
  //   let num =0
  //   for(let char of str){
  //     if(char === char.toLowerCase()){
  //       num = num + 1
  //     }
  //   }
  //   if(num !== 0){
  //     return true 
  //   } else {
  //     return false
  //   }
  // } else {
  //   return false
  return true 
  } else {
    return false
  }
}

function containsUpperCase(str) {
  if(str.indexOf("A")!== -1||str.indexOf("B")!== -1||str.indexOf("C")!== -1||str.indexOf("D")!== -1||str.indexOf("E")!== -1||str.indexOf("F")!== -1||str.indexOf("G")!== -1||str.indexOf("H")!== -1||str.indexOf("I")!== -1||str.indexOf("J")!== -1||str.indexOf("K")!== -1||str.indexOf("L")!== -1||str.indexOf("M")!== -1||str.indexOf("N")!== -1||str.indexOf("O")!== -1||str.indexOf("P")!== -1||str.indexOf("Q")!== -1||str.indexOf("R")!== -1||str.indexOf("S")!== -1||str.indexOf("T")!== -1||str.indexOf("U")!== -1||str.indexOf("V")!== -1||str.indexOf("W")!== -1||str.indexOf("X")!== -1||str.indexOf("Y")!== -1||str.indexOf("Z")!== -1){
  //   let num =0
  //   for(let char of str){
  //     if(char === char.toUpperCase()){
  //       num = num + 1
  //     }
  //   }
  //   if(num !== 0){
  //     return true 
  //   } else {
  //     return false
  //   }
  // } else {
  //   return false
  return true
  } else {
    return false
  }
}

function containsNonAlphanumeric(str) {
  // if(containsLowerCase(str) === false ||containsUpperCase(str)=== false||containsDigit(str)===false){
  //   if()}

}

function containsSpace() {

}

function digits() {
  
}

function truncate() {

}

function isValidPassword() {
  
}

function onlyPunchy() {

}


module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}
