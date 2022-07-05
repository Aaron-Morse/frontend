const users = {
    user1: {
        userName: '@elonmusk',
        displayName: 'Elon Musk',
        joinedDate: 'June 2009',
        followingCount: 103,
        followerCount: 47900000,
        avatarURL: 'assets/elonmusk.jpg',
        coverPhotoURL: 'assets/elonmusk-cover.jpeg',
        tweets: [
            {
                text: 'I admit to judging books by their cover',
                timestamp: '2/10/2021 00:01:20'
            },
            {
                text: 'Starship to the moon',
                timestamp: '2/09/2021 18:37:12'
            },
            {
                text: 'Out on launch pad, engine swap underway',
                timestamp: '2/09/2021 12:11:51'
            }
        ]
    },

    user2: {
        userName: '@BillGates',
        displayName: 'Bill Gates',
        joinedDate: 'June 2009',
        followingCount: 274,
        followerCount: 53800000,
        avatarURL: 'assets/billgates.jpg',
        coverPhotoURL: 'assets/billgates-cover.jpeg',
        tweets: [
            {
                text: 'Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/',
                timestamp: '2/10/2021 00:01:20'
            },
            {
                text: 'Should I start tweeting memes? Let me know in a comment.',
                timestamp: '2/09/2021 18:37:12'
            },
            {
                text: 'In 2020, I read a book every hour.',
                timestamp: '2/09/2021 12:11:51'
            }
        ]
    }
};


const urlParam = new URLSearchParams(location.search);
const user = users[urlParam.get('user')] || users.user1;
const tweetsSection = document.querySelector('.tweets-section');

function renderUser(user) {
    // .header container content
    // This selector loops through both displayName locations and updates
    document.querySelectorAll('.display-name').forEach(name => name.textContent = user.displayName);
    document.querySelector('.tweet-count').textContent = `${user.tweets.length} Tweets`;
    // .cover-photo container content
    document.querySelector('.cover-photo').style.backgroundImage = `url(${user.coverPhotoURL})`;
    // .profile-details section
    document.querySelector('.user-avatar').src = user.avatarURL;
    document.querySelector('.user-name').textContent = user.userName;
    document.querySelector('.date-joined').textContent = `Joined ${user.joinedDate}`;
    document.querySelector('.following').textContent = user.followingCount;
    document.querySelector('.followers').textContent = `${(user.followerCount/1000000)}M`;
    // .tweets content
    user.tweets.forEach(userTweet => {
        const tweet = document.createElement('div');
        tweet.className = 'tweet';
        tweet.innerHTML = `
        <img class="tweet-avatar" src="${user.avatarURL}" />
        <div class="tweet-contents">
            <div class="tweet-header">
            <p class="tweet-display-name">${user.displayName}</p>
            <img
                height="20px"
                src="./assets/Twitter_Verified_Badge.svg.png"
            />
            <p class="tweet-user-name">${user.userName}</p>
            <p class="tweet-date">${userTweet.timestamp}</p>
            </div>
            <p class="tweet-text">${userTweet.text}</p>
        </div>
        `;
        tweetsSection.appendChild(tweet);
    });
}

renderUser(user);





