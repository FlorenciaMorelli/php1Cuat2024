const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const submitButton = document.querySelector('.button');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

function validateEmail(email) {
  const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z\-0-9]{2,}))$/;
  return regex.test(email);
}

function toggleError(input, errorElement, message, hasError) {
  input.classList.toggle('error', hasError);
  errorElement.textContent = message;
  errorElement.style.display = hasError ? 'block' : 'none';
}

emailInput.addEventListener('blur', () => {
  const emailIsValid = validateEmail(emailInput.value);
  toggleError(emailInput, emailError, 'El formato del correo electrónico es incorrecto', !emailIsValid);
});

passwordInput.addEventListener('blur', () => {
  const passwordValue = passwordInput.value;
  const passwordIsValid = passwordValue.length > 0; // Basic password validation (non-empty)
  toggleError(passwordInput, passwordError, 'Debe completar este campo', !passwordIsValid);
});

submitButton.addEventListener('click', (event) => {
  event.preventDefault();

  const emailIsValid = validateEmail(emailInput.value);
  const passwordIsValid = passwordInput.value.length > 0;

  if (!emailIsValid || !passwordIsValid) {
    return;
  }

});
