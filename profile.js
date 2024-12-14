document.getElementById("profile-form").addEventListener("submit", function(event) {
  event.preventDefault();

  // Get user inputs
  const name = document.getElementById("profile-name").value;
  const profilePic = document.getElementById("profile-pic").value;
  const greetingStyle = document.getElementById("greeting-style").value;

  // Save profile data to localStorage
  const userProfile = {
    name: name,
    profilePic: profilePic,
    greetingStyle: greetingStyle,
  };

  localStorage.setItem("userProfile", JSON.stringify(userProfile));

  alert("Profile saved successfully!");
});
