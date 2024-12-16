// Get references to buttons and chat elements
const guestBtn = document.getElementById('guest-btn');
const signupBtn = document.getElementById('signup-btn');
const loginBtn = document.getElementById('login-btn');
const chatArea = document.getElementById('chat-area');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const chatOutput = document.getElementById('chat-output');

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

// Function to start chat for a user (guest mode for now)
function startChat(userType) {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        userType = currentUser; // Change to logged-in user's name
    }

    chatArea.innerHTML = `
        <div id="chatbox">
            <div id="chat-output"></div>
            <input type="text" id="user-input" placeholder="Type your message..." />
            <button id="send-btn">Send</button>
        </div>
    `;

    chatOutput.innerHTML = `<p>Welcome, ${userType}! How can I assist you today?</p>`;

    // Event listener for sending a message
    sendBtn.addEventListener('click', sendMessage);
    userInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
}

// Function to send a message and receive a response
function sendMessage() {
    const userMessage = userInput.value.trim();

    if (userMessage) {
        // Display the user's message
        displayMessage(userMessage, 'user');

        // Simple chatbot response
        const botResponse = getBotResponse(userMessage);

        // Display the chatbot's message after a short delay
        setTimeout(() => {
            displayMessage(botResponse, 'bot');
        }, 500);
    }

    // Clear the input field after sending the message
    userInput.value = '';
}

// Function to display a message in the chat area
function displayMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add(sender);
    messageElement.textContent = message;
    chatOutput.appendChild(messageElement);

    // Scroll to the bottom of the chat output
    chatOutput.scrollTop = chatOutput.scrollHeight;
}

// Function to generate chatbot responses based on user input
function getBotResponse(input) {
    // Simple responses based on keywords
    if (input.toLowerCase().includes('hello')) {
        return "Hi! How can I help you today?";
    } else if (input.toLowerCase().includes('bye')) {
        return "Goodbye! Have a great day!";
    } else {
        return "Sorry, I didn't quite understand that. Can you please rephrase?";
    }
}
