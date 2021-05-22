// Get Button from page
var generateBtn = document.querySelector("#generate");

// Base character arrays
var aPassCharsLower   = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var aPassCharsUpper   = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var aPassCharsNumber  = ["0","1","2","3","4","5","6","7","8","9"];
var aPassCharsSpecial = ["!","@","#","$","%","^","&","*","-","_","+",",",".","\"","'","(",")","/",":",";","<","=",">","?","[","]","`","{","|","}","~"];

// Used for generation
var aPassCharsUsed = [];
var nNumChars = 8;
var bLower    = false;
var bUpper    = false;
var bNumber   = false;
var bSpecial  = false;

function validateUserInput() {

  // Get length of password from user
  nNumChars = parseInt(window.prompt("Please enter the amount of characters you want in the password.\n(from 8 to 128)"));

  ///// Start over if user entered invalid information
  if (!(isNaN(nNumChars))) { // Check for NaN!!
    if ((nNumChars < 8) || (nNumChars > 128)) { // nNumChars must be between 8 and 128
      window.alert("ERROR: Please enter a number between 8 and 128");
      return false; //Could not Validate
    }
  } else { // if NaN
    window.alert("ERROR: Not a Number!");
    return false; //Could not Validate
  }

  // Let user know that at least one type of character must be selected
  window.alert("Please choose at least one (1) of the following criteria.");

  // Get criteria
  bLower   = window.confirm("Use lower case letters?\nOK for Yes, or Cancel for No"); 
  bUpper   = window.confirm("Use Upper case letters?\nOK for Yes, or Cancel for No");
  bNumber  = window.confirm("Use numb3rs?\nOK for Yes, or Cancel for No");
  bSpecial = window.confirm("Use $pecial characters?\nOK for Yes, or Cancel for No");

  // Start over if user entered invalid information
  if (!bLower && !bUpper && !bNumber && !bSpecial) { // If user has not selected anything
    window.alert("ERROR: Please select at least one type of character to include.");
    return false; //Could not Validate
  }
  return true; // Input was successfully Validated!
}

// Generator function
function generatePassword() {

  // Container to hold password
  var result = "";

  // Get information from the user
  var userValidated = validateUserInput();

  // If we could not validate
  if(!userValidated) {
    return result; // Then return nothing
  }

  // Consolidate criteria
  if (bLower) {
    aPassCharsUsed = aPassCharsUsed.concat(aPassCharsLower);
  }
  if (bUpper) {
    aPassCharsUsed = aPassCharsUsed.concat(aPassCharsUpper);
  }
  if (bNumber) {
    aPassCharsUsed = aPassCharsUsed.concat(aPassCharsNumber);
  }
  if (bSpecial) {
    aPassCharsUsed = aPassCharsUsed.concat(aPassCharsSpecial);
  }

  // Iterate through given character count
  for (var i = 0; i < nNumChars; i++) {
    // Pick random character from aPassCharsUsed and add it to result
    result = result + aPassCharsUsed[Math.floor(Math.random() * aPassCharsUsed.length)];
  }

  // Reset consolidated array in case of multiple uses
  aPassCharsUsed = [];

  // Return generated password
  return result;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
