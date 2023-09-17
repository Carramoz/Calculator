console.log("I'm working!");

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

let x = "";
let y = "";
const array = [];
let countM = 0;
let countD = 0;
let equalsSwitch = false;

btnAC.addEventListener("click", (event)=>{
    event.preventDefault();
    x = "";
    countD = 0;
    countM = 0;
    clearArray(array);
    console.log(array);
    opsScreen.value = array[0];
})

btn0.addEventListener("click", (event)=>{
    if (equalsSwitch) {
        opsScreen.value = "";
        equalsSwitch = false;
    }
    event.preventDefault();
    opsScreen.value += btn0.innerText;
    x += btn0.innerText;
})//btn0
btn1.addEventListener("click", (event)=>{

    event.preventDefault();
    opsScreen.value += btn1.innerText;
    x += btn1.innerText;
})//btn1
btn2.addEventListener("click", (event)=>{

    event.preventDefault();
    opsScreen.value += btn2.innerText;
    x += btn2.innerText;
})//btn2
btn3.addEventListener("click", (event)=>{

    event.preventDefault();
    opsScreen.value += btn3.innerText;
    x += btn3.innerText;
})//btn3
btn4.addEventListener("click", (event)=>{

    event.preventDefault();
    opsScreen.value += btn4.innerText;
    x += btn4.innerText;
})//btn4
btn5.addEventListener("click", (event)=>{

    event.preventDefault();
    opsScreen.value += btn5.innerText;
    x += btn5.innerText;
})//btn5
btn6.addEventListener("click", (event)=>{

    event.preventDefault();
    opsScreen.value += btn6.innerText;
    x += btn6.innerText;
})//btn6
btn7.addEventListener("click", (event)=>{

    event.preventDefault();
    opsScreen.value += btn7.innerText;
    x += btn7.innerText;
})//btn7
btn8.addEventListener("click", (event)=>{

    event.preventDefault();
    opsScreen.value += btn8.innerText;
    x += btn8.innerText;
})//btn8
btn9.addEventListener("click", (event)=>{

    event.preventDefault();
    opsScreen.value += btn9.innerText;
    x += btn9.innerText;
})//btn9
btnSum.addEventListener("click", (event)=>{
    if (equalsSwitch) {
        opsScreen.value = y;
        equalsSwitch = false
        x = y;
    }
    event.preventDefault();
    x = parseFloat(x);
    array.push(x);
    array.push("+");
    opsScreen.value += btnSum.innerText;
    x = "";
})//btnSum
btnMultiply.addEventListener("click", (event)=>{
    if (equalsSwitch) {
        opsScreen.value = y;
        equalsSwitch = false
        x = y;
    }
    event.preventDefault();
    x = parseFloat(x);
    array.push(x);
    array.push("*");
    countM++;
    opsScreen.value += btnMultiply.innerText;
    x = "";
})//btnMultiply
btnSub.addEventListener("click", (event)=>{
    if (equalsSwitch) {
        opsScreen.value = y;
        equalsSwitch = false
        x = y;
    }
    event.preventDefault();
    x = parseFloat(x);
    array.push(x);
    array.push("-");
    opsScreen.value += btnSub.innerText;
    x = "";
})//btnSub
btnDivide.addEventListener("click", (event)=>{
    if (equalsSwitch) {
        opsScreen.value = y;
        equalsSwitch = false
        x = y;
    }
    event.preventDefault();
    x = parseFloat(x);
    array.push(x);
    array.push("/");
    countD++;
    opsScreen.value += btnDivide.innerText;
    x = "";
})//btnDivide
btnPercent.addEventListener("click", (event)=>{
    event.preventDefault;
    if (equalsSwitch) {
        opsScreen.value = y;
        equalsSwitch = false
        x = y;
    }
    x = parseFloat(x);
    x = percent(x);
    opsScreen.value += btnPercent.innerText;
    
});//btnPercent
btnEquals.addEventListener("click", (event)=>{
    event.preventDefault();
    x = parseFloat(x);
    array.push(x);
    let i = 0;
    let prevent = 0;
    console.log("array: ",array);
    console.log("countM: ",countM);
    console.log("countD: ",countD);

    while (countM > 0 || countD > 0) {

        if (prevent < 100) {
            if (array[i] === "*") {
                let result = multiply(array[i - 1], array[i + 1]);
                array.splice(array.indexOf(array[i - 1]), 3, result);
                countM--;
                console.log("countM: ",countM);
                console.log("array: ",array);
                i = 0;
                console.log("succes");
            }//if
            else if(array[i] === "/"){
                let result  = divide(array[i - 1], array[i + 1]);
                array.splice(array.indexOf(array[i - 1]), 3, result);
                countD--;
                console.log("countD: ",countD);
                console.log("array: ",array);
                i = 0;
                console.log("succes");
            }//elif
        } else{
            break;
        }
        i++;
        prevent++
        console.log("array: ",array);
    console.log("countM: ",countM);
    console.log("countD: ",countD);

    }//while multiply and divide
    prevent = 0;
    i = 0;

    while (array.length > 1) {

        if (prevent > 100) {
            break;
        }

        if (array[i] === "+") {
            let result = sum(array[i - 1], array[i + 1]);
            array.splice(array.indexOf(array[i - 1]), 3, result);
            i = 0;
            continue;
        }//if
        else if(array[i] === "-"){
            let result  = subtract(array[i - 1], array[i + 1]);
            array.splice(array.indexOf(array[i - 1]), 3, result);
            i = 0;
            continue;
        }//elif

        i++;
        prevent++;
        console.log("Looping");
 
    }//while add and subtract
    
    prevent = 0;
    opsScreen.value = array[0];
    y = array[0];
    x = "";
    countM = 0;
    countD = 0;
    clearArray(array);
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
function clearArray(array) {
    let numOfCicles = array.length;
    for (let i = 0; i < numOfCicles; i++) {
        array.pop()
    }
}