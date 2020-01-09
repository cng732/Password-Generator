 //Create alerts/prompts/confirm variables for user input

var lengthPref = prompt("Enter password length preference (8-128 characters)");

//check password validity:
var lengthParse = parseInt (lengthPref); 

//validate length meets criteria:
while (isNaN(lengthParse) || lengthParse < 8 || lengthParse > 128)  {  
    alert("Please select a valid length.");
    var lengthPref = prompt("Enter length preference (8-128 characters)");
    var lengthParse = parseInt (lengthPref); 
} 
var lowerPref = confirm("Include lowercase letters?");
var upperPref = confirm("Include uppercase letters?");
var numberPref = confirm("Inclued numbers?");
var symbolPref = confirm("Include special characters?");

//validate at least one char type is selected:
if ((lowerPref) || (upperPref) || (numberPref) || (symbolPref) ===1) {     
    alert("Thank you.");
}   else {  
    alert("Please select at least one character type.");
    var lowerPref = confirm("Include lowercase letters?");
    var upperPref = confirm("Include uppercase letters?");
    var numberPref = confirm("Inclued numbers?");
    var symbolPref = confirm("Include special characters?");
 
}

//get random character sets.
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97); //26 letters of the alphabet. Lowercase begins at #97 on the char set chart. 
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 33);
}

//Assign functions to variables

var lower = getRandomLower();
var upper = getRandomUpper();
var number = getRandomNumber();
var symbol = getRandomSymbol();

// character declaration for usable password characters
var characters = '';



















































    