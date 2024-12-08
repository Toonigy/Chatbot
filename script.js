// Get the chat box and input field
const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

// Function to display messages in the chat box
function displayMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add(sender);
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

// Function to handle user input
function sendMessage() {
    const userMessage = userInput.value.trim();
    if (userMessage === '') return;

    // Display user's message
    displayMessage(userMessage, 'user');
    userInput.value = '';

    // Get a response from the chatbot (for now, it's just a simple predefined response)
    setTimeout(() => {
        const botMessage = getBotResponse(userMessage);
        displayMessage(botMessage, 'bot');
    }, 500);
}

// Simple function to generate bot responses (can be improved with AI or external API)
function getBotResponse(message) {
    if (message.toLowerCase().includes('hello')) {
        return 'Hi there! How can I help you today?';
    } else if (message.toLowerCase().includes('how are you')) {
        return 'I am doing great, thank you!';
    } else {
        return 'Sorry, I did not understand that. Can you please rephrase?';
    }
}
