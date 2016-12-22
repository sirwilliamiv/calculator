///////////////////////////////
///    global variables     ///
///////////////////////////////

// button variables (X, /, +, -, =)
let multiplyButton = document.querySelector('#multiply');
let divideButton = document.querySelector('#divide');
let addButton = document.querySelector('#add');
let subtractButton = document.querySelector('#subtract');
let equalsButton = document.querySelector('#equals');

// mathFunction is the function to run using doMath at bottom
let mathFunction;

// results section HTML
let resultsHTML = document.querySelector('#result');


///////////////////////////
///   Event listeners   ///
///////////////////////////

// event listener on multiplication button
multiplyButton.addEventListener("click", function() {
    removeClass();
    multiplyButton.className += "blueBorder";
    mathFunction = multiplication;
});

// event listener on multiplication button
divideButton.addEventListener("click", function() {
    removeClass();
    divideButton.className += "blueBorder";
    mathFunction = division;
});

// event listener on multiplication button
addButton.addEventListener("click", function() {
    removeClass();
    addButton.className += "blueBorder";
    mathFunction = addition;
});

// event listener on multiplication button
subtractButton.addEventListener("click", function() {
    removeClass();
    subtractButton.className += "blueBorder";
    mathFunction = subtraction;
});

// event listener to get the numbers when the equal button is pressed
equalsButton.addEventListener("click", function() {
    // number variables
    let num1 = document.querySelector('#num1');
    let num2 = document.querySelector('#num2');
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
    var result = x * y;
    return result;
}

// Create a function that adds two numbers passed in as arguments. Return the sum.
function addition(x, y) {
    var result = x + y;
    return result;
}

// Create a function that subtracts two numbers passed in as arguments. Return the difference.
function subtraction(x, y) {
    var result = x - y;
    return result;
}

//  Create a function that divides two numbers passed in as arguments. Return the quotient.
function division(x, y) {
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
    writeToDOM(result);
    return result;
}

//////////////////////////
///   functions misc   ///
//////////////////////////

// remove class blueBorder from anywhere it exists
function removeClass() {
    if (document.querySelector('.blueBorder')) {
        document.querySelector('.blueBorder').className = "";
    }
}

// write doMath result to the DOM
function writeToDOM(result) {
    resultsHTML.innerHTML =
        `<p>Result: ${result}</p>`
}
