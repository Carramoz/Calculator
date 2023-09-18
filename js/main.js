console.log("I'm working!");

let historyScreen = document.getElementById("history-screen");
let opsScreen = document.getElementById("ops-screen");
let btn1 = document.getElementById("1");
let btn2 = document.getElementById("2");
let btn3 = document.getElementById("3");
let btn4 = document.getElementById("4");
let btn5 = document.getElementById("5");
let btn6 = document.getElementById("6");
let btn7 = document.getElementById("7");
let btn8 = document.getElementById("8");
let btn9 = document.getElementById("9");
let btn0 = document.getElementById("0");
let btnDot = document.getElementById(".");
let btnSub = document.getElementById("-");
let btnSum = document.getElementById("+");
let btnEquals = document.getElementById("=");
let btnMultiply = document.getElementById("*");
let btnDivide = document.getElementById("/");
let btnPercent = document.getElementById("%");
let btnAC = document.getElementById("AC");
let btnBack = document.getElementById("B");

let y;
let x = "";
let operations = [];
let countM = 0;
let countD = 0;
let equalsSwitch = false;
let erasedOperation = false

btnAC.addEventListener("click", (event)=>{
    event.preventDefault();
    x = "";
    y = "";
    countD = 0;
    countM = 0;
    clearArray(operations);
    console.log(operations);
    opsScreen.value = "";
    historyScreen.value = "";
})//btnAC

btnBack.addEventListener("click", event=>{
    event.preventDefault();
    console.log("Back button clicked!");
    if(operations.at(-1) == "+" || operations.at(-1) == "-" || operations.at(-1) == "*" || operations.at(-1) == "/"){
        if(operations.at(-1)==="*"){
            countM--;
        } else if (operations.at(-1)==="/"){
            countD--;
        }//elif
        operations.pop()
    } else {
        if(operations.at(-1).toString().length == 1){
            operations.pop();
        } else{
            let toChange= operations.at(-1).toString();
            operations.splice(operations.lastIndexOf(operations.at(-1)),1,parseFloat(toChange.substring(0, toChange.length-1)));
        }
    }
    opsScreen.value = operations.join("");
})

btn0.addEventListener("click", (event)=>{
    event.preventDefault();
    if (equalsSwitch) {
        y = opsScreen.value; 
        opsScreen.value = "";
        historyScreen.value = y;
        clearArray(operations);
        equalsSwitch = false;
    }
    if (operations.length == 0){
        operations.push(parseFloat(btn0.innerText));
    } else if (operations.at(-1) == "+" || operations.at(-1) == "-" || operations.at(-1) == "*" || operations.at(-1) == "/") {
        operations.push(parseFloat(btn0.innerText));
    } else{
        operations.splice(operations.lastIndexOf(operations.at(-1)), 1, parseFloat(operations.at(-1).toString().concat(btn0.innerText)));
    }
    opsScreen.value = operations.join("");
})//btn0

btn1.addEventListener("click", (event)=>{
    event.preventDefault();
    if (equalsSwitch) {
        y = opsScreen.value; 
        opsScreen.value = "";
        historyScreen.value = y;
        clearArray(operations);
        equalsSwitch = false;
    }
    if (operations.length == 0){
        operations.push(parseFloat(btn1.innerText));
    } else if (operations.at(-1) == "+" || operations.at(-1) == "-" || operations.at(-1) == "*" || operations.at(-1) == "/") {
        operations.push(parseFloat(btn1.innerText));
    } else{
        operations.splice(operations.lastIndexOf(operations.at(-1)), 1, parseFloat(operations.at(-1).toString().concat(btn1.innerText)));
    }
    opsScreen.value = operations.join("");
})//btn1

