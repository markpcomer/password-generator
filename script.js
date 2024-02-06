// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
//Return password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//window.prompt
//window.alert
