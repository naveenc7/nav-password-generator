// Assignment Code
var generateBtn = document.querySelector("#generate");

//Assigning critical variable names//
var passwordLength = 0;
var useUpper =false;
var useLower = false;
var useNumbers = false;
var useCharacters = false;

// Command for Initializing Password Generator //
function writePassword() 
{
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// The Event Listener
generateBtn.addEventListener("click", writePassword);

//Creation of stored prompt variables [arrays]
var upperCaseVariables = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var lowerCaseVariables = ["abcdefghijklmnopqrstuvwxyz"];
var numberVariables = [1234567890];
var specialCharacters = ["!@#$%^&*()_+"];

//Conditions for ^ initial variables [prompt]
if (
  useUpper == undefined &&
  useLower == undefined &&
  useNumbers == undefined &&
  useCharacters == undefined
) //what happens if left empty or without assigning//
{
  window.alert("You have selected an invalid combination!");
}
//Declaration of all characters.
var characteristics = "";

//Main Function of the Password Generator//
function generatePassword(length) {
  
  characteristics =  '';
  //Defining Conditions of the Generator//
  //More specically for the length of the password//
  passwordLength = window.prompt(
    "Choose the length of your password (in the range of 8-128 characters): "
  );
  if (passwordLength > 128) {
    alert(
      "Your password is too long! Please make sure it is between the range of 8-128"
    );
  } else if (passwordLength < 8) {
    alert(
      "Your passwword is too short! Please make sure it is between the range of 8-128"
    );
  }
  //Defining conditions continued//
  useUpper = window.confirm(
    "Would you like to implement Upper-case characters to make your password safer? (Okay for yes/Cancel for no)"
  );
  console.log(useUpper);
  useLower = window.confirm(
    "Would you like to implement Lower-case characters to make your password dynamic? (Okay for yes/Cancel for no)"
  );
  useNumbers = window.confirm(
    "Would you like to use numbers in your randomly generated password? (Okay for yes/Cancel for no)"
  );
  useCharacters = window.confirm(
    "Would you like to include 'Special Characters' in your password? (Okay for yes/Cancel for no)"
  );

      //Declaration of all characters.//

  if (useUpper === true) {
    characteristics = characteristics + upperCaseVariables;
  }
  if (useLower === true) {
    characteristics = characteristics + lowerCaseVariables;
  }
  if (useNumbers === true) {
    characteristics = characteristics + numberVariables;
  }
  if (useCharacters === true) {
    characteristics = characteristics + specialCharacters;
  }
  //adding results
  let result = "";
  var characteristicsLength = characteristics.length;
  for (let i = 0; i < passwordLength; i++) {
    result += characteristics.charAt(
      Math.floor(Math.random() * characteristicsLength)
    );
  }
  console.log(result);
  return result;
}

