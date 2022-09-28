// Variables
const themeSelector =   document.querySelector('.theme-selector')
const themeImg = document.querySelector('.theme-selector img');

// Functions
async function renderUser(username = 'octocat') {

    function updateUserDetails() {
        const date = data.created_at.slice(0, 10).split('-');
        const year = date[0];
        const month = Intl.DateTimeFormat('en', { month: 'short' }).format(new Date(date[1]));
        const day = date[2];
        const loremIpsum = `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
        Quisque volutpat mattis eros.`;
        document.querySelector('.user-details img').src = data.avatar_url;
        document.querySelector('h2').textContent = data.name;
        document.querySelector('h3').textContent = `@${data.login}`;
        document.querySelector('.date-joined').textContent = `Joined ${day} ${month} ${year}`;
        document.querySelector('.bio').textContent = data.bio || loremIpsum;
    }

    function updateUserStats() {
        document.querySelector('.repos').textContent = data.public_repos;
        document.querySelector('.followers').textContent = data.followers;
        document.querySelector('.following').textContent = data.following;
    }

    function updateLinks() {
        const linksData = [data.location, data.blog, data.twitter_username, data.company];
        const links = document.querySelectorAll('li span');
        for (let i = 0; i < linksData.length; i++) {
            if (linksData[i]) {
                links[i].textContent = linksData[i];
                links[i].style.opacity = 1;
                links[i].previousElementSibling.style.opacity = 1;
            } else {
                links[i].textContent = 'Not Available';
                links[i].style.opacity = .5;
                links[i].previousElementSibling.style.opacity = .5;
            }
        }
    }

    const url = `https://api.github.com/users/${username}`;
    const res = await fetch(url);
    const data = await res.json();
    if (res.ok) {
        updateUserDetails();
        updateUserStats();
        updateLinks();
    } else {
    }
}

function updateTheme() {
    const documentEl = document.documentElement;
    const moonSVG = themeSelector.querySelector('#moon');
    const sunSVG = themeSelector.querySelector('#sun');
    const spanEl = themeSelector.querySelector('span');

    if (documentEl.classList.contains('dark')) {
        documentEl.classList.toggle('dark');
        spanEl.textContent = 'dark'
        sunSVG.style.display = 'none';
        moonSVG.style.display = 'block';
    } else {
        documentEl.classList.toggle('dark');
        spanEl.textContent = 'light'
        sunSVG.style.display = 'block';
        moonSVG.style.display = 'none';
    }
}

// Event listeners
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.querySelector('input').value;
    renderUser(username);
});

document.addEventListener('DOMContentLoaded', () => {
    renderUser();
    // Displays the moon svg on load
    themeSelector.querySelector('svg').style.display = 'block';
    themeSelector.addEventListener('click', updateTheme);
});