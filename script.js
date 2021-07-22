//querySelectors and variables
let calculator = document.querySelector(".calculator");
let displayKey = document.querySelector(".display-key");
let a = 0, b = 0;
let globalOperator = "";
// let displayVal = ""; //anytime I change this value, call the changeDisplayVal()
displayVal = {
    val: "",
    get getVal(){
        return this.val;
    },
    set setVal(newVal){
        this.val = newVal;
        displayKey.textContent = this.val;
    }
};
console.log("val: " + displayVal.getVal);

//add, subtract, multiply, and divide functions
const add = (a,b) => a+b;

const subtract = (a, b) => a-b;

const multiply = (a,b) => a*b;

const divide = (a,b) => a/b;

//operator function -- given an operator and 2 #s -- call one of the above functions to calculate
function operator(operator, a, b){
    dict = {
        "+": add(a,b),
        "-": subtract(a,b),
        "*": multiply(a,b),
        "/": divide(a,b)
    };

    return dict[operator];
}

//add eventListener to each  # key
let keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener('click', () => addToDisplay(key)));

//add eventListener to each operator key
let operators = document.querySelectorAll(".operator");
operators.forEach(operator => operator.addEventListener('click', () => operatorSelected(operator)));

//add eventListener to the equals key

//function for the keys
function addToDisplay(key){
    let keyValue = key.textContent;
    let newVal = displayVal.getVal;
    newVal += keyValue;
    
    displayVal.setVal = newVal;
    console.log("val: " + displayVal.getVal);
}

//function for when the operator has been selected. At this pt, we have a (1st #) and the operator. I need to store 'a' and 'operator' and clear the display
function operatorSelected(operator) {
    a = parseInt(displayVal.getVal);
    displayVal.setVal = "";
    globalOperator = operator.textContent;
}








//Code to populate calculator, delete soon
// //create calculator keys (6 rows, 4 keys per row on only the last 4 rows (leave first 2 empty))
// for(let i = 0; i < 6; i++){
//     let row = document.createElement("row");
//     if(i==0) row.classList.add("display");
//     if(i==1) row.classList.add("clear-delete");
//     if(i > 1){
//         for(let j = 0; j < 4; j++){
//             let key = document.createElement("key");
//             row.appendChild(key);
//         }
//     }
//     calculator.appendChild(row);
// }

// //add display
// let displayRow = document.querySelector(".display");
// for(let i = 0; i < 1; i++){
//     let key = document.createElement("key");
//     key.classList.add("display-key");
//     displayRow.appendChild(key);
// }
// //add clear and delete buttons
// let clearDeleteRow = document.querySelector(".clear-delete");
// for(let i = 0; i < 2; i++){
//     let key = document.createElement("key");
//     if(i == 0) key.classList.add("clear");
//     else key.classList.add("delete");
//     clearDeleteRow.appendChild(key);
// }
