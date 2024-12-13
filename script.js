document.getElementById("signup-button").addEventListener("click", () => {
  window.location.href = "signup.html"; // Link to the Sign-Up page
});

document.getElementById("login-button").addEventListener("click", () => {
  window.location.href = "login.html"; // Link to the Login page
});

document.getElementById("guest-button").addEventListener("click", () => {
  // Redirect to a chatbot page, simulating guest mode
  window.location.href = "chatbot.html"; // Chatbot page for guest users
});
