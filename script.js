//first we want to take the value of each key 
let ac = document.querySelector(".ac").innerHTML;
let negative = document.querySelector(".negative").innerHTML;
let percent = document.querySelector(".percent").innerHTML;
let divide = document.querySelector(".divide").innerHTML;
let seven = parseInt(document.querySelector(".seven").innerHTML);
let eight = parseInt(document.querySelector(".eight").innerHTML);
let nine = parseInt(document.querySelector(".nine").innerHTML);
let multiply = document.querySelector(".multiply").innerHTML;
let four = parseInt(document.querySelector(".four").innerHTML);
let five = parseInt(document.querySelector(".five").innerHTML);
let six = parseInt(document.querySelector(".six").innerHTML);
let minus = document.querySelector(".minus").innerHTML;
let one = parseInt(document.querySelector(".one").innerHTML);
let two = parseInt(document.querySelector(".two").innerHTML);
let three = parseInt(document.querySelector(".three").innerHTML);
let plus = document.querySelector(".plus").innerHTML;
let backspace = document.querySelector(".backspace").innerHTML;
let zero = parseInt(document.querySelector(".zero").innerHTML);
let dot = document.querySelector(".dot").innerHTML;
let equal = document.querySelector(".equal").innerHTML;

let output = document.querySelector(".output-field")
var firstVal =1
var secondVal =1
var operatorVal 
var result
//display element
function buttonClick(btnVal){
    output.innerHTML = btnVal;
}
//storing the expression
function operatorBtn(operatoerSign){
    output.innerHTML = '';
    //when i click + its goig to add
    console.log(operatoerSign)
    console.log("we are doing ____ operation")
    if(operatoerSign === "+"){
        operatorVal = operatoerSign
    }


    if(operatoerSign === "="){
        if(operatorVal === "+"){
            runAddOperation()
            output.innerHTML = result
        }
        
    }

}

//adding event handlers for each buttons
function runAddOperation(){
    result = firstVal + secondVal    
}
//then we diplay each value on the output screen

//when i click on +/- its going to make the number a negative
//when i click on the % its going to get the percent of the numbr 
//when i click on x its goig to mutiply the numbers 
//wehn i click on the - its going to subtract the numbers

//when i click on <~ its going to take the last value out the equation
//then make sure '=' sums up the equation 
//next we implement the clear button to work



// function (output){
//     display value += output; 
// }


