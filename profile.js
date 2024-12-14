document.getElementById("profile-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("profile-name").value;
  const profilePic = document.getElementById("profile-pic").value;
  const greetingStyle = document.getElementById("greeting-style").value;
  const mood = document.getElementById("mood").value;

  const userProfile = {
    name: name,
    profilePic: profilePic,
    greetingStyle: greetingStyle,
    mood: mood, // Store mood
  };

  localStorage.setItem("userProfile", JSON.stringify(userProfile));
  alert("Profile saved successfully!");
});
