String.prototype.plus = function (stringToAdd) {
  let item1 = this;
  let item2 = stringToAdd;
  let result = '';
  let digitToMemory = 0;
  while (item1.length || item2.length) {
    let item1LastDigit = item1.length ? Number(item1.at(-1)) : 0;
    let item2LastDigit = item2.length ? Number(item2.at(-1)) : 0;
    let lastDigitsSum = item1LastDigit + item2LastDigit + digitToMemory;
    digitToAdd = lastDigitsSum % 10;
    digitToMemory = (lastDigitsSum - digitToAdd) / 10;
    
    result = digitToAdd + result;
    if (item1.length) {
      item1 = item1.slice(0, -1);
    }

    if (item2.length) {
      item2 = item2.slice(0, -1);
    }
  }
  result = digitToMemory ? 
    (digitToMemory + result):
    result;
  
  console.log(result);
  return(result);
}

String.prototype.minus = function (stringToSubtract) {
  let item1 = this;
  let item2 = stringToSubtract;
  let result = '';
  let digitToMemory = 0;
  if (item1.length < item2.length) {
    result = 'check you input data';
    console.log(result);
    return(result);
  }
  let count = 1;
  while (item1.length > 1) {
    let item1LastDigit = item1.length ? Number(item1.at(-1)) : 0;
    let item2LastDigit = item2.length ? Number(item2.at(-1)) : 0;
    let lastDigitsSubstract = 0;
    if (item1LastDigit - digitToMemory < item2LastDigit) {
      lastDigitsSubstract = item1LastDigit - item2LastDigit -  digitToMemory + 10;
      digitToMemory = 1;
    } else {
      lastDigitsSubstract = item1LastDigit - item2LastDigit -  digitToMemory;
      digitToMemory = 0;
    }
    result = lastDigitsSubstract + result;
    if (item1.length) {
      item1 = item1.slice(0, -1);
      item2 = item2.slice(0, -1);
    }
  }

  let lastDigitsSubstract = Number(item2[0]) ? Number(item1[0]) - Number(item2[0]) -  digitToMemory : Number(item1[0]) -  digitToMemory;

  if (item2.length && lastDigitsSubstract < 0) {
    result = 'check you input data';
    console.log(result);
    return(result);
  }

  result = lastDigitsSubstract + result;

  for (let i = result.length; i > 1; i--){
    if (result.startsWith("0")) {
      result = result.slice(1);
    }
  };
  
  console.log(result);
  return(result);
}

String.prototype.divide = function (stringToDivideBy) {
  let result = Math.round(this / stringToDivideBy);
  return(result);
}

String.prototype.multiply = function (stringToMultiply) {
  let item1 = (this.length > stringToMultiply.length) ? this : stringToMultiply;
  let item2 = (this.length > stringToMultiply.length) ? stringToMultiply : this;
  let result = '';
  
  for (let i = item2.length; i > 0; i--){
    let item2LastDigit = Number(item2[i-1]);
    let digitToMemory = 0;
    let intermediateResult = '';
    for (let j = item1.length; j > 0; j--){
      let item1LastDigit = Number(item1[j-1]);
      let thisStapMultiplication = item2LastDigit * item1LastDigit;
      let thisStapMultiplicationWithMemory = digitToMemory + thisStapMultiplication;
      let lastDigitIntermediateResult = thisStapMultiplicationWithMemory % 10;
      intermediateResult = (j > 1) ?
                           (lastDigitIntermediateResult + intermediateResult) :
                           (thisStapMultiplicationWithMemory + intermediateResult);
      digitToMemory = Math.trunc(thisStapMultiplicationWithMemory / 10);
    }

    result = result.plus((intermediateResult * Math.pow(10, item2.length - i)).toString());
  }
  console.log(`result: ${result}`);
  return(result);
}

// let a = "9999";
// a.plus('99990');


// let a = "111111111111111111111111111111111111111111111111";
// a.plus("22222222222222222222222222222222");

let c = "111";
c.multiply("1111");
 
// let a = "9999";
// a.plus("222222");


// a.minus("2");
// a.minus("4");
// a.divide("4");
// a.divide("3");
// a.multiply("4");

// let a = "33";
// a.plus("12");
// a.minus("2");
// a.minus("4");
// a.divide("4");
// a.divide("3");
// a.multiply("4");