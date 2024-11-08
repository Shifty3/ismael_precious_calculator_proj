//first we want to take the value of each key
// const ac = document.querySelector(".ac").innerHTML;
// const negative = document.querySelector(".negative").innerHTML;
// const percent = document.querySelector(".percent").innerHTML;
// const divide = document.querySelector(".divide").innerHTML;
// const seven = parseInt(document.querySelector(".seven").innerHTML);
// const eight = parseInt(document.querySelector(".eight").innerHTML);
// const nine = parseInt(document.querySelector(".nine").innerHTML);
// const multiply = document.querySelector(".multiply").innerHTML;
// const four = parseInt(document.querySelector(".four").innerHTML);
// const five = parseInt(document.querySelector(".five").innerHTML);
// const six = parseInt(document.querySelector(".six").innerHTML);
// const minus = document.querySelector(".minus").innerHTML;
// const one = parseInt(document.querySelector(".one").innerHTML);
// const two = parseInt(document.querySelector(".two").innerHTML);
// const three = parseInt(document.querySelector(".three").innerHTML);
// const plus = document.querySelector(".plus").innerHTML;
// const backspace = document.querySelector(".backspace").innerHTML;
// const zero = parseInt(document.querySelector(".zero").innerHTML);
// const dot = document.querySelector(".dot").innerHTML;
// const equal = document.querySelector(".equal").innerHTML;



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
   var firstVal = null;
   var secondVal = null;
   var operatorVal = null;
   var result = null;
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
  output.innerHTML = ""
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







// //storing the expression
// function operatorBtn(operatoerSign) {
//   output.innerHTML = "";
//   //when i click + its goig to add
//   console.log(operatoerSign);
//   console.log("we are doing ____ operation");
//   if (operatoerSign === "+") {
//     operatorVal = operatoerSign;
//   }

//   if (operatoerSign === "=") {
//     if (operatorVal === "+") {
//       runAddOperation();
//       output.innerHTML = result;
//     }
//   }
// }

// //adding event handlers for each buttons
// function runAddOperation() {
//   result = firstVal + secondVal;
// }
//then we diplay each value on the output screen

//when i click on +/- its going to make the number a negative
//when i click on the % its going to get the percent of the numbr
//when i click on x its goig to mutiply the numbers
//wehn i click on the - its going to subtract the numbers

//when i click on <~ its going to take the last value out the equation
//then make sure '=' sums up the equation
//next we implement the clear button to work
// function click(){
//   output.innerHTML = "";
// }

// function (output){
//     display value += output;
// }
