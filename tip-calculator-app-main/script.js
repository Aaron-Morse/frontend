// Variables
const billInput = document.querySelector('input#bill');
const tipSection = document.querySelector('.tip-section');
const tipInputs = document.querySelectorAll('.tip-percentage');
const customTip = document.querySelector('#custom-tip');
const peopleLabel = document.querySelector('label[for="people"]');
const peopleInput = document.querySelector('input#people');
const totals = document.querySelectorAll('.total');
const resetButton = document.querySelector('button');
const warningMsg = document.querySelector('.warning-msg');

let bill = 0;
let tip = 0;
let people = 0;


// Functions
function calculateTotals() {
    if (bill || tip || people) {
        resetButton.style.opacity = '1';
    }
    if (bill && tip && people) {
        totals[0].textContent = `$${((bill * tip) / people).toFixed(2)}`; 
        totals[1].textContent = `$${((bill * (1 + tip)) / people).toFixed(2)}`;
    }
}

// This needs to be finished
function notification() { // Sets reminder and order that people cannot be empty
    if (!people) {
        peopleInput.style.border = '2px solid crimson';
        warningMsg.style.display = 'block';
    } 
    if (!bill && !tip && !people || bill && tip && people) {
        peopleInput.style.border = 'none';
        warningMsg.style.display = 'none';
    }
}

// Event listeners
billInput.addEventListener('blur', () => { // On blur event the value of the bill input is stored in the bill variable
    bill = Number(billInput.value);
    calculateTotals();
    notification();
});


tipInputs.forEach(input => {
    input.addEventListener('click', (event) => {
        tipInputs.forEach(input => { 
            if (input !== event.target) {
                input.classList.remove('tip-percentage-highlight'); // Loops through all tipInputs and checks if it does not equal event target to remove highlight class
            } 
        });
        if  (event.target.id !== 'custom-tip') {
            customTip.value = ''; // Checks if event target isn't the custom tip input in order to reset the value because another one was selected
        } 
        input.classList.add('tip-percentage-highlight'); // Adds the highlight class to the input so user knows it's been selected
        tip = Number(input.getAttribute('data-percent')); // tip variable is set to the data attribute value
        calculateTotals();
        notification() 
    });
});

customTip.addEventListener('blur', () => {
    tip = Number(customTip.value) / 100; // Unique event listener for the customTip input to be used for the tip variable
    calculateTotals();
    notification();
});


peopleInput.addEventListener('blur', () => { // On blur event the value of the people input is stored in the people variable
    people = Number(peopleInput.value);
    calculateTotals();
    notification();
});


resetButton.addEventListener('click', () => { // Resets all values back to default
    bill = 0, tip = 0, people = 0;
    billInput.value = '', peopleInput.value = '', customTip.value = '';
    totals[0].textContent = '$0', totals[1].textContent = '$0';
    resetButton.style.opacity = '0.4';
    tipInputs.forEach(input => {
        input.classList.remove('tip-percentage-highlight');
    });
    notification();
});