btn2.addEventListener("click", (event)=>{
    event.preventDefault();
    if (equalsSwitch) {
        y = opsScreen.value; 
        opsScreen.value = "";
        historyScreen.value = y;
        clearArray(operations);
        equalsSwitch = false;
    }
    if (operations.length == 0){
        operations.push(parseFloat(btn2.innerText));
    } else if (operations.at(-1) == "+" || operations.at(-1) == "-" || operations.at(-1) == "*" || operations.at(-1) == "/") {
        operations.push(parseFloat(btn2.innerText));
    } else{
        operations.splice(operations.lastIndexOf(operations.at(-1)), 1, parseFloat(operations.at(-1).toString().concat(btn2.innerText)));
    }
    opsScreen.value = operations.join("");
})//btn2

btn3.addEventListener("click", (event)=>{
    event.preventDefault();
    if (equalsSwitch) {
        y = opsScreen.value; 
        opsScreen.value = "";
        historyScreen.value = y;
        clearArray(operations);
        equalsSwitch = false;
    }
    if (operations.length == 0){
        operations.push(parseFloat(btn3.innerText));
    } else if (operations.at(-1) == "+" || operations.at(-1) == "-" || operations.at(-1) == "*" || operations.at(-1) == "/") {
        operations.push(parseFloat(btn3.innerText));
    } else{
        operations.splice(operations.lastIndexOf(operations.at(-1)), 1, parseFloat(operations.at(-1).toString().concat(btn3.innerText)));
    }
    opsScreen.value = operations.join("");
})//btn3

btn4.addEventListener("click", (event)=>{
    event.preventDefault();
    if (equalsSwitch) {
        y = opsScreen.value; 
        opsScreen.value = "";
        historyScreen.value = y;
        clearArray(operations);
        equalsSwitch = false;
    }
    if (operations.length == 0){
        operations.push(parseFloat(btn4.innerText));
    } else if (operations.at(-1) == "+" || operations.at(-1) == "-" || operations.at(-1) == "*" || operations.at(-1) == "/") {
        operations.push(parseFloat(btn4.innerText));
    } else{
        operations.splice(operations.lastIndexOf(operations.at(-1)), 1, parseFloat(operations.at(-1).toString().concat(btn4.innerText)));
    }
    opsScreen.value = operations.join("");
})//btn4

btn5.addEventListener("click", (event)=>{
    event.preventDefault();
    if (equalsSwitch) {
        y = opsScreen.value; 
        opsScreen.value = "";
        historyScreen.value = y;
        clearArray(operations);
        equalsSwitch = false;
    }
    if (operations.length == 0){
        operations.push(parseFloat(btn5.innerText));
    } else if (operations.at(-1) == "+" || operations.at(-1) == "-" || operations.at(-1) == "*" || operations.at(-1) == "/") {
        operations.push(parseFloat(btn5.innerText));
    } else{
        operations.splice(operations.lastIndexOf(operations.at(-1)), 1, parseFloat(operations.at(-1).toString().concat(btn5.innerText)));
    }
    opsScreen.value = operations.join("");
})//btn5

btn6.addEventListener("click", (event)=>{
    event.preventDefault();
    if (equalsSwitch) {
        y = opsScreen.value; 
        opsScreen.value = "";
        historyScreen.value = y;
        clearArray(operations);
        equalsSwitch = false;
    }
    if (operations.length == 0){
        operations.push(parseFloat(btn6.innerText));
    } else if (operations.at(-1) == "+" || operations.at(-1) == "-" || operations.at(-1) == "*" || operations.at(-1) == "/") {
        operations.push(parseFloat(btn6.innerText));
    } else{
        operations.splice(operations.lastIndexOf(operations.at(-1)), 1, parseFloat(operations.at(-1).toString().concat(btn6.innerText)));
    }
    opsScreen.value = operations.join("");
})//btn6

btn7.addEventListener("click", (event)=>{
    event.preventDefault();
    if (equalsSwitch) {
        y = opsScreen.value; 
        opsScreen.value = "";
        historyScreen.value = y;
        clearArray(operations);
        equalsSwitch = false;
    }
    if (operations.length == 0){
        operations.push(parseFloat(btn7.innerText));
    } else if (operations.at(-1) == "+" || operations.at(-1) == "-" || operations.at(-1) == "*" || operations.at(-1) == "/") {
        operations.push(parseFloat(btn7.innerText));
    } else{
        operations.splice(operations.lastIndexOf(operations.at(-1)), 1, parseFloat(operations.at(-1).toString().concat(btn7.innerText)));
    }
    opsScreen.value = operations.join("");
})//btn7

