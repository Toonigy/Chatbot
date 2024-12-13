document.getElementById("send-button").addEventListener("click", () => {
  const userInput = document.getElementById("user-input").value;

  if (userInput.trim() === "") return; // Prevent sending empty messages

  // Display user message
  const chatbox = document.getElementById("chatbox");
  chatbox.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;

  // Simulate chatbot response
  const botResponse = generateBotResponse(userInput);
  chatbox.innerHTML += `<p><strong>Chatbot:</strong> ${botResponse}</p>`;

  // Scroll to the latest message
  chatbox.scrollTop = chatbox.scrollHeight;

  // Clear input field
  document.getElementById("user-input").value = "";
});

// Simulate a basic bot response based on input
function generateBotResponse(userInput) {
  const lowerInput = userInput.toLowerCase();

  // Common greeting responses
  if (lowerInput.includes("hello") || lowerInput.includes("hi") || lowerInput.includes("hey")) {
    return "Hello! How can I assist you today?";
  }

  // Farewell response
  if (lowerInput.includes("bye") || lowerInput.includes("goodbye") || lowerInput.includes("see you")) {
    return "Goodbye! Have a great day!";
  }

  // General questions or fallback response
  if (lowerInput.includes("how are you")) {
    return "I'm just a bot, but I'm doing well! How about you?";
  }

  if (lowerInput.includes("your name")) {
    return "I don't have a name, but you can call me Chatbot!";
  }

  if (lowerInput.includes("thank you") || lowerInput.includes("thanks")) {
    return "You're welcome!";
  }

  if (lowerInput.includes("help") || lowerInput.includes("support")) {
    return "Sure, what do you need help with?";
  }

  // Default response if no specific match is found
  return "I'm not sure how to respond to that. Can you try asking something else?";
}

document.getElementById("logout-button").addEventListener("click", () => {
  // Redirect to homepage, effectively "logging out" of Guest Mode
  window.location.href = "index.html";
});
