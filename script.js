// CREATE A PASSWORD OBJECT
// Arrays for different character sets: special characters, numeric digits, lowercase letters, and uppercase letters
const characterSets = {
  special: ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'],
  numeric: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  lower: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  upper: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
  'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
};

// Function to prompt user for password options and validate inputs
function getPasswordOptions() {
  // Prompt user to select password length
  const passLength = prompt("Please select a password length between 8 and 128");
  
  // Check if the entered length is a number and within the acceptable range
  if (isNaN(passLength) || passLength < 8 || passLength > 128 ) {
    alert("Password length needs to be a number between 8 and 128.");
    return null;
  }

  // Prompt user to choose which character sets to include in the password
  const hasSpecialChars = confirm("Would you like special characters in your password?");
  const hasNumericalChars = confirm("Would you like numbers in your password?");
  const hasLowerCaseChars = confirm("Would you like lower case letters in your password?");
  const hasUpperCaseChars = confirm("Would you like upper case letters in your password?");

  // Ensure that at least one character set is selected
  if (![hasSpecialChars || hasNumericalChars || hasLowerCaseChars || hasUpperCaseChars]) {
    alert("You must select at least one character type");
    return null;
  }

  // Return the password options object
  return {
    passLength: passLength,
    hasSpecialChars: hasSpecialChars,
    hasNumericalChars: hasNumericalChars,
    hasLowerCaseChars: hasLowerCaseChars,
    hasUpperCaseChars: hasUpperCaseChars
  }
};

// Function to select a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

// Function to generate the password based on user selections
function generatePassword() {
  const options = getPasswordOptions();  // Get the password options from the user
  if (!options) {  // If no valid options are returned, return null
    return null;
  };

  let potentialChars = [];  // Array to hold all possible characters to choose from
  const guaranteedChars = [];  // Array to hold at least one guaranteed character of each selected type

  // Add special characters if selected
  if (options.hasSpecialChars) {
    potentialChars = potentialChars.concat(characterSets.special);  // Add special characters to potentialChars array
    guaranteedChars.push(getRandom(characterSets.special));  // Add a random special character to guaranteedChars
  }

  // Add numeric characters if selected
  if (options.hasNumericalChars) {
    potentialChars = potentialChars.concat(characterSets.numeric);  // Add numeric characters to potentialChars array
    guaranteedChars.push(getRandom(characterSets.numeric));  // Add a random numeric character to guaranteedChars
  }
  
  // Add lowercase letters if selected
  if (options.hasLowerCaseChars) {
    potentialChars = potentialChars.concat(characterSets.lower);  // Add lowercase characters to potentialChars array
    guaranteedChars.push(getRandom(characterSets.lower));  // Add a random lowercase character to guaranteedChars
  }

  // Add uppercase letters if selected
  if (options.hasUpperCaseChars) {
    potentialChars = potentialChars.concat(characterSets.upper);  // Add uppercase characters to potentialChars array
    guaranteedChars.push(getRandom(characterSets.upper));  // Add a random uppercase character to guaranteedChars
  }

  // Create the result password starting with guaranteed characters
  const result = guaranteedChars;

  // Add more random characters to fill the desired password length
  for (let i = result.length; i < options.passLength; i++) {
    result.push(getRandom(potentialChars));  // Add a random character from potentialChars
  }

  // Shuffle the resulting password to randomize the order
  result.sort(function() {
    return Math.random() - 0.5;
  })

  // Join the characters together to form the final password
  return result.join('');
};

// Function to display the generated password in the HTML
function displayPassword() {
  let pass = generatePassword();  // Generate the password
  if (pass) {
    document.querySelector('#password').value = pass;  // Set the generated password in the password field
  }
}

// Add an event listener to the 'Generate' button to trigger password generation when clicked
document.querySelector('#generate').addEventListener('click', displayPassword);
