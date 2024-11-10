

//refactored code !!!
//null is so we assisn the var with no value
var output = document.querySelector(".output-field");
var firstVal = null;
var secondVal = null;
var operatorVal = null;
var result = null; 

//handles button clicks
function buttonClick(btnVal) {
  //append the clicked value to the current display as a string
  output.innerHTML += btnVal;
}

//function to handle button operator clicks
function operatorBtn(operator){
  if (operator === "AC"){
    clearDisplay();
  } else if (operator === ".") {
    decimal();
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
   var firstVal = null;
   var secondVal = null;
   var operatorVal = null;
   var result = null;
   output.innerHTML = "";
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

//add dot operator
function decimal(){
  //checks if operator val is empty
if (operatorVal === ""){
  //if it is its gonna add to the first val
  if (!firstVal.includes(".")){
    firstVal += "."
    output.innerHTML += firstVal;
  }
  // if you click a oeprator btn its going to add to a second val
}  else {
  if (!output.innerHTML.includes(".")){
    output.innerHTML += ".";
  }
}
}

function backspace(){
  //removes last character from display
  output.innerHTML = output.innerHTML.slice(0,-1);
}

function storeFirstValue(operator){
  //stores first value
  firstVal = parseFloat(output.innerHTML);
  //stores operator
  operatorVal = operator;
  //clear display after second number
  output.innerHTML = "";
}

function calculateResult(){
  //stores second value
  secondVal = parseFloat(output.innerHTML);
  //checking if all values are not null
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
    //avoid numbers divided by zero
    else if (operatorVal === "/"){
      if (secondVal === 0){
        result = "Error"
      } else {
        result = firstVal /secondVal;
      }
      
    } 
    else {
      result = "Error";
    }
  }

  output.innerHTML = result;
  firstVal = result;
  operatorVal = null;
}

//keyboard events
document.addEventListener("keydown", function(event){

  //handle number keys
if (event.key >= "0" && event.key <= "9"){
  buttonClick(event.key);
}

if (event.key === "+" || event.key === "-" || event.key === "*" || event.key === "/"){
  operatorBtn(event.key);
}

if(event.key === "%"){
  calculatePercent()
}

if (event.key === "n"){
  console.log(event.key)
  toggleNegative()
}

if (event.key === "=" || event.key === "Enter"){
  calculateResult(event.key);
}

if (event.key === "Backspace"){
  output.innerHTML = output.innerHTML.slice(0,-1);
}

if (event.key === "Escape"){
  clearDisplay();
}


})

