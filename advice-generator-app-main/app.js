const quoteBtn = document.querySelector('.quote-btn');

async function fetchSlip() {
    let url = 'https://api.adviceslip.com/advice';
    try {
        let response = await fetch(url);
        let data = await response.json();
        document.querySelector('span').textContent = data.slip.id;
        document.querySelector('p').textContent = `“${data.slip.advice}”`;
    } 
    catch (error) {
        console.log(error);
    }
}

quoteBtn.addEventListener('click', fetchSlip);


