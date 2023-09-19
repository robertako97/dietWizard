const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },

    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/');

      return response;
    } else {
      alert('Login failed. Please try again.');
    }
  }
};



document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);


document.addEventListener('DOMContentLoaded', () => {
  const passwordInput = document.getElementById("password");
  const showPasswordCheckbox = document.getElementById("showPassword");

  showPasswordCheckbox.addEventListener("change", function () {
    if (showPasswordCheckbox.checked) {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  });

  const signupFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#fname').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
    const username = document.querySelector('#username').value.trim();
    const lastname = document.querySelector('#lname').value.trim();
    const age = document.querySelector('#birthdate').value.trim();
    const gender = document.querySelector('#gender').value.trim();
    const weight = document.querySelector('#weight').value.trim();
    const height = document.querySelector('#height').value.trim();
    const weightgoal = document.querySelector('#weightgoal').value.trim();
    const activitylevel = document.querySelector('#activitylevel').value.trim();
    const typeofdiet = document.querySelector('#typeofdiet').value.trim();
    const allergies = document.querySelector('#allergies').value.trim();

    if (name && email && password && lastname && username) {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({
          name,
          email,
          password,
          lastname,
          username,
          age,
          gender,
          weight,
          height,
          weightgoal,
          activitylevel,
          typeofdiet,
          allergies
        }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Sign Up failed, verify credentials and try again.');
      }
    }
  };

  document
      .querySelector('#signupForm')
      .addEventListener('submit', signupFormHandler);


});


