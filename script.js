// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  let passwordLength = 0;
  while (passwordLength<8 || passwordLength > 128){
    passwordLength = prompt("Please enter the length of the password between 8 to 128.");
    //if (passwordLength < 8 || passwordLength >128) {
    //  alert("invalid input");
    //}
  }

  let includeLowercase = confirm ("Do you want to include lowercase?");
  let includeUppercase = confirm ("Do you want to include uppercase?");
  let includeNumeric = confirm ("Do you want to include numeric?");
  let includeSpecialCharacters = confirm ("Do you want to include special characters?");

  console.log(passwordLength);
  console.log(includeLowercase);
  console.log(includeUppercase);
  console.log(includeNumeric);
  console.log(includeSpecialCharacters);


  
  
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
