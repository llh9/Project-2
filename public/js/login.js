const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const user_name = document.querySelector('#user_name').value.trim();
    const password = document.querySelector('#password').value.trim();
  
    if (user_name && password) {

      // Send a POST request to the API endpoint
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ user_name, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, alert user, allow route handler to redirect
        alert(response.statusText);
        // If successful, redirect the browser to the profile page
        // document.location.replace('/campaign');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  const signupFormHandler = async (event) => {
    event.preventDefault();

    // Collect values from the login form
    const user_name = document.querySelector('#user_name').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (user_name && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ user_name, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/campaign');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
  
 
 
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
  