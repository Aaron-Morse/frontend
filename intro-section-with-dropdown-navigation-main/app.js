// Page elements
const mobileNavBtn = document.querySelector('#mobile-nav');
const mobileNavCloseBtn = document.querySelector('#mobile-nav-close-btn');

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

// Event listeners
mobileNavBtn.addEventListener('click', (event) => mobileMenuToggle(event.target));
mobileNavCloseBtn.addEventListener('click', (event) => mobileMenuToggle(event.target));