// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", askQuestions);

var numOfChars = 0;
var useLowerCase;
var useUpperCase;
var useNums;
var useSpecialChars;
var output = "";

// use global variables to list out all possible:
// special characters
var specialChars = [ '!', '@', '#', '$', '%', '^', '&', '*'];
// lower case letters
var lowerCase = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
// upper case letters 
var upperCase = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
// numbers 
var nums = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ];

var params = [];

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// Your work starts here
function generatePassword() {
    generateParams();
    

    return password;
}

function askQuestions() {
    while (numOfChars < 8 || numOfChars > 128) {
        numOfChars = prompt("How many characters? (8 - 128)");
    }
    useSpecialChars = confirm("Do you want to use special characters?");
    useNums = confirm("Do you want to use numbers?");
    useLowerCase = confirm("Do you want to use lower case letters?");
    useUpperCase = confirm("Do you want to use upper case letters?");

    if (!useSpecialChars && !useNums && !useLowerCase && !useUpperCase) {
        alert("Minimum of one category must be selected!");
        askQuestions();
    }
}

function generateParams() {
    if (useSpecialChars) {
        params = params.concat(specialChars);
    }

    if (useNums) {
        params = params.concat(nums);
    }

    if (useLowerCase) {
        params = params.concat(lowerCase);
    }

    if (useUpperCase) {
        params = params.concat(upperCase);
    }
}


// use a loop to grab a random characters x number of times

//   finalPassword += 








