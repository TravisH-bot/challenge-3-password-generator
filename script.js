// Assignment Code
var generateBtn = document.querySelector("#generate");

//Characters, parameters, and empty strings to be included in the password
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
// var randomPassword = "";

//Function created to provide an alert if a user inputs less than 8 or more than 128 and the generate password function is executed again.
function funcMinMax() {
  alert("Passwords must be between 8 and 128");
  generatePassword();
}

//The generatePassword function first check password length.
//Users input a value and if it doesn't meet the requirements, the funcMinMax runs and starts the process over.
//Following a successful input, prompts are displayed for the 4 options to include in the password.
//A for loop is then used to combine userChoices into a new string, randomPassword, and then characters are randomly selected.
//The password is then returned in the text area.
function generatePassword() {
  var randomPassword = "";
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
    for (var i = 0; i < parseInt(passwordLength); i++) {
      randomPassword += userChoices.charAt(
        Math.floor(Math.random() * userChoices.length)
      );
    }
    return randomPassword;
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
