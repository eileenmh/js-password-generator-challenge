function CharacterSet (name, array, include) {
  this.name = name;
  this.array = array;
  this.include = include;
}
const lowercaseCh = new CharacterSet ("lowercase", Array.from("abcdefghijklmnopqrstuvwxyz"), false);
const uppercaseCh = new CharacterSet ("uppercase", Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ"), false);
const numberCh = new CharacterSet ("numeric", Array.from("123456789"), false);
const specialCh = new CharacterSet ("special", Array.from("!#$%&()*+-.,/:;<=>?@[]^_`{}|~"), false);

var selectedCharacters
lowercaseCh.include = confirm("Would you like to include " + lowercaseCh.name + " characters? Click 'OK' for yes, 'Cancel' for no.");
if (lowercaseCh.include) {
  var selectedCharacters = lowercaseCh.array;
};

console.log(selectedCharacters);

//✅ let user choose a password length between 7 and 129 characters and validate the response
// function getCharacterCount() {
//   var characterCount = prompt ("How long do you want your password to be? Enter a number between 7 and 129. Numbers with decimal points will not be accepted.");
//     if (characterCount !== null && characterCount.length !== 0) {
//       if (isNaN(characterCount) || characterCount % 1 != 0) {
//         alert ("The value you entered is invalid. It must be a whole number between 7 and 129. Please try again.");
//         getCharacterCount();
//       } 
//       else if (characterCount < 8 || characterCount > 128) {
//         alert ("Your password must be more than 7 and less than 129 characters in length. Please try again.");
//         getCharacterCount();
//       }
//       else {
//         alert ("Your password will contain " + characterCount + " characters. You will now be prompted to select whether or not to include lowercase, uppercase, numeric, and/or special characters. You must select yes for at least one option. Click 'OK' to continue.");
//       }
//   }
// }
// getCharacterCount();

// combine arrays that have been selected
// run a loop, number of times will be characterCount, and the loop function is to get a random number, and then put that random number in to select an array, and concatenate that selection to the end of the variable


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
/* generateBtn.addEventListener("click", writePassword)*/