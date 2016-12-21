///////////////////////////////
///    global variables     ///
///////////////////////////////

// number variables
let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');

// button variables (X, /, +, -, =)
let multiplyButton = document.querySelector('#multiply');
let divideButton = document.querySelector('#divide');
let addButton = document.querySelector('#add');
let subtractButton = document.querySelector('#subtract');
let equalsButton = document.querySelector('#equals');

// results section HTML
let resultsHTML = document.querySelector('#result');


///////////////////////////
///   Event listeners   ///
///////////////////////////

// event listener on multiplication button
multiplyButton.addEventListener("click", function() {
    multiplyButton.className += "blueBorder";
    console.log('multiply button clicked')
});

// event listener on multiplication button
divideButton.addEventListener("click", function() {
    divideButton.className += "blueBorder";
    console.log('divide button clicked')
});

// event listener on multiplication button
addButton.addEventListener("click", function() {
    addButton.className += "blueBorder";
    console.log('add button clicked')
});

// event listener on multiplication button
subtractButton.addEventListener("click", function() {
    subtractButton.className += "blueBorder";
    console.log('subtract button clicked')
});

// event listener to get the numbers when the equal button is pressed
equalsButton.addEventListener("click", function() {
    let mathFunction = subtraction;
    num1 = parseInt(num1.value);
    num2 = parseInt(num2.value);
    if (num1.value === "" || num2.value === "") {
        alert('You are missing a number');
    } else {
        doMath(num1, num2, mathFunction)
    }
});

//////////////////////////
///   math functions   ///
//////////////////////////

// Create a function that multiplies two numbers passed in as arguments. Return the product.
function multiplication(x, y) {
    console.log('Your gonna multiply!!');
    var result = x * y;
    return result;
}

// Create a function that adds two numbers passed in as arguments. Return the sum.
function addition(x, y) {
    console.log("your gonna add");
    var result = x + y;
    return result;
}

// Create a function that subtracts two numbers passed in as arguments. Return the difference.
function subtraction(x, y) {
    console.log('Your gonna subtract');
    var result = x - y;
    return result;
}

//  Create a function that divides two numbers passed in as arguments. Return the quotient.
function division(x, y) {
    console.log('Your gonna divide');
    var result = x / y;
    return result;
}

/*
    Create a function that accepts three arguments.
        1. First number
        2. Second number
        3. A function that performs an operation on them

    Return the value of the operation.
 */
function doMath(x, y, math) {
    var result = math(x, y);
    console.log('doMath', result)
    return result;
}
