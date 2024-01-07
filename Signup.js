document.addEventListener('DOMContentLoaded', function() {
  const signupButton = document.querySelector('.field.button-field button');
  const nameInput = document.querySelector('input[type="Name"]');
  const emailInput = document.querySelector('input[type="email"]');
  const passwordInput = document.querySelector('input[type="password"]');
  const overlay = document.querySelector('.overlay');
  
  signupButton.addEventListener('click', function(event) {
      event.preventDefault(); // Prevents the default form submission
      
      // Check if all fields are filled
      if (nameInput.value.trim() !== '' && emailInput.value.trim() !== '' && passwordInput.value.trim() !== '') {
          // Show the overlay to indicate loading state
          overlay.style.display = 'block'; // Display the overlay
          
          // Simulate a delay before redirecting to the profile page
          setTimeout(function() {
              // Redirect to the profile page after successful signup
              window.location.href = 'profile.html'; // Replace 'profile.html' with your actual profile page URL
          }, 2000); // Delay of 2 seconds before redirecting (2000 milliseconds)
      } else {
          // Alert the user to fill in all fields
          alert('Please fill in all the fields');
      }
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