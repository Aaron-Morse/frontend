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
        input.previousElementSibling.style.transform = 'rotate(180deg)';
    } else {
        input.style.display = 'none';
        input.previousElementSibling.style.transform = 'rotate(0deg)';
    } 
}

function mobileMenuItemsClose(input) {
    input.style.display = 'none';
    input.previousElementSibling.style.transform = 'rotate(0deg)';
}

// Event listeners
mobileNavBtn.addEventListener('click', (event) => mobileMenuToggle(event.target));

mobileNavCloseBtn.addEventListener('click', (event) => {
    mobileMenuToggle(event.target);
    // Closing out the features and company sections
    mobileMenuItemsClose(featuresDropdown.querySelector('ul'));
    mobileMenuItemsClose(companyDropdown.querySelector('ul'));
});

featuresDropdown.addEventListener('click', (event) => {
    if (window.innerWidth <= 700) {
        mobileMenuItemsToggle(featuresDropdown.querySelector('ul'));
    }
});

companyDropdown.addEventListener('click', (event) => {
    if (window.innerWidth <= 700) {
        mobileMenuItemsToggle(companyDropdown.querySelector('ul'))
    }
});