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
        city.textContent = data.location;
        website.textContent = data.blog;
        twitter.textContent = data.twitter_username;
        company.textContent = data.company;
    }

    try {
        let res = await fetch(url);
        let data = await res.json();
        updateDOM(data);
    } catch(error) {
        console.log(error);
    }
}

// Event listeners
submit.addEventListener('click', () => {
    getUser(search.value);
});

getUser('octocat'); // Initial invocation of getuser() which allows the page to not be blank

