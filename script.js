

var generateBtn = document.querySelector("#generate");

function checkPassLength(passwordLength) {
  
}

function generatePassword(passwordLength, characters) {
  var password = "";
  for(var i = 0; i < passwordLength; i++){
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
};

function passTrue(passwordLength) {
  return passwordLength >= 8 && passwordLength <= 128;
};

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  var passwordLength = prompt("Choose Password Length: 8 - 128 characters.");

  // Validate password length
  if (passwordLength === null || !passTrue(passwordLength)) {
    alert("Password length must be between 8 and 128 characters.");
    return;
  }

  var lowercase = confirm("Hit Okay If You Would Like Lowercase Letters in Your Password.");
  var uppercase = confirm("Hit Okay If You Would Like Uppercase Letters in Your Password.");
  var numbers = confirm("Hit Okay If You Would Like Numbers in Your Password.");
  var specialChars = confirm("Hit Okay If You Would Like Special Characters in Your Password.");

  var characters = "";
  if (lowercase) characters += "abcdefghijklmnopqrstuvwxyz";
  if (uppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (numbers) characters += "1234567890";
  if (specialChars) characters += "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

  if (!characters) {
    alert("Please select at least one character type.");
    return;
  }

  var password = generatePassword(passwordLength, characters);
  passwordText.value = password;
  alert("Your generated password: " + password);

  };


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
