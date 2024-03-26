String.prototype.plus = function (stringToAdd) {
  const firstParam = Number(this);
  const secondParam = Number(stringToAdd);
  let result = firstParam + secondParam;
  console.log(result);
  return(result);
}

String.prototype.minus = function (stringToSubtract) {
  const firstParam = Number(this);
  const secondParam = Number(stringToSubtract);
  let result = (firstParam > secondParam) ? 
    firstParam - secondParam :
     'wrong params';
  console.log(result);
  return(result);
}

String.prototype.divide = function (stringToDivideBy) {
  const firstParam = Number(this);
  const secondParam = Number(stringToDivideBy);
  let result = Math.round(firstParam / secondParam);
  console.log(result);
  return(result);
}

String.prototype.multiply = function (stringToMultiply) {
  const firstParam = Number(this);
  const secondParam = Number(stringToMultiply);
  let result = firstParam * secondParam;
  console.log(result);
  return(result);
}

let a = "3";
a.plus("2");
a.minus("2");
a.minus("4");
a.divide("4");
a.divide("3");
a.multiply("4");