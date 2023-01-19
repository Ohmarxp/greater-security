// Assignment code here

function generatePassword() {
console.log('Button clicked!');

var userChoice = window.prompt("Enter length of password:");
if (!userChoice) {
  return;
}
var userChoice = window.prompt("Enter character type:");
if (!userChoice) {
  return;
}
var userChoice = window.prompt("Enter amount of characters:");

if (!userChoice) {
  return;
}
 
}


// Get references to the #generate element
  var generateBtn = document.querySelector("#generate");

// Write password to the #password input
 function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

 }

// Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);



