const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const submitButton = document.querySelector('.button');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const signInForm = document.getElementById('signInForm');

function validateEmail(email) {
  const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z\-0-9]{2,}))$/;
  return regex.test(email);
}

function toggleError(input, errorElement, message, hasError) {
  input.classList.toggle('error', hasError);
  errorElement.textContent = message;
  errorElement.style.display = hasError ? 'block' : 'none';
}

emailInput.addEventListener('keyup', () => {
  if (emailInput.value === "") {
    toggleError(emailInput, emailError, "Debe completar el correo electrónico", true);
  } else {
    const emailIsValid = validateEmail(emailInput.value);
    toggleError(emailInput, emailError, 'El formato del correo electrónico es incorrecto', !emailIsValid);
  }
  validateForm();
});

passwordInput.addEventListener('keyup', () => {
  const passwordValue = passwordInput.value;
  const passwordIsValid = passwordValue.length > 0; // Basic password validation (non-empty)
  toggleError(passwordInput, passwordError, 'Debe completar la contraseña', !passwordIsValid);
  validateForm();
});

function validateForm() {
  const emailIsValid = validateEmail(emailInput.value);
  const passwordIsValid = passwordInput.value.length > 0; // Basic password validation

  submitButton.disabled = !emailIsValid || !passwordIsValid;
}

signInForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const email = emailInput.value;

  // Simulate form submission (you would typically send this data to a server here)
  console.log(`Submitting form data: email: ${email}`);

  // Redirect to index.html and display alert
  window.location.href = '../index.html';
  alert(`Bienvenido, ${email}`);
});
