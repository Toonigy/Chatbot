// Event listener for the login form submission
document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();

  // Get the username and password entered by the user
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Retrieve stored username and password from localStorage
  const storedUsername = localStorage.getItem('username');
  const storedPassword = localStorage.getItem('password');

  // Check if the entered credentials match the stored ones
  if (username === storedUsername && password === storedPassword) {
    // Redirect to the chatbot page upon successful login
    window.location.href = "chatbot.html";
  } else {
    // Show an error message if login fails
    document.getElementById("error-message").style.display = "block";
  }
});

// Redirect to the signup page when the "Sign Up" button is clicked
document.getElementById("signup-button").addEventListener("click", () => {
  window.location.href = "signup.html"; // Go to signup page
});

// Redirect to the chatbot page in guest mode when the "Try as Guest" button is clicked
document.getElementById("guest-button").addEventListener("click", () => {
  window.location.href = "chatbot.html"; // Go to chatbot page in guest mode
});
