// 1  Issue prompts when button is pressed.
// 2  Validate/Test Prompt Inputs.
// 3  Generate Password.
// 4  Display Generated Password in Alert Window.

var generateBtn = document.querySelector("#generate");
var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
console.log(characters);

function generatePassword(){
  var password = " ";
  var charactersLength = characters.length;
  for(var i = 0; i < characters.length; i++){
    password += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  console.log(password);
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
      console.log("No lower");
      characters = characters.replace(/[a-z]/g, " "); // 
  }
    console.log(characters);
  

    if (!uppercase) {
      console.log("No upper");
      characters = characters.replace("123456789!#$%&'()*+,-./:;<=>?@[]^_`{|}~", " ");
    }
    console.log(characters);


    if (!numbers) {
      console.log("No numbers");
       characters = characters.substring(26, 35);
    }
    console.log(characters);
  


    if (!specialChars) {
      console.log("No special characters");
       characters = characters.replace("abcdefghijklmnopqrstuvwxyz123456789", " ");
    }
    
    var password = generatePassword();

  if ((passTrue === false) || (uppercase === false ) && (lowercase === false) && 
  (numbers === false) && (specialChars === false)){
    alert("Please Start Over.")
    } else {
        alert(generatePassword(passwordLength));
    }
    console.log(password);
  passwordText.value = password;
  return password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
