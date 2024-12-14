document.addEventListener("DOMContentLoaded", function () {
  const chatbox = document.getElementById("chatbox");

  // Load user profile from localStorage
  const userProfile = JSON.parse(localStorage.getItem("userProfile"));

  // Display personalized greeting if profile exists
  if (userProfile && userProfile.name) {
    const greetings = {
      formal: `Hello, ${userProfile.name}! How can I help you today?`,
      casual: `Hey ${userProfile.name}! What's up?`,
      fun: `Hiya, ${userProfile.name}! Ready to chat?`,
    };
    const greeting = greetings[userProfile.greetingStyle] || greetings.formal;

    chatbox.innerHTML = `<p><strong>Chatbot:</strong> ${greeting}</p>`;

    // Add profile picture if provided
    if (userProfile.profilePic) {
      const profilePicElement = document.createElement("img");
      profilePicElement.src = userProfile.profilePic;
      profilePicElement.alt = "Profile Picture";
      profilePicElement.style.width = "50px";
      profilePicElement.style.borderRadius = "50%";
      chatbox.appendChild(profilePicElement);
    }
  } else {
    // Default greeting for users without a profile
    chatbox.innerHTML = `<p><strong>Chatbot:</strong> Hello! How can I assist you today?</p>`;
  }

  // Handle sending messages from the user
  document.getElementById("send-button").addEventListener("click", function () {
    const userInput = document.getElementById("user-input").value.trim();
    if (userInput === "") return;

    // Display user message
    chatbox.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;

    // Generate and display bot response
    const botResponse = generateBotResponse(userInput);
    chatbox.innerHTML += `<p><strong>Chatbot:</strong> ${botResponse}</p>`;

    // Scroll to the bottom of the chat
    chatbox.scrollTop = chatbox.scrollHeight;

    // Clear the input field
    document.getElementById("user-input").value = "";
  });
});

// Generate a bot response based on user input
function generateBotResponse(userInput) {
  const lowerInput = userInput.toLowerCase();

  // Define responses for common phrases
  if (lowerInput.includes("hi") || lowerInput.includes("hello")) {
    return "Hello! How can I assist you today?";
  }

  if (lowerInput.includes("how are you")) {
    return "I'm just a bot, but I'm doing great! How about you?";
  }

  if (lowerInput.includes("thank you") || lowerInput.includes("thanks")) {
    return "You're welcome! Let me know if there's anything else I can help with.";
  }

  if (lowerInput.includes("goodbye") || lowerInput.includes("bye")) {
    return "Goodbye! Have a great day!";
  }

  if (lowerInput.includes("help")) {
    return "Sure! I'm here to help. Please ask me anything.";
  }

  return "I didn't quite understand that. Can you ask something else?";
}
