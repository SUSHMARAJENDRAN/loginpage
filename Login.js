document.addEventListener("DOMContentLoaded", function(){
  const loginButton = document.querySelector('.butt');
  const forms = document.querySelector('.form login')
  loginButton.addEventListener('click', function(event) {
      // Prevent the default form submission
      event.preventDefault();

    
      window.location.href = 'Profile.html'; // Replace 'profile.html' with the actual URL of your profile page
  });
 });
function setTheme() {
  const now = new Date();
  const hours = now.getHours();
  const body = document.body;

  if (hours >= 6 && hours < 18) {
    body.classList.remove('night-theme');
    body.classList.add('day-theme');
  } else {
    body.classList.remove('day-theme');
    body.classList.add('night-theme');
  }
}


setTheme(); // Set the initial theme