// choose a password length between 7 and 129 characters and validate the response
function getCharacterCount() {
  var characterCount = prompt ("How long do you want your password to be? Enter a number between 7 and 129. Numbers with decimal points will not be accepted.");
    if (characterCount !== null && characterCount.length !== 0) {
      if (isNaN(characterCount) || characterCount % 1 != 0) {
        alert ("The value you entered is invalid. It must be a whole number between 7 and 129. Please try again.");
        return getCharacterCount();
      } 
      else if (characterCount < 8 || characterCount > 128) {
        alert ("Your password must be more than 7 and less than 129 characters in length. Please try again.");
        return getCharacterCount();
      }
      else {
        alert ("Your password will contain " + characterCount + " characters. You will now be prompted to select whether or not to include lowercase, uppercase, numeric, and/or special characters. You must select yes for at least one option. Click 'OK' to continue.");
        return characterCount;
      }
  }
}
// select which character types they want to include
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

  const charSets = [lowercaseCh, uppercaseCh, numberCh, specialCh];

  var selectedCharacters = []
  charSets.forEach(charSet => {
    charSet.include = confirm("Would you like to include " + charSet.name.toUpperCase() + " characters? Click 'OK' for yes, 'Cancel' for no.");
    if (charSet.include) {
      selectedCharacters = selectedCharacters.concat(charSet.array);
    }
  });

//Check that a character type has been selected
  if (selectedCharacters.length == 0) {
    alert ("ERROR: you must select at least one character type. The character selection menu will start over."); 
    return getPasswordCharacters(); //to debug later - the function gets returned as undefined if you don't select a charactertype and the function starts over here
  } else {
    return selectedCharacters;
  }
}

// take results of both functions above and use them to create a password
function generatePassword() {
  var passwordLength = getCharacterCount();
  var passwordCharacters = getPasswordCharacters();
  var password = [];

  // randomly select characters
  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * passwordCharacters.length);
    password = password.concat(passwordCharacters[randomIndex]);
  }
  return password.join('');
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)