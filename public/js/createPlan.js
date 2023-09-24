const createPlan = async (event) => {
  event.preventDefault();

  const dietType = document.querySelector('#dietType').value;
  const weightGoal = document.querySelector('#weightGoal').value.trim();
  const dietDuration = document.querySelector('#dietDuration').value.trim();
  const individualId = document.querySelector('input[name="individual_id"]').value;

  if (dietType && weightGoal && dietDuration) {
    const response = await fetch('/api/plans/create', {
      method: 'POST',
      body: JSON.stringify({
        dietType,
        weightGoal,
        dietDuration,
        individualId
      }),
      headers: { 'Content-Type': 'application/json' },
    });

  if (response.ok) {
    document.location.replace('/profile');
  } else {
    alert('Create Plan failed, verify credentials and try again.');
  }
}
};

document
  .querySelector('.createPlan-form')
  .addEventListener('submit', createPlan);