btn8.addEventListener("click", (event)=>{
    event.preventDefault();
    if (equalsSwitch) {
        y = opsScreen.value; 
        opsScreen.value = "";
        historyScreen.value = y;
        clearArray(operations);
        equalsSwitch = false;
    }
    if (operations.length == 0){
        operations.push(parseFloat(btn8.innerText));
    } else if (operations.at(-1) == "+" || operations.at(-1) == "-" || operations.at(-1) == "*" || operations.at(-1) == "/") {
        operations.push(parseFloat(btn8.innerText));
    } else{
        operations.splice(operations.lastIndexOf(operations.at(-1)), 1, parseFloat(operations.at(-1).toString().concat(btn8.innerText)));
    }
    opsScreen.value = operations.join("");
})//btn8

btn9.addEventListener("click", (event)=>{
    event.preventDefault();
    if (equalsSwitch) {
        y = opsScreen.value; 
        opsScreen.value = "";
        historyScreen.value = y;
        clearArray(operations);
        equalsSwitch = false;
    }
    if (operations.length == 0){
        operations.push(parseFloat(btn9.innerText));
    } else if (operations.at(-1) == "+" || operations.at(-1) == "-" || operations.at(-1) == "*" || operations.at(-1) == "/") {
        operations.push(parseFloat(btn9.innerText));
    } else{
        operations.splice(operations.lastIndexOf(operations.at(-1)), 1, parseFloat(operations.at(-1).toString().concat(btn9.innerText)));
    }
    opsScreen.value = operations.join("");
})//btn9

btnDot.addEventListener("click", (event)=>{
    event.preventDefault();
    if (equalsSwitch) {
        y = opsScreen.value; 
        opsScreen.value = "";
        historyScreen.value = y;
        equalsSwitch = false;
    }
    if (operations.length > 0 && (operations.at(-1)!= "+" || operations.at(-1) != "-" || operations.at(-1) != "*" || operations.at(-1) != "/")) {
        operations.splice(operations.lastIndexOf(operations.at(-1)), 1, operations.at(-1).toString().concat("."));
    }
    opsScreen.value = operations.join("");
})//btnDot

btnSum.addEventListener("click", (event)=>{
    event.preventDefault();
    if (equalsSwitch) {
        x = opsScreen.value;
        equalsSwitch = false;
    }
    if (operations.length > 0 && (operations.at(-1)!= "+" || operations.at(-1) != "-" || operations.at(-1) != "*" || operations.at(-1) != "/")) {
        operations.push("+");
    }
    opsScreen.value = operations.join("");
})//btnSum

btnMultiply.addEventListener("click", (event)=>{
    event.preventDefault();
    if (equalsSwitch) {
        x = opsScreen.value;
        equalsSwitch = false;
    }
    if (operations.length > 0 && (operations.at(-1)!= "+" || operations.at(-1) != "-" || operations.at(-1) != "*" || operations.at(-1) != "/")) {
        operations.push("*");
    }
    countM++;
    opsScreen.value = operations.join("");
})//btnMultiply

btnSub.addEventListener("click", (event)=>{
    event.preventDefault();
    if (equalsSwitch) {
        x = opsScreen.value;
        equalsSwitch = false;
    }
    if (operations.length > 0 && (operations.at(-1)!= "+" || operations.at(-1) != "-" || operations.at(-1) != "*" || operations.at(-1) != "/")) {
        operations.push("-");
    }
    opsScreen.value = operations.join("");
})//btnSub

