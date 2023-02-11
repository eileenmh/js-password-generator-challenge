// ✅ let user choose a password length between 7 and 129 characters and validate the response
function getCharacterCount() {
  var characterCount = prompt ("How long do you want your password to be? Enter a number between 7 and 129. Numbers with decimal points will not be accepted.");
    if (characterCount !== null && characterCount.length !== 0) {
      if (isNaN(characterCount) || characterCount % 1 != 0) {
        alert ("The value you entered is invalid. It must be a whole number between 7 and 129. Please try again.");
        getCharacterCount();
      } 
      else if (characterCount < 8 || characterCount > 128) {
        alert ("Your password must be more than 7 and less than 129 characters in length. Please try again.");
        getCharacterCount();
      }
      else {
        alert ("Your password will contain " + characterCount + " characters. You will now be prompted to select whether or not to include lowercase, uppercase, numeric, and/or special characters. You must select yes for at least one option. Click 'OK' to continue.");
        return characterCount;
      }
  }
}
// ✅ let users select which character types they want to include
function getPasswordCharacters() {
  function CharacterSet (name, array, include) {
    this.name = name;
    this.array = array;
    this.include = include;
  }
  const lowercaseCh = new CharacterSet ("lowercase", Array.from("abcdefghijklmnopqrstuvwxyz"), false);
  const uppercaseCh = new CharacterSet ("uppercase", Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ"), false);
  const numberCh = new CharacterSet ("numeric", Array.from("123456789"), false);
  const specialCh = new CharacterSet ("special", Array.from("!#$%&()*+-.,/:;<=>?@[]^_`{}|~"), false);

  var selectedCharacters = []
  // this should probably be a loop but I'm not sure how to set it up...
  lowercaseCh.include = confirm("Would you like to include " + lowercaseCh.name.toUpperCase() + " characters? Click 'OK' for yes, 'Cancel' for no.");
  if (lowercaseCh.include) {
    var selectedCharacters = selectedCharacters.concat(lowercaseCh.array);
  };
  uppercaseCh.include = confirm("Would you like to include " + uppercaseCh.name.toUpperCase() + " characters? Click 'OK' for yes, 'Cancel' for no.");
  if (uppercaseCh.include) {
    var selectedCharacters = selectedCharacters.concat(uppercaseCh.array);
  }
  numberCh.include = confirm("Would you like to include " + numberCh.name.toUpperCase() + " characters? Click 'OK' for yes, 'Cancel' for no.");
  if (numberCh.include) {
    var selectedCharacters = selectedCharacters.concat(numberCh.array);
  }
  specialCh.include = confirm("Would you like to include " + specialCh.name.toUpperCase() + " characters? Click 'OK' for yes, 'Cancel' for no.");
  if (specialCh.include) {
    var selectedCharacters = selectedCharacters.concat(specialCh.array);
  }
  if (selectedCharacters.length == 0) {
    alert ("ERROR: you must select at least one character type. The character selection menu will start over."); 
    getPasswordCharacters(); //to debug later - the function gets returned as undefined if you don't select a charactertype and the function starts over here
  } else {
    return selectedCharacters;
  }
}

var passwordLength = getCharacterCount();
var passwordCharacters = getPasswordCharacters();
var password = [];

// randomly select characters
for (let i = 0; i < passwordLength; i++) {

  let randomIndex = Math.floor(Math.random() * passwordCharacters.length);
  password = password.concat(passwordCharacters[randomIndex]);
}
console.log(password.join(''));
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