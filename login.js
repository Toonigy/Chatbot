// Dummy user credentials for demonstration purposes
const dummyUser = {
  username: 'user1',
  password: 'password123'  // Ideally, passwords should be hashed and not stored like this
};

document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();  // Prevent the form from submitting the traditional way

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Simple validation
  if (username === dummyUser.username && password === dummyUser.password) {
    // Redirect to the chatbot page
    window.location.href = "chatbot.html";
  } else {
    // Display error message
    document.getElementById("error-message").style.display = "block";
  }
});

// Optional: Add event listener to the "Sign Up" button if needed
document.getElementById("signup-button").addEventListener("click", () => {
  window.location.href = "signup.html"; // Link to the Sign-Up page
});
