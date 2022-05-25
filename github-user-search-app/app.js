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
const city = document.querySelector('.city p');
const website = document.querySelector('.website p');
const twitter = document.querySelector('.twitter p');
const company = document.querySelector('.company p');
const placeholderBioCopy = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.';

// Functions
async function getUser(username) {
    let url = `https://api.github.com/users/${username}`;

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
        if (data.location) {
            city.textContent = data.location;
            city.style.opacity = '1';
            city.previousElementSibling.style.opacity = '1';
        } else {
            city.textContent = 'Not Available';
            city.style.opacity = '.5';
            city.previousElementSibling.style.opacity = '.5';
        }

        if (data.blog) {
            website.textContent = data.blog;
            website.style.opacity = '1';
            website.previousElementSibling.style.opacity = '1';
        } else {
            website.textContent = 'Not Available';
            website.style.opacity = '.5';
            website.previousElementSibling.style.opacity = '.5';
        }

        if (data.twitter_username) {
            twitter.textContent = data.twitter_username;
            twitter.style.opacity = '1';
            twitter.previousElementSibling.style.opacity = '1';
        } else {
            twitter.textContent = 'Not Available';
            twitter.style.opacity = '.5';
            twitter.previousElementSibling.style.opacity = '.5';
        }

        if (data.company) {
            company.textContent = data.company;
            company.style.opacity = '1';
            company.previousElementSibling.style.opacity = '1';
        } else {
            company.textContent = 'Not Available';
            company.style.opacity = '.5';
            company.previousElementSibling.style.opacity = '.5';
        }
    }
    
    try {
        let res = await fetch(url);
        let data = await res.json();
        updateDOM(data);
        updateLinks(data);
    } catch(error) {
        console.log(error);
    }
}

// Event listeners
submit.addEventListener('click', () => {
    getUser(search.value);
});

search.addEventListener('keyup', () => { // Toggles the disabled attribute on/off for the submit button based on search value
    search.value ? submit.removeAttribute('disabled') : submit.setAttribute('disabled', 'true');
});

getUser('octocat'); // Initial invocation of getuser() which allows the page to not be blank

