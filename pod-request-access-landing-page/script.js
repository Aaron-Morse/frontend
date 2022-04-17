// Variables
const submit = document.querySelector('input[type="submit"]');
const email = document.querySelector('input[type="email"]');
const emailWarning = document.querySelector('#email-warning');

// Functions
function emailValidation(email) {
    const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    return regex.test(email);
}

// Event listeners
submit.addEventListener('click', () => {
    const emailValue = email.value;
    if (emailValue) {
        if (emailValidation(emailValue)) {
            emailValue = '';
            emailWarning.style.display = 'None';
        } else {
            emailWarning.style.display = 'Block';
        }
    }
});