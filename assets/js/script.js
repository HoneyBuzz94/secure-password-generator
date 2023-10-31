var pwOptions = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numeral: "0123456789",
  special: "~!@#$%^&*()+=?<>",
  passwordLength: 10
};

var pwString = '';
var optionString = '';
var password = '';

// Make all one function
function pwPrompts() {
    pwString = '';
    optionString = '';
    password = '';
  
  if (confirm("Do you want lowercase letters?")) {
    pwString += (pwOptions.lowercase);
    optionString += (pwOptions.lowercase[Math.floor(Math.random()*pwOptions.lowercase.length)]);
  }
  
  if (confirm("Do you want uppercase letters?")) {
    pwString += (pwOptions.uppercase);
    optionString += (pwOptions.uppercase[Math.floor(Math.random()*pwOptions.uppercase.length)]);
  }
  
  if (confirm("Do you want numbers?")) {
    pwString += (pwOptions.numeral);
    optionString += (pwOptions.numeral[Math.floor(Math.random()*pwOptions.numeral.length)]);
  }
  
  if (confirm("Do you want special characters?")) {
    pwString += (pwOptions.special);
    optionString += (pwOptions.special[Math.floor(Math.random()*pwOptions.special.length)]);
  }
  
  if (pwString.length < 1) {
    alert("You must select at least one option of characters.");
    pwPrompts();
  } else {
    password = optionString;
    console.log(pwString)
    console.log(optionString)
  
    pwLength();
    generatePassword();
  }
}

function pwLength() {
  var lengthPrompt = prompt("How long do you want your password to be?", "Password must be between 8-128 characters")

  if (lengthPrompt < 8 || lengthPrompt > 128 || isNaN(lengthPrompt)) {
    alert("Password length must be between 8-128 characters and must be entered as a numeral")
    pwLength();
  } else {
    pwOptions.passwordLength = lengthPrompt;
    console.log(pwOptions.passwordLength)
  }
}

function generatePassword() {
  for (i=0; i<pwOptions.passwordLength - optionString.length; i++) {
    var randomNum = Math.floor(Math.random()*pwString.length);
    password += pwString.charAt(randomNum);
  }
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", pwPrompts);
