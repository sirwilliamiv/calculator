///////////////////////////////
///    global variables     ///
///////////////////////////////

// button variables (X, /, +, -, =)
let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');
let multiply = document.querySelector('#multiply');
let divide = document.querySelector('#divide');
let add = document.querySelector('#add');
let subtract = document.querySelector('#subtract');
let equals = document.querySelector('#equals');
let result = document.querySelector('#result');

///////////////////////////
///   Event listeners   ///
///////////////////////////


// event listener to get the numbers when the equal button is pressed
equals.addEventListener("click", function() {
    console.log('you clicked the = button');
    if (num1.value === "" || num2.value === "") {
        alert('You are missing a number');
    }
});
/*
    Create a function that multiplies two numbers
    passed in as arguments. Return the product.
 */
function multiplication() {
    console.log('Your gonna multiply!!')
}

/*
    Create a function that adds two numbers
    passed in as arguments. Return the sum.
 */


/*
    Create a function that subtracts two numbers
    passed in as arguments. Return the difference.
 */


/*
    Create a function that divides two numbers
    passed in as arguments. Return the quotient.
 */



/*
    Create a function that accepts three arguments.
        1. First number
        2. Second number
        3. A function that performs an operation on them

    Return the value of the operation.
 */
