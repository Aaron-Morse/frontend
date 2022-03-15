// DOM Elements
const form = document.querySelector('form');
const firstName = document.querySelector('#fName');
const lastName = document.querySelector('#lName');
const email = document.querySelector('#email');
const emailMsg = document.querySelector('#email-msg');
const password = document.querySelector('#password');
const button = document.querySelector('input[type="submit"]');

// Event listeners
form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
});

email.addEventListener('focus', () => { // Email focus listener to hide the email msg example
    if (emailMsg.style.display === 'inline') {
        emailMsg.style.display = 'none';
    }
});

email.addEventListener('blur', () => { // Email focus listener to show the email msg example
    if (emailMsg.style.display === 'none' && email.value === '') {
        emailMsg.style.display = 'inline';
    }
});

// Functions
function checkInputs() {
    // get the values from the inputs
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (firstNameValue === '') {
        setErrorFor(firstName);
    } else {
        setSuccessFor(firstName);
    }

    if (lastNameValue === '') {
        setErrorFor(lastName);
    } else {
        setSuccessFor(lastName);
    }

    if (emailValue === '' || isValidEmail(emailValue) === false) {
        setErrorFor(email);
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === '') {
        setErrorFor(password);
    } else {
        setSuccessFor(password);
    }

    if (firstNameValue && lastNameValue && isValidEmail(emailValue) && passwordValue) {
        firstName.value = '';
        lastName.value = '';
        email.value = '';
        password.value = '';
        button.value = 'enjoy your free trial!';
    }
}

function setErrorFor(input) {
    if (input.nextElementSibling === null) {
        if (input === email) {
            emailMsg.style.display = 'inline';
        }
        const p = createWarningMessage(input);
        input.parentElement.append(p);
        input.classList.add('error');
        input.placeholder = '';
    }  
}

function setSuccessFor(input) {
    if (input.nextElementSibling !== null) {
        if (input === email) {
            emailMsg.style.display = 'none';
        }
        input.nextElementSibling.remove();
        input.classList.remove('error');
    }
}

function createWarningMessage(input) {
    const p = document.createElement('p');
    p.className = 'warning-msg';
    p.textContent = input.getAttribute('data-warning-msg');
    return p;
}

function isValidEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);   
}