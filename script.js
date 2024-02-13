// 1  Issue prompts when button is pressed.
// 2  Validate/Test Prompt Inputs.
// 3  Generate Password.
// 4  Display Generated Password in Alert Window.

var generateBtn = document.querySelector("#generate");
var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

function generatePassword(passwordLength){
  var password = " ";
  for(var i = 0; i < passwordLength; i++){
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  var passwordLength = prompt("Choose Password Length: 8 - 128.");
  var lowercase = confirm("Hit Okay If You Would Like Lowercase Letters in Your Password.");
  var uppercase = confirm("Hit Okay If You Would Like Uppercase Letters in Your Password.");
  var numbers = confirm("Hit Okay If You Would Like Numbers in Your Password.");
  var specialChars = confirm("Hit Okay If You Would Like Special Characters in Your Password.");

  var passTrue = function(passwordLength){
    if (passwordLength >= 8 && passwordLength <= 128) {
      return true;
    } else {
      return false;
    }
  }

    if (!lowercase) {
      characters = characters.replace("abcdefghijklmnopqrstuvwxyz", " "); 
  }
  
  
    if (!uppercase) {
      characters = characters.replace("ABCDEFGHIJKLMNOPQRSTUVWXYZ", " ");
    }

    if (!numbers) {
       characters = characters.replace("123456789", " ");
    }

    if (!specialChars) {
       characters = characters.replace("!#$%&'()*+,-./:;<=>?@[]^_`{|}~", " ");
    }
    var password = generatePassword(passwordLength);
    

  if ((passTrue === false) || ((uppercase === false ) && (lowercase === false) && 
  (numbers === false) && (specialChars === false))){
    alert("Please Start Over.")
    } else {
        alert(generatePassword(passwordLength, lowercase, uppercase, specialChars));
    }
  passwordText.value = password;
  return password;
    
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
