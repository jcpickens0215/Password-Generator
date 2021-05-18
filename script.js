// Get Button from page
var generateBtn = document.querySelector("#generate");

// Base character arrays
var aPassCharsLower   = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var aPassCharsUpper   = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var aPassCharsNumber  = ["0","1","2","3","4","5","6","7","8","9"];
var aPassCharsSpecial = ["!","@","#","$","%","^","&","*","-","_","+",",","."];

// Used for generation
var aPassCharsUsed;
var nNumChars = 8;
var bLower    = true;
var bUpper    = false;
var bNumber   = false;
var bSpecial  = false;

function promptUser() {

  // Get length of password from user
  nNumChars = window.prompt("Please enter the amount of characters you want in the password.\n(from 8 to 128)")
  
  // Start over if user entered invalid information
  if ((nNumChars < 8) || (nNumChars > 128)) {
    window.alert("ERROR: Please enter a number between 8 and 128");
    promptUser();
  }

  // Let user know that at least one type of character must be selected
  window.alert("Please choose at least one (1) of the following criterion.");

  // Get criteria
  bLower   = window.confirm("Use lower case letters?\nOK for Yes, or Cancel for No"); 
  bUpper   = window.confirm("Use Upper case letters?\nOK for Yes, or Cancel for No");
  bNumber  = window.confirm("Use numbers?\nOK for Yes, or Cancel for No");
  bSpecial = window.confirm("Use special characters?\nOK for Yes, or Cancel for No");

  // Start over if user entered invalid information
  if (!bLower && !bUpper && !nNumChars && !bSpecial) {
    window.alert("ERROR: Please select at least one type of character to include.");
    promptUser();
  }
}

// Generator function
function generatePassword() {
  promptUser();
  return;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
