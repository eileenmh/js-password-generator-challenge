//check if prompt response is empty
//is it possible to stop the function if someone presses cancel?

function getCharacterCount() {
  let characterCount = prompt ("How long do you want your password to be? Enter a whole number greater than or equal to 8 and less than or equal to 128.");
    if (characterCount !== null && characterCount.length !== 0) {
      if (isNaN(characterCount)) {
        alert (characterCount + " is not a numeric value. Please try again.");
      } 
      else if (characterCount % 1 != 0) {
        alert (characterCount + " is not a whole number. Please try again.");
      }
      else if (characterCount < 8) {
        alert (characterCount + " is lower than the character count minimum of 8. Please try again.")
      }
      else {
        alert (characterCount + " is higher than the character count maximum of 128. Please try again.");
      }
    getCharacterCount();
  }
}
getCharacterCount();


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
/* generateBtn.addEventListener("click", writePassword) */