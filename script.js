// FUNCTION ADD
function add(a, b){ 
  return a + b;
}
// FUNCTION SUB
function sub(a, b){
  return a - b;
}
// FUNCTION MULTIPLY
function mult(a, b){
  return a * b;
}
// FUNCTION DIVIDE
function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero!";
  }
  return a / b;
}

let firstNumber
let secondNumber
let operator

function operate(a, b, operatorChosen){
  if (operator === 'add') {
    return add(a, b);
  } else if (operator === 'sub') {
    return sub(a, b);
  } else if (operator === 'mult') {
    return mult(a, b);
  } else { 
    return divide(a, b);
  }
}
