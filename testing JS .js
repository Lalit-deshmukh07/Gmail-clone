function sendMessage(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "",
        Password : "",
        To : '',
        From : "",
        Subject : "",
        Body : ""
    }).then(
      message => alert("message")
    );
}



document.addEventListener("DOMContentLoaded", function() {
  var profile = document.getElementById("header-profile");
  var logoutDropdown = document.querySelector(".logout-dropdown .drop-down-content");

  profile.addEventListener("click", function(event) {
    event.preventDefault();
    if (logoutDropdown.style.display === "block") {
      logoutDropdown.style.display = "none";
    } else {
      logoutDropdown.style.display = "block";
    }
  });

  
  document.addEventListener("click", function(event) {
    if (!profile.contains(event.target) && !logoutDropdown.contains(event.target)) {
      logoutDropdown.style.display = "none";
    }
  }); 

  document.getElementById("logo-btn").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "./LogIn.html"; 
    history.replaceState(null, "", "./LogIn.html");
  });
});
