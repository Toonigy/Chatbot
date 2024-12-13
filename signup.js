// Signup form submission handler
document.getElementById("signup-form").addEventListener("submit", function(event) {
  event.preventDefault();

  // Get the username and password entered by the user
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Store the username and password in localStorage
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);

  // Redirect to the login page (or chatbot directly)
  window.location.href = "login.html"; // You could also directly redirect to chatbot.html
});
