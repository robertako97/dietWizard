const signupFormHandler = async (event) => {

  event.preventDefault();

  const userName = document.querySelector('#username').value.trim();
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();
  const confirmPassword = document.querySelector('#confirm-password').value.trim();

  if (password !== confirmPassword) {
    alert('Password do not match');
    return false;
  }


  if (userName && email && password && confirmPassword) {
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        userName,
        email,
        password,
        confirmPassword
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(response);
    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Sign Up failed, verify credentials and try again.');
    }
  }
};


document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
