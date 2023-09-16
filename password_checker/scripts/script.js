// Wait for the DOM to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function() {
  // Get references to HTML elements
  var loginForm = document.getElementById("loginForm");
  var feedback = document.getElementById("feedback");
  var pwFeedback = document.getElementById("passwordFeedback");
  var output = document.getElementById("output");

  // Add a submit event listener to the login form
  loginForm.addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent the form from submitting normally

    // Get the values of the username and password input fields
    var username = document.getElementById("user").value;
    var password = document.getElementById("password").value;

    // Check the length of the username
    if (username.length < 5) {
      // Display an error message if the username is too short
      feedback.textContent = "Username not long enough! Min. 5 characters";
      return; // Exit the submission handler
    } else {
      // Clear the feedback message if the username is valid
      feedback.textContent = "";
    }

    // Check password strength using a custom function
    var isStrongPassword = checkPasswordStrength(password);
    if (!isStrongPassword) {
      // Display an error message if the password does not meet the criteria
      pwFeedback.textContent = "Password must contain at least one capital letter, one number, and one special character.";
      return; // Exit the submission handler
    } else {
      // Clear the password feedback message if the password is strong
      pwFeedback.textContent = "";
    }

    // Generate a unique key (You can replace this with your unique key generation logic)
    var uniqueKey = generateUniqueKey(username);

    // Create an object with the user data
    var userData = {
      username: username,
      password: password,
      key: uniqueKey
    };

    // Display the user data in the output div as a formatted JSON string
    displayUserData(userData);
  });

  // Function to generate a unique key (You can replace this with your own logic)
  function generateUniqueKey(username) {
    var currentDate = new Date();

    // Extract date components (day)
    var day = currentDate.getDate().toString().padStart(3, '0');

    // Generate a random number between 1 and 3000
    var randomNumber = Math.floor(Math.random() * 3000) + 1;

    // Combine all components to create the unique key
    var key = randomNumber * username.length + day + "-" + day * randomNumber * randomNumber + "-" + day * day * username.length;

    return key;
  }

  // Function to display user data as a formatted JSON string
  function displayUserData(data) {
    // Display the user data in the output div with two-space indentation
    output.innerHTML = JSON.stringify(data, null, 2);
  }

  // Function to check password strength using regular expressions
  function checkPasswordStrength(password) {
    // Use regular expressions to check for password strength
    var capitalLetter = /[A-Z]/;
    var numbers = /[0-9]/;
    var specialCharacter = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;

    // Return true if all conditions are met (strong password)
    return (
      capitalLetter.test(password) &&
      numbers.test(password) &&
      specialCharacter.test(password)
    );
  }
});
