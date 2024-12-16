// Get the login form and input elements
const loginForm = document.getElementById('login-form');
const loginUsername = document.getElementById('login-username');
const loginPassword = document.getElementById('login-password');

// Event listener for form submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form from submitting the default way

    const username = loginUsername.value.trim();
    const password = loginPassword.value.trim();

    // Check if the user exists in localStorage
    const userData = localStorage.getItem(username);
    if (!userData) {
        alert('User not found. Please sign up first.');
        return;
    }

    const parsedUserData = JSON.parse(userData);

    // Check if the password matches
    if (parsedUserData.password === password) {
        alert('Login successful!');
        // Redirect to chatbot homepage after successful login
        localStorage.setItem('currentUser', username); // Store the current user's username
        window.location.href = 'index.html';
    } else {
        alert('Incorrect password. Please try again.');
    }
});
