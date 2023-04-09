const nicknameInput = document.querySelector('#nickname');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const inviterInput = document.querySelector('#inviter');
const checkbox = document.querySelector('#accept-conditions');
const registerButton = document.querySelector('#register-button');

function checkForm() {
  if (
    nicknameInput.value &&
    emailInput.value &&
    passwordInput.value &&
    checkbox.checked
  ) {
    registerButton.disabled = false;
    registerButton.style.backgroundColor = "#ff9800"; /* orange color */
  } else {
    registerButton.disabled = true;
    registerButton.style.backgroundColor = "#ffcc80"; /* lighter orange color */
  }
}

nicknameInput.addEventListener('input', checkForm);
emailInput.addEventListener('input', checkForm);
passwordInput.addEventListener('input', checkForm);
inviterInput.addEventListener('input', checkForm);
checkbox.addEventListener('change', checkForm);

document.querySelector('#registration-form').addEventListener('submit', (event) => {
  event.preventDefault();
});
