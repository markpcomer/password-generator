// 1  Issue prompts when button is pressed.
// 2  Validate/Test Prompt Inputs.
// 3  Generate Password.
// 4  Display Generated Password in Alert Window.

var generateBtn = document.querySelector("#generate");
var characters = "abcdefghijklmnopqrstuvwxyz123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

function generatePassword(length){
  var password = "";
  var charactersLength = characters.length;
  for(var i = 0; i < length; i++){
    password += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return password;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword(passwordLength);
  var passwordText = document.querySelector("#password");

  var passwordLength = prompt("Choose Password Length: 8 - 128.");
  var lowercase = confirm("Hit Okay If You Would Like Lowercase Letters in Your Password.");
  var uppercase = confirm("Hit Okay If You Would Like Uppercase Letters in Your Password.");
  var numbers = confirm("Hit Okay If You Would Like Numbers in YourPassword.");
  var specialChars = confirm("Hit Okay If You Would Like Special Characters in Your Password.");

  var passTrue = function(){
    if (passwordLength >= 8 && passwordLength <= 128) {
      return true;
    } else {
      return false;
    }
  }
  var lowerChars = function(lowercase){
    var string = lowercase;
    if (lowercase === true) {
      return string = characters.replace("123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~", " ");
    }
  }

  var upperChars = function(uppercase){
    var string = uppercase;
    if (uppercase === true) {
      string = characters.replace("123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~", " ");
      return string.toUpperCase();
    }
  }

  var numChars = function(numbers){
    var string = numbers;
    if (numbers === true) {
      return string = characters.substring(26, 35);
    }
  }

  var specChars = function(specialChars){
    var string = specialChars;
    if (specialChars === true) {
      return string = characters.replace("abcdefghijklmnopqrstuvwxyz123456789", " ");
    }
  }




  if ((passTrue !== true) && (uppercase === false ) && (lowercase === false) && 
  (numbers === false) && (specialChars === false)){
    alert("Please Start Over.")
    } else {
    generatePassword(passTrue, lowerChars, upperChars, numChars, specChars);
  }
  passwordText.value = password;
  return password;

  //end writePassword();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
