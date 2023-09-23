// Get all showPassword checkboxes
const showPasswordCheckboxes = document.querySelectorAll(".showPassword");

showPasswordCheckboxes.forEach(checkbox => {
  checkbox.addEventListener("change", function() {
    // Find the closest password-container and then its child input of type 'password' or 'text'
    const passwordInput = checkbox.closest('.password-container').querySelector('input[type="password"], input[type="text"]');

    // Toggle the input type based on the checkbox state
    passwordInput.type = checkbox.checked ? "text" : "password";
  });
});
