const wrapUpFormHandler = async (event) => {

  event.preventDefault();

  const firstName = document.querySelector('#firstName').value.trim();
  const lastName = document.querySelector('#lastName').value.trim();
  const birthdate = document.querySelector('#birthdate').value.trim();
  const gender = document.querySelector('#gender').value.trim();
  const weight = document.querySelector('#weight').value.trim();
  const height = document.querySelector('#height').value.trim();
  const weightGoal = document.querySelector('#weightGoal').value.trim();
  const activityLevel = document.querySelector('#activityLevel').value.trim();
  const typeOfDiet = document.querySelector('#typeOfDiet').value.trim();

  if (firstName && lastName && birthdate && gender && weight && height && weightGoal && activityLevel && typeOfDiet) {
    const response = await fetch('/api/users/individual', {
      method: 'POST',
      body: JSON.stringify({
        firstName,
        lastName,
        birthdate,
        gender,
        weight,
        height,
        weightGoal,
        activityLevel,
        typeOfDiet
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      console.log('wrapUp response: ', response)
      document.location.replace('/');
    } else {
      alert('Wrap Up failed, verify credentials and try again.');
    }
  }
};


document
  .querySelector('.wrapUp-form')
  .addEventListener('submit', wrapUpFormHandler);
