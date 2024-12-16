// Get the signup form and input elements
const signupForm = document.getElementById('signup-form');
const signupUsername = document.getElementById('signup-username');
const signupPassword = document.getElementById('signup-password');

// Event listener for form submission
signupForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form from submitting the default way

    const username = signupUsername.value.trim();
    const password = signupPassword.value.trim();

    // Check if the user already exists
    if (localStorage.getItem(username)) {
        alert('Username already taken!');
        return;
    }

    // Store the user's username and password in localStorage
    const userData = {
        username: username,
        password: password,
    };

    localStorage.setItem(username, JSON.stringify(userData));

    // Redirect to login page after successful sign up
    alert('Sign up successful! You can now log in.');
    window.location.href = 'login.html';
});
