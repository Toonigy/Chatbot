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
  if (userInput.toLowerCase().includes("hello")) {
    return "Hi there! How can I help you today?";
  } else if (userInput.toLowerCase().includes("bye")) {
    return "Goodbye! Have a great day!";
  } else {
    return "I'm not sure how to respond to that. Can you try again?";
  }
}

document.getElementById("logout-button").addEventListener("click", () => {
  // Redirect to homepage, effectively "logging out" of Guest Mode
  window.location.href = "index.html";
});
