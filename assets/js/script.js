// Object used to store character options for the user-generated password
var pwOptions = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numeral: "0123456789",
  special: "~!@#$%^&*()+=?<>",
  passwordLength: 0
};

// Global variables used to store options for the user-generated password and the finalized password
var pwString = '';
var optionString = '';
var password = '';
// Global variable storing the button on the page
var generateBtn = document.querySelector("#generate");

// Event listener for user clicking on the generate password button. Triggers the pwPrompts function
generateBtn.addEventListener("click", pwPrompts);

// This function initiates the series of questions that guide users through selecting password options
function pwPrompts() {
// These variables are cleared of contents each time this function runs to prevent user-inputs from multiplying
    pwString = '';
    optionString = '';
    password = '';

// Confirm for lowercase letters
  if (confirm("Do you want lowercase letters?")) {
    pwString += (pwOptions.lowercase);
    optionString += (pwOptions.lowercase[Math.floor(Math.random()*pwOptions.lowercase.length)]);
  }

// Confirm for uppercase letters
  if (confirm("Do you want uppercase letters?")) {
    pwString += (pwOptions.uppercase);
    optionString += (pwOptions.uppercase[Math.floor(Math.random()*pwOptions.uppercase.length)]);
  }
  
// Confirm for numerals
  if (confirm("Do you want numbers?")) {
    pwString += (pwOptions.numeral);
    optionString += (pwOptions.numeral[Math.floor(Math.random()*pwOptions.numeral.length)]);
  }
  
// Confirm for special characters
  if (confirm("Do you want special characters?")) {
    pwString += (pwOptions.special);
    optionString += (pwOptions.special[Math.floor(Math.random()*pwOptions.special.length)]);
  }
  
// If the user does not select at least one of the previous options they will be notified with an alert and sent back through the options
  if (pwString.length < 1) {
    alert("You must select at least one option of characters.");
    pwPrompts();
  } else {
// If the user selects at least one of the options, a random character from each option selected will be added to the password first. This guarantees that the user will always have at least one character from each option that they selected contained in their generated password.
    password = optionString;

// This initiates the next prompt, which is contained in the pwLength function
    pwLength();
    generatePassword();
  }
}

// This function allows users to input the length of their generated password
function pwLength() {
  var lengthPrompt = prompt("How long do you want your password to be?", "Password must be between 8-128 characters")

// If the user input is less than 8 characters, more than 128 characters, or not a number, the user will be notified via an alert and then sent back through the prompt.
  if (lengthPrompt < 8 || lengthPrompt > 128 || isNaN(lengthPrompt)) {
    alert("Password length must be between 8-128 characters and must be entered as a numeral")
    pwLength();
  } else {
    pwOptions.passwordLength = lengthPrompt;
  }
}

// This fcuntion generates the user's random password using the characters that they selected and to the length that was defined. The password will then be written to the page in the text field.
function generatePassword() {
  for (i=0; i<pwOptions.passwordLength - optionString.length; i++) {
    var randomNum = Math.floor(Math.random()*pwString.length);
    password += pwString.charAt(randomNum);
  }
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
