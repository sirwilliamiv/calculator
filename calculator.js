///////////////////////////////
///    global variables     ///
///////////////////////////////

// number variables
let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');

// button variables (X, /, +, -, =)
let multiply = document.querySelector('#multiply');
let divide = document.querySelector('#divide');
let add = document.querySelector('#add');
let subtract = document.querySelector('#subtract');
let equals = document.querySelector('#equals');

// results section HTML
let resultsHTML = document.querySelector('#result');


///////////////////////////
///   Event listeners   ///
///////////////////////////

// event listener to get the numbers when the equal button is pressed
equals.addEventListener("click", function() {
    if (num1.value === "" || num2.value === "") {
        alert('You are missing a number');
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
    return result;
}
