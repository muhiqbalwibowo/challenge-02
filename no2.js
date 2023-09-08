function checkTypeNumber(givenNumber) {
  if (typeof givenNumber === 'number') {
    if (givenNumber % 2 === 0) {
      return "GENAP";
    } else {
      return "GANJIL";
    }
  } else if (typeof givenNumber !== 'undefined') {
    return "Error: Invalid data type";
  } else {
    return "Error: Bro where is the parameter?";
  }
}

console.log(checkTypeNumber(13));
console.log(checkTypeNumber(6)); 
console.log(checkTypeNumber("4")); 
console.log(checkTypeNumber({})); 
console.log(checkTypeNumber([]));
console.log(checkTypeNumber()); 
