// Variables and page elements
const form = document.querySelector('form');
const search = document.querySelector('input[type="text"]');
const submit = document.querySelector('input[type="submit"]');
const placeholderBioCopy = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.';

// Functions
async function renderUser(username) {

    function formatDate(date) {
        const dateArr = date.slice(0, 10).split('-'); //dateArr format is year, month, day
        const month = String(new Date(dateArr[0], (Number(dateArr[1]) - 1))).slice(4, 7); // Extracting the month value from the date object
        return `Joined ${dateArr[2]} ${month} ${dateArr[0]}`;
    }

    function updateDOM(data) {
        document.getElementById('avatar').src = data.avatar_url;
        document.querySelector('h1').textContent = data.name;
        document.querySelector('h3').textContent = `@${data.login}`;
        document.querySelector('.date-joined').textContent = formatDate(data.created_at);
        document.querySelector('.bio').textContent = data.bio ? data.bio : placeholderBioCopy;
        document.querySelector('.repos').textContent = data.public_repos;
        document.querySelector('.followers').textContent = data.followers;
        document.querySelector('.following').textContent = data.following;
    }
    
    function updateLinks(data) {
        const links = document.querySelectorAll('[data-json]');
        links.forEach(link => {
            if (data[link.dataset.json]) {
                link.textContent = data[link.dataset.json];
                link.style.opacity = '1';
                link.previousElementSibling.style.opacity = '1';
            } else {
                link.textContent = 'Not Available';
                link.style.opacity = '.5';
                link.previousElementSibling.style.opacity = '.5';
            }
        });
    }

        const url = `https://api.github.com/users/${username}`;
        const res = await fetch(url);
        if (res.ok) {
            const data = await res.json();
            updateDOM(data);
            updateLinks(data);
            document.querySelector('#warning').style.display = 'none';
        } else {
            document.querySelector('#warning').style.display = 'block';
        }
}

// Event listeners
form.addEventListener('submit', (e) => {
    e.preventDefault();
    renderUser(search.value);
});

search.addEventListener('keyup', () => { // Toggles the disabled attribute on/off for the submit button based on search value
    if (search.value) {
        submit.removeAttribute('disabled');
    } else {
        document.querySelector('#warning').style.display = 'none';
        submit.setAttribute('disabled', 'true');
    }
});

renderUser('octocat'); // Initial invocation of renderUser() to populate the page


