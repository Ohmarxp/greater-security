// Assignment code here

function generatePassword() {
console.log('Button clicked!');

var passwordChoice = window.prompt("Enter length of password: 8 - 120");
if (!passwordChoice) {
  return;
}
var passworduserChoice = window.prompt("Enter character type: lower case, uppercase, numeric, and/or special");
if (!passworduserChoice) {
  return;
}
return 'Passsword generator under development'
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



