const avatarInput = document.getElementById('avatar-input');
const avatar = document.getElementById('avatar');

avatarInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            avatar.src = event.target.result;
        };
        reader.readAsDataURL(file);
    }
});

avatar.addEventListener('click', () => {
    avatarInput.click();
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

  
  document.addEventListener("DOMContentLoaded", function(){
    const loginButton = document.querySelector('.show-login-history-button');
    const forms = document.querySelector('.form login')
    loginButton.addEventListener('click', function(event) {
        // Prevent the default form submission
        event.preventDefault();
  
      
        window.location.href = 'login-history.html'; // Replace 'profile.html' with the actual URL of your profile page
    });
   });