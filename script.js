

//refactored code !!!
//null is so we assisn the var with no value
let output = document.querySelector(".output-field");
let firstVal = null;
let secondVal = null;
let operatorVal = null;
let result = null; 

//handles button clicks
function buttonClick(btnVal) {
  //append the clicked value to the current display as a string
  output.innerHTML += btnVal;
}

//function to handle button operator clicks
function operatorBtn(operator){
  if (operator === "AC"){
    clearDisplay();
  } else if (operator === "+/-"){
    toggleNegative();
} else if (operator === "%"){
  calculatePercent();
} else if (operator === "<~"){
  backspace();
} else if (operator === "="){
  calculateResult();
} else {
  //stores first value and operator btn so that it knows what operator to use
  storeFirstValue(operator);
}
}

//resets values to default
function clearDisplay() {
   output.innerHTML = "";
   let firstVal = null;
   let secondVal = null;
   let operatorVal = null;
   let result = null;
}

function toggleNegative(){
  let currentValue = parseFloat(output.innerHTML);
  if (!isNaN(currentValue)){
    output.innerHTML = currentValue * -1;
  }
}


function calculatePercent(){
  let currentValue = parseFloat(output.innerHTML);
  //checking if currentValue is a number
  if (!isNaN(currentValue)){
    output.innerHTML = currentValue / 100;

  }
}

function backspace(){
  //removes last character from display
  output.innerHTML = output.innerHTML.slice(0,-1);
}

function storeFirstValue(operator){
  //stores first value
  firstVal = parseFloat(output.innerHTML);
  //stores operatopr
  operatorVal = operator;
  //clear display after second number
  output.innerHTML = "";
}

function calculateResult(){
  //stores second value
  secondVal = parseFloat(output.innerHTML);
  if (firstVal !== null && secondVal !== null && operatorVal !== null){
    if (operatorVal === "+"){
      result = firstVal + secondVal;
    } 
    else if (operatorVal === "-"){
      result = firstVal - secondVal;
    } 
    else if (operatorVal === "x"){
      result = firstVal * secondVal;
    } 
    else if (operatorVal !== 0){
      result = firstVal / secondVal;
    } 
    else {
      result = "Error";//advoid numbers divided by zero
    }
  }

  output.innerHTML = result;
  firstVal = result;
  operatorVal = null;
}



