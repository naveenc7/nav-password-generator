// Assignment Code
var generateBtn = document.querySelector("#generate");

//Personal Code that was added//
var passwordLength = window.prompt("Choose the length of your password (in the range of 8-128 characters): ");
var useUpper = window.confirm("Would you like to implement Upper-case characters to make your password safer? (yes/no)");
console.log(useUpper);
var useLower = window.confirm("Would you like to implement Lower-case characters to make your password dynamic? (yes/no)");
var useNumbers = window.confirm("Would you like to use numbers in your randomly generated password?");
var useCharacters = window.confirm("Would you like to include 'Special Characters' in your password?");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Defining Conditions of the Generator//

    //1. Password Length condition
if (+passwordLength > 128)
{
  alert("Your password is too long! Please make sure it is between the range of 8-128");
}   else if (+passwordLength < 8) 
{
  alert("Your passwword is too short!Please make sure it is between the range of 8-128");
}

    //2. creation of stored prompt variables [arrays] 
var upperCaseVariables = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var lowerCaseVariables = ["abcdefghijklmnopqrstuvwxyz"];
var numberVariables = [1234567890];
var specialCharacters = ["!@#$%^&*()_+"];

    //3. Conditions for ^ initial variables [prompt]
if (useUpper == undefined && useLower == undefined && useNumbers == undefined && useCharacters == undefined)
{
  window.alert("You have selected an invalid combination!");
}
    //4. Declaration of all characters. 
var characteristics = '';

if (useUpper === true){
  var characteristics = characteristics + upperCaseVariables;
}
if (useLower === true){
  var characteristics = characteristics + lowerCaseVariables;
}
if (useNumbers === true){
  var characteristics = characteristics + numberVariables;
}
if (useCharacters === true){
  var characteristics = characteristics + specialCharacters;
}

function generatePassword(length) {
//reusing prompt from the beginning//
  var passwordLength = window.prompt("Choose the length of your password (in the range of 8-128 characters): ");
  var useUpper = window.confirm("Would you like to implement Upper-case characters to make your password safer? (yes/no)");
console.log(useUpper);
  var useLower = window.confirm("Would you like to implement Lower-case characters to make your password dynamic? (yes/no)");
  var useNumbers = window.confirm("Would you like to use numbers in your randomly generated password?");
  var useCharacters = window.confirm("Would you like to include 'Special Characters' in your password?");
//adding results 
  let result = '';
  var characteristicsLength = characteristics.length;
  for (let i = 0; i < passwordLength; i++) {
    result += characteristics.charAt(Math.floor(Math.random() * characteristicsLength));
  }

  return result;

}

//Returning the desired outcome/password. 
var password = generatePassword(+passwordLength);
console.log(password);




