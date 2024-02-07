// 1  Issue prompts when button is pressed.
// 2  Validate/Test Prompt Inputs.
// 3  Generate Password.
// 4  Display Generated Password in Alert Window.

var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  var passwordLength = prompt("Choose Password Length: 8 - 128.");
  var uppercase = confirm("Hit Okay If You Would Like Uppercase Letters in Your Password.");
  var lowercase = confirm("Hit Okay If You Would Like Lowercase Letters in Your Password.");
  var numbers = confirm("Hit Okay If You Would Like Numbers in YourPassword.");
  var specialChars = confirm("Hit Okay If You Would Like Uppercase Letters in Your Password.");

  if ((passwordLength < 8 && passwordLength > 128) || ((uppercase === false ) && (lowercase === false) && 
  (numbers === false) && (specialChars === false))){
    alert("Please Start Over.")
    } else {
    
  }
  passwordText.value = password;
}

function randomizer(str){
  return Math.floor(Math.random() *str.length);
}

function generatePassword(getRandomLowercase, getRandomUppercase, getRandomNumbers, getRandomSpecialCharacters){
  var password = [""];
  var lower = randomizer(getRandomLowercase);
  var upper = randomizer(getRandomUppercase);
  var nums = randomizer(getRandomNumbers);
  var chars = randomizer(getRandomSpecialCharacters);
  password = password.concat(lower + upper + nums + chars);
  return password;
}




function getRandomLowercase() {
  var letters = "abcdefghijklmnopqrstuvwxyz";
  return letters[randomizer(letters)];
}



function getRandomUppercase () {
  var letter = getRandomLowercase();
  return letter.toUpperCase();
}

console.log(getRandomUppercase());

function getRandomNumbers() {
  let numbers = "123456789";
  return number[randomizer(numbers)];
}

function getRandomSpecialCharacters(){
  let characters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  return characters[randomizer(characters)];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


