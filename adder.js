"use strict"
//alert("Connected")

// Write function to execute when = is click

function add() {
    // verify that button is connected to function
    //console.log("= clicked");

    //get the two numbers from thr input box

    const num1 = parseInt(document.getElementById("num1").value);
    
    const num2 = parseInt(document.getElementById("num2").value);

    console.log("Num1 is " + num1 + " : ", "Num2 is " + num2);
    
  // validate the input is good
    if (isNaN(num1) || isNaN(num2)) {
        //Bad input,give error message.
        alert("Input must be 2 numbers")
        //clear the inputs
        reset();
    }
    else {
        // good input,process it.
    //calculate  sum

    let sum = num1 + num2;
    console.log(" The addition is  " + sum);
    console.log(typeof (sum))

    //Display answer in spam on the mark-up
    // document.getElementById("sum").textContent = sum;
    // document.getElementById("sum").innerText = sum;
    document.getElementById("sum").innerHTML = sum;  
    }
    
}

// Write function to clear
function reset() {
    //clear the 2 inputs and the span
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("sum").innerText = "";
    
}