// Page elements
const mobileNavBtn = document.querySelector('#mobile-nav');
const mobileNavCloseBtn = document.querySelector('#mobile-nav-close-btn');
const featuresDropdown = document.querySelector('#features');
const companyDropdown = document.querySelector('#company');

// Functions
function mobileMenuToggle(input) {
    if (input === mobileNavBtn) {
        document.querySelector('nav').style.display = 'block';
        document.querySelector('#mobile-overlay').style.display = 'block';
    } else {
        document.querySelector('nav').style.display = 'none';
        document.querySelector('#mobile-overlay').style.display = 'none';
    }
}

function mobileMenuItemsToggle(input) {
    if (input.style.display === '' || input.style.display === 'none') {
        input.style.display = 'block';
        input.previousElementSibling.style.transform = 'rotate(360deg)';
    } else {
        input.style.display = 'none';
        input.previousElementSibling.style.transform = 'rotate(180deg)';
    }
}

// Event listeners
mobileNavBtn.addEventListener('click', (event) => mobileMenuToggle(event.target));

mobileNavCloseBtn.addEventListener('click', (event) => mobileMenuToggle(event.target));

featuresDropdown.addEventListener('click', (event) => {
    const ul = featuresDropdown.querySelector('ul');
    mobileMenuItemsToggle(ul);
});

companyDropdown.addEventListener('click', (event) => {
    const ul = companyDropdown.querySelector('ul');
    mobileMenuItemsToggle(ul);
});