//Prompt user for password length. ParseInt to turn string response into a number.
var lengthPref = prompt("Enter password length preference (8-128 characters)");
var lengthParse = parseInt (lengthPref);  

//validate length meets criteria:
while (isNaN(lengthParse) || lengthParse < 8 || lengthParse > 128)  {  
    var lengthPref = prompt("Enter length preference (8-128 characters)");
    var lengthParse = parseInt (lengthPref); 
};

//Prompt user for character types to be included. 
var lowerPref = confirm("Include lowercase letters?");
var upperPref = confirm("Include uppercase letters?");
var numberPref = confirm("Inclued numbers?");
var symbolPref = confirm("Include special characters?");

//validate at least one char type is selected:
if ((lowerPref) || (upperPref) || (numberPref) || (symbolPref) ===1) {     
    console.log("valid character selections made");
}   else {  
    alert("Please select at least one character type.");
    var lowerPref = confirm("Include lowercase letters?");
    var upperPref = confirm("Include uppercase letters?");
    var numberPref = confirm("Inclued numbers?");
    var symbolPref = confirm("Include special characters?");
};

//Create an array to hold all character preferences. This can be looped over.
var characterOptions = [lowerPref, upperPref, numberPref, symbolPref];
//Create an empty array for user selections.. 
var userSelectedCharTypes = [];
//Loop over all the possible character types. Only the ones the user chooses will be pushed to the array.
for (var i = 0; i < characterOptions.length; i++) {
    if (confirm) {
        userSelectedCharTypes.push(characterOptions[i]);
    }
};

//get random character sets.
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97); 
};

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

function getRandomSymbol() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 33);
};
 
//create an empty array for the randomized password.
var randomPassword = [];
//Loop set to max possible length of password. If the char type is chosen, it will call the random function for that type and push characters to the randomPassword array.
for (var i = 0; i <= 128; i++) {
    if (lowerPref) {
        randomPassword.push(getRandomLower());
    }
    if (upperPref) {
        randomPassword.push(getRandomUpper());
    }
    if (numberPref) {
        randomPassword.push(getRandomNumber());
    }
    if (symbolPref) {
        randomPassword.push(getRandomSymbol());
    }
};

//The previous step generates too many characters. I want to "slice" my password down to the user specified length. 
var rightLengthPassword = randomPassword.slice(0, lengthParse);
//Then, I want to take the right length password, which will be an array of values, and concatenate them. 
var validPassword = rightLengthPassword.join('');

//Make clicking the generate button call the function to show the password on the page. 
document.getElementById("generate").addEventListener("click", function(event){
    event.preventDefault() 
    showPassword();
  });
//function to show password. 
function showPassword () {
    document.getElementById("result").innerHTML = validPassword;
};

//Make clicking the copy button call the function to copy to clipboard.
document.getElementById("copy").addEventListener("click", function(event){
    event.preventDefault();
    clipboard();
  });
//Function to copy to clipboard. 
function clipboard() {
    var copyText = document.getElementById("result");
    navigator.clipboard.writeText(copyText.innerText);
};




 
















































    