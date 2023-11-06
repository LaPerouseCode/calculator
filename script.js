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
let operatorChosen

function operate(a, b, operatorChosen){
  if (operatorChosen === 'add') {
    return add(a, b);
  } else if (operatorChosen === 'sub') {
    return sub(a, b);
  } else if (operatorChosen === 'mult') {
    return mult(a, b);
  } else { 
    return divide(a, b);
  }
}

// function displayNumber(button) {
//   let number = button.textContent; // Get the text content of the clicked button
//   let displayDiv = document.getElementById("displayDiv");
//   let currentContent = displayDiv.textContent; // Get the current content of the div
//   displayDiv.innerHTML="";
//   displayDiv.textContent = currentContent + number; // Concatenate the new number to the current content
// }

let isNewNum = true;
let displayText = ""; // Initialize displayText as an empty string

function yourFunction(buttonTextContent) {
    let displayDiv = document.getElementById("displayDiv");
    
    if (isNewNum) {
        // Clear current display output
        displayText = "";
        isNewNum = false;
    }
    
    displayText += buttonTextContent; // Append the button text content to the displayText
    displayDiv.textContent = displayText; // Update the display with the new displayText value
}