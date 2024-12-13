document.getElementById("signup-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Save user data to localStorage (for now)
  localStorage.setItem('username', username);
  localStorage.setItem('password', password);

  alert("Account created successfully! You can now log in.");

  // Redirect to login page after signup
  window.location.href = "login.html";
});

document.getElementById("login-button").addEventListener("click", () => {
  window.location.href = "login.html"; // Go to login page
});
