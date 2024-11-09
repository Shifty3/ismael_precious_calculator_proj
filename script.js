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
var firstVal 
var secondVal 
var operatorVal;
var result;
//output values
let numArray1 = [];
let numArray2 = [];

//handles button clicks
function buttonClick(btnVal) {
  numArray1.push(btnVal);
  //makes array one number
  const numString = numArray1.join("");
  console.log(numString);
  output.innerHTML = numString;
}

//storing the expression
function operatorBtn(operatoerSign) {
  output.innerHTML = "";
  //when i click + its goig to add
  console.log(operatoerSign);
  console.log("we are doing ____ operation");
  if (operatoerSign === "+") {
    operatorVal = operatoerSign;
  }

  if (operatoerSign === "=") {
    if (operatorVal === "+") {
   
    }
  }
}

//adding event handlers for each buttons
function runAddOperation() {
  result = firstVal + secondVal;
}
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