btnDivide.addEventListener("click", (event)=>{
    event.preventDefault();
    if (equalsSwitch) {
        x = opsScreen.value;
        equalsSwitch = false;
    }
    if (operations.length > 0 && (operations.at(-1)!= "+" || operations.at(-1) != "-" || operations.at(-1) != "*" || operations.at(-1) != "/")) {
        operations.push("/");
    }
    countD++;
    opsScreen.value = operations.join("");
})//btnDivide

btnPercent.addEventListener("click", (event)=>{
    event.preventDefault;
    if (equalsSwitch) {
        x = opsScreen.value;
        equalsSwitch = false;
    }
    operations.splice(operations.indexOf(operations.at(-1)), 1, percent(parseFloat(operations.at(-1))));
    opsScreen.value = operations.join("");
    
});//btnPercent

btnEquals.addEventListener("click", (event)=>{
    event.preventDefault();
    for (let i = 0; i < operations.length; i++) {
       if( operations[i] != "+" && operations[i] != "-" && operations[i] != "*" && operations[i] != "/"){
        operations[i] = parseFloat(operations[i]);
       } else{
        continue;
       }
    }
    if (operations.at(-1)==="+"||operations.at(-1)==="-"||operations.at(-1)==="*"||operations.at(-1)==="/") {
        if(operations.at(-1)==="*"){
            countM--;
        } else if (operations.at(-1)==="/"){
            countD--;
        }//elif

        operations.pop();
    }
    let newArray = [...operations];
    console.log("newArray is: ",newArray);
    console.log("countM: ",countM);
    console.log("countD: ",countD);

    let counter = 0;
    while (countM > 0 || countD > 0) {
        if(newArray[counter] == "*"){
            let result = multiply(newArray[counter-1], newArray[counter+1]);
            newArray.splice(counter-1, 3, result);
            countM--;
            counter = 0;
            continue;
        }else if(newArray[counter] == "/"){
            let result = divide(newArray[counter-1], newArray[counter+1]);
            newArray.splice(counter-1, 3, result);
            countD--;
            counter = 0;
            continue;
        }else{
            counter++;
        }

    //     if (prevent < 100) {
    //         if (operations[i] === "*") {
    //             let result = multiply(operations[i - 1], operations[i + 1]);
    //             operations.splice(operations.indexOf(operations[i - 1]), 3, result);
    //             countM--;
    //             console.log("countM: ",countM);
    //             console.log("operations: ",operations);
    //             i = 0;
    //             console.log("succes");
    //         }//if
    //         else if(operations[i] === "/"){
    //             let result  = divide(operations[i - 1], operations[i + 1]);
    //             operations.splice(operations.indexOf(operations[i - 1]), 3, result);
    //             countD--;
    //             console.log("countD: ",countD);
    //             console.log("operations: ",operations);
    //             i = 0;
    //             console.log("succes");
    //         }//elif
    //     } else{
    //         break;
    //     }
    //     i++;
    //     prevent++
    //     console.log("operations: ",operations);
    // console.log("countM: ",countM);
    // console.log("countD: ",countD);

    }//while multiply and divide
    console.log("newArray up to this point is: ", newArray);
    
    let i = 0;
    while (newArray.length > 1) {

        if (newArray[i] == "+") {
            let result = sum(newArray[i - 1], newArray[i + 1]);
            newArray.splice(i - 1, 3, result);
            i = 0;
            continue;
        }//if
        else if(newArray[i] == "-"){
            let result  = subtract(newArray[i - 1], newArray[i + 1]);
            newArray.splice(i - 1, 3, result);
            i = 0;
            continue;
        }//elif

        i++;
        console.log("Looping");
 
    }//while add and subtract
    console.log(newArray);
    opsScreen.value = newArray[0];
    y = operations;
    historyScreen.value = y.join("");
    countM = 0;
    countD = 0;
    operations = [...newArray];
    equalsSwitch = true;
    
});//btnEquals

function sum(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
function percent(a){
    return a/100;
}
function clearArray(arr) {
    let numOfCicles = arr.length;
    for (let i = 0; i < numOfCicles; i++) {
        arr.pop()
    }
}