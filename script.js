function getCharacterCount() {
  let characterCount = prompt ("How long do you want your password to be? Enter a whole number greater than or equal to 8 and less than or equal to 128.");
  if (characterCount >= 8 && characterCount <= 128) {
    console.log("Success!")
  }
  else {
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
      alert (characterCount + " is higher than the character count maximum of 128. Please try again.")
    }
  getCharacterCount();
  }
}
getCharacterCount();
//     else if ( ) { // check that it's greater than or equal to 8

//     }
//   //   else if ( ) { // check that it's less than or equal to 128
//   //   getCharacterCount();
//   //   }
//   // }

// }

//   getCharacterCount();

//   ( isNaN(characterCount) ) {
//     alert ("The value you entered is not a numeric value. Please try again.");
//     getCharacterCount();
//   } 
//   else if (characterCount % 1 != 0) {
//     alert ("Please enter a whole number.");
//     getCharacterCount();
//   }
//   else if ( characterCount < 8 ) {
//     alert ()
//     } else if ( characterCount > 128 ) {

//     }
//   }
// }

// console.log(getCharacterCount())

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