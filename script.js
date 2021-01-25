// Arrays of chars
var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7"];
var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
var specialArray = ["!", "@", "#", "$", "%", "&", "*"];

function getUserInputs() {
  var lowerArray = confirm("add some lower case letters");
  if (lowerArray) {
    password += lowerArray;
  }
}

var numbersArray = confirm("add some numbers");
if (numbersArray) {
  password += numbersArray;
}

var upperArray = confirm("add some uppercase letters");
if (upperArray) {
  password += upperArray;
}

var specialArray = confirm("add some special characters");
if (specialArray) {
  password += specialArray;
}

for (var i = 0; i < password; i++) {
  passwordLength +=
    password[Math.floor(Math.random() * password.passwordLength)];
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

function getUserInputs() {
  var passwordLength = prompt("select password length");
  var includeSpecial = confirm("include special characters?");
  var includeNumbers = confirm("include numbers?");
  var includeUppercase = confirm("include upper case?");
  var includeLowercase = confirm("include lower case?");

  if (
    includeSpecial === false &&
    includeNumbers === false &&
    includeUppercase === false &&
    includeLowercase === false
  ) {
    alert("please select at least one option");
  }
  // object of data to pass to next function
  // objects are key value pairs
  // var objectName = { key : value }
  var userInputs = {
    passwordLength: passwordLength,
    includeSpecial: includeSpecial,
    includeNumbers: includeNumbers,
    includeUppercase: includeUppercase,
    includeLowercase: includeLowercase,
  };

  return userInputs;
}

function generatePassword() {
  var passwordOptions = getUserInputs();
  console.log("In generatePassword. Here are the passwordOptions");
  console.log(passwordOptions);

  //return password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); // PUPPIES
  var passwordText = document.querySelector("#password"); // TEXT AREA

  passwordText.value = password; // VALUE OF TEXTARE = PUPPIES
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//function//
//ask how long password is//
//what kind of characters//
//save user input and pass to next function//
//generate password function//
//uses user info to pull characters//
//join characters in randomize//
//return password from generate function//
