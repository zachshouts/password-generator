// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var numOfChars;
var useLowerCase;
var useUpperCase;
var useNums;
var okToUseSpecialChars;
var finalPassword = "";

// use global variables to list out all possible:
// special characters
var specialChars = [ '!', '@', '#', '$', '%', '^', '&', '*'];
// lower case letters
var lowerCase = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
// upper case letters 
var upperCase = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
// numbers 
var nums = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ];

function askQuestions() {
    var numOfChars = prompt("How many characters?");
    okToUseSpecialChars = confirm("Do you want to use special characters?");

}


// use a loop to grab a random characters x number of times

//   finalPassword += 



// Your work starts here
function generatePassword() {
    askQuestions();

}


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

