function getCharacterCount() {
  let characterCount = prompt ("How long do you want your password to be? Enter a number greater than or equal to 8 and less than or equal to 128.");
  if (isNaN(characterCount)) {
    return "The value you entered is not a number. Please try again."
  } else {
    return "The value is a number."
  }
}

console.log(getCharacterCount())

// ORIGINAL CODE
// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);