// Get references to buttons and chat area
const guestBtn = document.getElementById('guest-btn');
const signupBtn = document.getElementById('signup-btn');
const loginBtn = document.getElementById('login-btn');
const chatArea = document.getElementById('chat-area');

// Event listener for guest mode
guestBtn.addEventListener('click', () => {
    startChat('Guest');
});

// Event listener for signup button
signupBtn.addEventListener('click', () => {
    alert('Sign up page coming soon!');
    // Implement signup functionality later
});

// Event listener for login button
loginBtn.addEventListener('click', () => {
    alert('Log in page coming soon!');
    // Implement login functionality later
});

// Function to initialize chat for the guest
function startChat(userType) {
    chatArea.innerHTML = `<p>Welcome, ${userType}! How can I assist you today?</p>`;
    // Add chatbot interaction here in the next part
}
