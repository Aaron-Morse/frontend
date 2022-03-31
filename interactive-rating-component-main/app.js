const ratings = document.querySelectorAll('.rating-container > .circle-container');
const button = document.querySelector('button');

ratings.forEach(rating => {
    rating.addEventListener('click', (e) => {
        e.target.classList.add('selected', 'disabled');
        document.querySelector('span').textContent = `You selected ${e.target.textContent} out of 5`;
        ratings.forEach(rating => {
            if (rating !== e.target) {
                rating.classList.remove('selected', 'disabled');
            }
        });
    });
});

button.addEventListener('click', () => {
    document.querySelector('.card:nth-of-type(2)').style.display = 'block';
});

