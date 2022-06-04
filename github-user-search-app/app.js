// Variables and page elements
const search = document.querySelector('input[type="text"]');
const submit = document.querySelector('input[type="submit"]');
const avatar = document.querySelector('#avatar');
const h1 = document.querySelector('h1');
const h3 = document.querySelector('h3');
const dateJoined = document.querySelector('p.date-joined');
const bio = document.querySelector('.bio');
const repos = document.querySelector('.repos');
const followers = document.querySelector('.followers');
const following = document.querySelector('.following');
const placeholderBioCopy = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.';

// Functions
async function getUser(username) {

    function formatDate(date) {
        const dateArr = date.slice(0, 10).split('-'); //dateArr format is year, month, day
        const month = String(new Date(dateArr[0], (Number(dateArr[1]) - 1))).slice(4, 7); // Extracting the month value from the date object
        return `Joined ${dateArr[2]} ${month} ${dateArr[0]}`;
    }

    function updateDOM(data) {
        avatar.src = data.avatar_url;
        h1.textContent = data.name;
        h3.textContent = `@${data.login}`;
        dateJoined.textContent = formatDate(data.created_at);
        bio.textContent = bio.data ? bio.data : placeholderBioCopy;
        repos.textContent = data.public_repos;
        followers.textContent = data.followers;
        following.textContent = data.following;
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
        console.log(res);
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
submit.addEventListener('click', () => {
    getUser(search.value);
});

search.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        getUser(search.value);
    }
});

search.addEventListener('keyup', () => { // Toggles the disabled attribute on/off for the submit button based on search value
    if (search.value) {
        submit.removeAttribute('disabled');
    } else {
        document.querySelector('#warning').style.display = 'none';
        submit.setAttribute('disabled', 'true');
    }
});

getUser('octocat'); // Initial invocation of getuser() to populate the page


