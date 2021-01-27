// Arrays of chars
var numbersArray = "0123456789";
var upperArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerArray = "abcdefghijklmnopqrstuvwxyz";
var specialArray = "!@#$%^&*()";

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
  var randomPassword = "";
  if (
    passwordOptions.includeNumbers &&
    passwordOptions.includeSpecial &&
    passwordOptions.includeUppercase &&
    passwordOptions.includeLowercase
  ) {
    console.log("includes numbers works");
    randomPassword += numbersArray;
    randomPassword += lowerArray;
    randomPassword += upperArray;
    randomPassword += specialArray;
    console.log(randomPassword);
  } else if (
    passwordOptions.includeSpecial &&
    passwordOptions.includeNumbers &&
    passwordOptions.includeUppercase
  ) {
    console.log("includes special works");
    randomPassword += specialArray;
    randomPassword += numbersArray;
    randomPassword += upperArray;
  } else if (
    passwordOptions.includeLowercase &&
    passwordOptions.includeNumbers &&
    passwordOptions.includeUppercase
  ) {
    randomPassword += lowerArray;
    randomPassword += numbersArray;
    randomPassword += upperArray;
  }
  randomPassword;
  console.log(randomPassword);
  randomPassword = randomPassword.split("");
  var password = "";
  for (let i = 0; i < parseInt(passwordOptions.passwordLength); i++) {
    const element = randomPassword[i];
    console.log(element);
    password +=
      randomPassword[Math.floor(Math.random() * randomPassword.length)];
  }
  return password;
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
