// Define the minimum and maximum length of the password
const minPasswordLength = 8;
const maxPasswordLength = 128;

// Define character sets for different categories of characters
const characterSets = {
  special: ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'],  // Special characters
  numeric: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],  // Numeric digits
  lower: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],  // Lowercase letters
  upper: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],  // Uppercase letters
};

// Function to get password options from the user
const getPasswordOptions = () => {
  // Prompt user to select a password length within the specified range
  const passwordLength = parseInt(prompt(`Please select a password length between ${minPasswordLength} and ${maxPasswordLength}.`));

  // Check if password length is valid
  if (isNaN(passwordLength) || passwordLength < minPasswordLength || passwordLength > maxPasswordLength ) {
    console.error(`Invalid password length. It must be a number between ${minPasswordLength} and ${maxPasswordLength}.`);
    alert(`Password length needs to be a number between ${minPasswordLength} and ${maxPasswordLength}.`);
    return null;
  }

  // Ask user which character sets they want to include in their password
  const options = {
    special: confirm("Would you like special characters in your password?"),
    numeric: confirm("Would you like numbers in your password?"),
    lower: confirm("Would you like lower case letters in your password?"),
    upper: confirm("Would you like upper case letters in your password?")
  }

  // Check if at least one character set was selected
  if (!Object.values(options).includes(true)) {
    console.error("No character type was selected. At least one must be chosen.");
    alert("Please include at least one character type.");
    return null;
  }
  return { passwordLength, options }  // Return selected options and password length
};

// Function to randomly select a character from an array
const getRandomChar = arr =>  {
  const randomValue = arr[Math.floor(Math.random() * arr.length)];
  return randomValue;
}

// Function to shuffle the array to randomize the order
const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];  // Swap elements at positions i and j
  }
}

// Function to generate the password
const generatePassword = () => {
  const options  = getPasswordOptions(); // Get the user's password options

  // If options are invalid, return null
  if (!options) {
    console.error("Invalid options or password length.");
    return null
  }

  const { passwordLength, options: selectedOptions } = options;

  const potentialChars = [];  // Array to hold all possible characters based on selected options
  const selectedChars = [];   // Array to store at least one character from each selected set

  // Iterate through selected options and add the corresponding character sets
  Object.entries(selectedOptions).forEach(([type, include]) => {
    if (include) {
      const set = characterSets[type];
      potentialChars.push(...set);  // Add all characters from the selected set to potentialChars
      selectedChars.push(getRandomChar(set));  // Add one random character from the set to selectedChars
    }
  })

  // If no characters were selected, return null
  if(selectedChars.length === 0) {
    console.error("No characters selected.");
    return null;
  }

  // Fill up the password array until it reaches the specified length
  const password = [...selectedChars];
  while (password.length < passwordLength) {
    password.push(getRandomChar(potentialChars));  // Add a random character from the potential characters
  }

  // Shuffle the password to ensure randomness
  shuffleArray(password);

  return password.join('');  // Join the array of characters into a single string and return it
};

// Function to display the generated password in an input field
const displayPassword = () => {
  const password = generatePassword();  // Generate the password
  if (password) {
    document.querySelector('#password').value = password;  // Set the generated password in the password field
  } else {
    console.error("Password generation failed.");
  }
}

// Add event listener to the generate button to trigger password generation when clicked
document.querySelector('#generate')?.addEventListener('click', displayPassword);
