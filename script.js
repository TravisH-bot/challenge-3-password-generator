// Assignment Code
var generateBtn = document.querySelector("#generate");

//Characters and parameters to be included in the password

// var criteria = {
//   lowercase: "abcdefghijklmnopqrstuvwxyz",
//   uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
//   specialCharacters: "~!@#$%^&*()_-+=?[]/{}.,;:'<>|",
//   numbers: "0123456789",
//   charMin: 8,
//   charMax: 128,
//   userInput: "Enter length of password:",
// };

var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharacters = "~!@#$%^&*()";
var numbers = "0123456789";
var passwordLength;
var charMin = 8;
var charMax = 128;
var lCase;
var uCase;
var sChar;
var num;
var userChoices = "";
var chosen = "";
var randomPassword = "";

function funcMinMax() {
  alert("Passwords must be between 8 and 128");
  generatePassword();
}

function loCase() {
  lowercase;
  var charactersLength = characters.length;
  var counter = 0;
  while (counter < length) {
    result += lowercase.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
}

function generatePassword() {
  passwordLength = prompt("Please enter desired password length");
  if (
    parseInt(passwordLength) < charMin ||
    parseInt(passwordLength) > charMax
  ) {
    funcMinMax();
  } else {
    lCase = confirm(
      "Would you like to include lowercase letters in your password?"
    );
    if (lCase) {
      userChoices += lowercase;
    }
    uCase = confirm(
      "Would you like to include uppercase letters in your password?"
    );
    if (uCase) {
      userChoices += uppercase;
    }
    sChar = confirm(
      "Would you like to include special characters in your password?"
    );
    if (sChar) {
      userChoices += specialCharacters;
    }
    num = confirm("Would you like to include numbers in your password?");
    if (num) {
      userChoices += numbers;
    }
  }
}
console.log(generatePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition_assignment
// var a = 2;
// console.log((a += 3));
