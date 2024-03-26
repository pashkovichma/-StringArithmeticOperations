String.prototype.plus = function (stringToAdd) {
  const firstParam = BigInt(this);
  const secondParam = BigInt(stringToAdd);
  let result = firstParam + secondParam;
  console.log(result);
  return(result);
}

String.prototype.minus = function (stringToSubtract) {
  const firstParam = BigInt(this);
  const secondParam = BigInt(stringToSubtract);
  let result = (firstParam > secondParam) ? 
    firstParam - secondParam :
     'wrong params';
  console.log(result);
  return(result);
}

String.prototype.divide = function (stringToDivideBy) {
  const firstParam = BigInt(this);
  const secondParam = BigInt(stringToDivideBy);
  let result = firstParam / secondParam;
  console.log(result);
  return(result);
}

String.prototype.multiply = function (stringToMultiply) {
  const firstParam = BigInt(this);
  const secondParam = BigInt(stringToMultiply);
  let result = firstParam * secondParam;
  console.log(result);
  return(result);
}

let a = "90099999999999999999";
a.plus("9099999999999999999999999");
a.minus("2");
a.minus("4");
a.divide("4");
a.divide("3");
a.multiply("4");