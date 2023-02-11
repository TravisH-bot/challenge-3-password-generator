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
var sCase;

function funcMinMax() {
  alert("Passwords must be between 8 and 128");
  generatePassword();
}

var lCase =
  "Would you like to include lowercase letters in your password?\nSelect OK to include or Cancel to omit lowercase letters.";
if (confirm(lCase) == true)
  // function upCase() {
  //   confirm(
  //     "Would you like to include uppercase letters in your password?\nSelect OK to include or Cancel to omit uppercase letters."
  //   );
  // }

  // function spChar() {
  //   confirm(
  //     "Would you like to include special characters in your password?\nSelect OK to include or Cancel to omit special characters."
  //   );
  // }

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
    }
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
