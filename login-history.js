document.addEventListener("DOMContentLoaded", function () {
    const showLoginHistoryButton = document.querySelector('.show-login-history-button');
    const loginHistoryContainer = document.querySelector('.login-history');
  
    // Handle the "Show Login History" button click event
    showLoginHistoryButton.addEventListener('click', function (event) {
      event.preventDefault();
  
      // Fetch the user's login history from the database
      fetchLoginHistoryFromDatabase().then((loginHistory) => {
        loginHistoryContainer.innerHTML = ''; // Clear previous entries
  
        if (loginHistory && loginHistory.length > 0) {
          loginHistory.forEach((loginInfo) => {
            const loginEntry = createLoginEntry(loginInfo);
            loginHistoryContainer.appendChild(loginEntry);
          });
        } else {
          const noHistoryMessage = document.createElement('p');
          noHistoryMessage.textContent = 'No login history available.';
          loginHistoryContainer.appendChild(noHistoryMessage);
        }
      });
    });
  });
  
  function fetchLoginHistoryFromDatabase() {
    // Simulated database retrieval - Replace with your actual database integration
    return new Promise((resolve) => {
      // Simulated login history data
      const history = [
        { browser: 'Chrome', os: 'Windows', deviceType: 'Desktop', ipAddress: '192.168.1.100', loginTime: '2023-10-24 10:30:45' },
        // Add more login history items as needed
      ];
      resolve(history);
    });
  }
  
  function createLoginEntry(loginInfo) {
    const entry = document.createElement('div');
    entry.classList.add('login-entry');
    entry.innerHTML = `
      <p><strong>Browser:</strong> ${loginInfo.browser}</p>
      <p><strong>Operating System:</strong> ${loginInfo.os}</p>
      <p><strong>Device Type:</strong> ${loginInfo.deviceType}</p>
      <p><strong>IP Address:</strong> ${loginInfo.ipAddress}</p>
      <p><strong>Login Time:</strong> ${loginInfo.loginTime}</p>
    `;
    return entry;
  }
// ...

// Create a function to display detailed login information
function displayLoginInformation(loginInfo) {
    // Redirect to a new page (e.g., LoginInformation.html) with the selected loginInfo
    // You'll need to implement the LoginInformation.html page to display detailed information.
    window.location.href = `LoginInformation.html?loginTime=${loginInfo.loginTime}`;
  }
  
  // ...
  
  function createLoginEntry(loginInfo) {
    const entry = document.createElement('div');
    entry.classList.add('login-entry');
    entry.innerHTML = `
      <p><strong>Browser:</strong> ${loginInfo.browser}</p>
      <p><strong>Operating System:</strong> ${loginInfo.os}</p>
      <p><strong>Device Type:</strong> ${loginInfo.deviceType}</p>
      <p><strong>IP Address:</strong> ${loginInfo.ipAddress}</p>
      <p><strong>Login Time:</strong> ${loginInfo.loginTime}</p>
    `;
  
    // Add a click event listener to the entry
    entry.addEventListener('click', () => {
      displayLoginInformation(loginInfo);
    });
  
    return entry;
  }
  