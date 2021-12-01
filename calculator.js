const display1 = document.querySelector(".display-1"); // I have used query selector instead of getelementby
const display2 = document.querySelector(".display-2");
const tempResult = document.querySelector(".temporary-result");
const num = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation");
const eql = document.querySelector(".equal");
const clearAll = document.querySelector(".all-clear");
const deleteBtn = document.querySelector(".delete");
let dis1Num = ""; //the display numbers above the numbers
let dis2Num = "";
let result = null;
let lastOperation = "";
let haveDot = false; // asigning no dots are present

num.forEach((number) => {
    number.addEventListener("click", (e) => {
        // e is the event handling function
        if (e.target.innerText === "." && !haveDot) {
            //e.target refers to the clicked element
            haveDot = true;
        } else if (e.target.innerText === "." && haveDot) {
            return;
        }
        dis2Num += e.target.innerText; //displaying my target number in the variable assigned
        display2.innerText = dis2Num;
    });
});

operations.forEach((operation) => {
    operation.addEventListener("click", (e) => {
        if (!dis2Num) return; // if there is no display number return nothing
        haveDot = false; // so that we can add dot "." to our new number
        const operationName = e.target.innerText;
        if (dis1Num && dis2Num && lastOperation) {
            mathOperation(); //using a function created for maths
        } else {
            result = parseFloat(dis2Num); //using parse to convert string to number
        }
        clearNum(operationName); //using this fuction to move dis2num to dis1
        lastOperation = operationName;
        console.log(result);
    });
});

function clearNum(name = "") {
    dis1Num += dis2Num + " " + name + " ";
    display1.innerText = dis1Num;
    display2.innerText = "";
    dis2Num = ""; //clearing display num2
    tempResult.innerText = result;
}

function mathOperation() {
    //creating a function for mathematical operations
    if (lastOperation === "*") {
        result = parseFloat(result) * parseFloat(dis2Num);
    } else if (lastOperation === "+") {
        result = parseFloat(result) + parseFloat(dis2Num);
    } else if (lastOperation === "-") {
        result = parseFloat(result) - parseFloat(dis2Num);
    } else if (lastOperation === "/") {
        result = parseFloat(result) / parseFloat(dis2Num);
    } else if (lastOperation === "%") {
        result = parseFloat(result) % parseFloat(dis2Num);
    }
}
// operation();

eql.addEventListener("click", () => {
    // function for the equal button
    if (!dis2Num || !dis1Num) return; // if there is no display 1 and display 2 return nothing
    haveDot = false; // one one dot for the display num
    mathOperation();
    clearNum();
    display2.innerText = result;
    tempResult.innerText = "";
    dis2Num = result;
    dis1Num = "";
});

clearAll.addEventListener("click", () => {
    dis1Num = "";
    dis2Num = "";
    display1.innerText = "";
    display2.innerText = "";
    result = "";
    tempResult.innerText = "";
});

deleteBtn.addEventListener("click", () => {
    display2.innerText = "";
    dis2Num = "";
});
