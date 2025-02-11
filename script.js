

//  CREATE A PASSWORD OBJECT
      //  Arrays for different character sets
const characterSets = {
  special: ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'],
  numeric: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  lower: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  upper: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
  'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
};

function getPasswordOptions() {
  const passLength = prompt("Please select a password length between 8 and 128");
    if (isNaN(passLength) || passLength < 8 || passLength > 128 ) {
      alert("Password length needs to be a number.");
      return null;
    }

  const hasSpecialChars = confirm("Would you like special characters in your password?");
  const hasNumericalChars = confirm("Would you like numbers in your password?");
  const hasLowerCaseChars = confirm("Would you like lower case letters in your password?");
  const hasUpperCaseChars = confirm("Would you like upper case letters in your password?");

  if (![hasSpecialChars || hasNumericalChars || hasLowerCaseChars || hasUpperCaseChars]) {
    alert("You must select at least one character type");
    return null;
  }

  return {
    passLength: passLength,
    hasSpecialChars: hasSpecialChars,
    hasNumericalChars: hasNumericalChars,
    hasLowerCaseChars: hasLowerCaseChars,
    hasUpperCaseChars: hasUpperCaseChars
  }
};


function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

function generatePassword() {
  const options = getPasswordOptions();
  if (!options) {
    return null;
  };

  let potentialChars = [];
  const guaranteedChars = [];

  if (options.hasSpecialChars) {
    potentialChars = potentialChars.concat(characterSets.special);
    guaranteedChars.push(getRandom(characterSets.special));
  }

  if (options.hasNumericalChars) {
    potentialChars = potentialChars.concat(characterSets.numeric);
    guaranteedChars.push(getRandom(characterSets.numeric));
  }
  
  if (options.hasLowerCaseChars) {
    potentialChars = potentialChars.concat(characterSets.lower);
    guaranteedChars.push(getRandom(characterSets.lower));
  }

  if (options.hasUpperCaseChars) {
    potentialChars = potentialChars.concat(characterSets.upper);
    guaranteedChars.push(getRandom(characterSets.upper));
  }

  const result = guaranteedChars;

  for (let i = result.length; i < options.passLength; i++) {
    result.push(getRandom(potentialChars));
  }

  result.sort(function() {
    return Math.random() - 0.5;
  })

  return result.join('');
};

function displayPassword() {
    let pass = generatePassword();
    if (pass) {
      document.querySelector('#password').value = pass;
    }
}

document.querySelector('#generate').addEventListener('click', displayPassword);























//____________________________________

// function getRandomElement(arr) {
//   return arr[Math.floor(Math.random() * arr.lenth)];
// }



// var generateBtn = document.querySelector("#generate");

// const characterSets = {
//   special: ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'],
//   numeric: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
//   lowercase: 'abcdefghijklmnopqrstuvwxyz'.split(''),
//   uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
// };

// function getPasswordChoices() {
//   const length = parseInt(prompt('How many characters would you like in your password to contain?'), 10);

//   if (Number.isNaN(length)) {
//     alert('Password must be a number');
//     return null;
//   }
  
//   if (length < 8 || length > 128) {
//     alert('Password length must be between 8 and 128 characters');
//     return null;
//   }

//   // New change
//   const passwordOptions = {

//   }

// }

// function checkPassLength(passwordLength) {
//   return passwordLength >= 8 && passwordLength <= 128;
// };

// function generatePassword(passwordLength, characters) {
//   var password = "";
//   for(var i = 0; i < passwordLength; i++){
//     password += characters.charAt(Math.floor(Math.random() * characters.length));
//   }
//   return password;
// };

// // Write password to the #password input
// function writePassword() {
//   var passwordText = document.querySelector("#password");
//   var passwordLength = prompt("Choose Password Length: 8 - 128 characters.");

//   // Validate password length
//   if (passwordLength === null || !passTrue(passwordLength)) {
//     alert("Password length must be between 8 and 128 characters.");
//     return;
//   }

//   var lowercase = confirm("Hit Okay If You Would Like Lowercase Letters in Your Password.");
//   var uppercase = confirm("Hit Okay If You Would Like Uppercase Letters in Your Password.");
//   var numbers = confirm("Hit Okay If You Would Like Numbers in Your Password.");
//   var specialChars = confirm("Hit Okay If You Would Like Special Characters in Your Password.");

//   var characters = "";
//   if (lowercase) characters += "abcdefghijklmnopqrstuvwxyz";
//   if (uppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   if (numbers) characters += "1234567890";
//   if (specialChars) characters += "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

//   if (!characters) {
//     alert("Please select at least one character type.");
//     return;
//   }

//   var password = generatePassword(passwordLength, characters);
//   passwordText.value = password;
//   alert("Your generated password: " + password);

//   };


// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
