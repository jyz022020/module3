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

  let passwordTypeValidation = false;
  let includeLowercase = false;
  let includeUppercase = false;
  let includeNumeric = false;
  let includeSpecialCharacters = false;

  while (!passwordTypeValidation) {
    includeLowercase = confirm ("Do you want to include lowercase?");
    includeUppercase = confirm ("Do you want to include uppercase?");
    includeNumeric = confirm ("Do you want to include numeric?");
    includeSpecialCharacters = confirm ("Do you want to include special characters?");
    if (includeLowercase || includeUppercase || includeNumeric || includeSpecialCharacters) {
      passwordTypeValidation = true;
    } else {
      alert("Error: Please select at least 1 password type!")
    }
  }

  let lowercaseList = "abcdefghijklmnopqrstuvwxyz";
  let uppercaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numericList = "0123456789";
  let specialCharactersList = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  let passwordSource = "";

  if (includeLowercase){
    passwordSource += lowercaseList;
  }
  if (includeUppercase) {
    passwordSource += uppercaseList;
  }
  if(includeNumeric) {
    passwordSource += numericList;
  }
  if(includeSpecialCharacters){
    passwordSource += specialCharactersList;
  }

  password = "";
  for (var i = 0; i < passwordLength; i++){
    password += passwordSource.charAt(Math.floor(Math.random() * (passwordSource.length)));
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
