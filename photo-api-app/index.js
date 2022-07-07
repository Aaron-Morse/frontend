const searchForm = document.querySelector('#search-form');
const searchBarText = document.querySelector('#search-bar');

async function fetchPhotos() {
    const request = new Request(`https://api.pexels.com/v1/search?query=${searchBarText.value}`, {
        method: 'GET',
        headers: {
            Authorization: '563492ad6f91700001000001635f6558d3a6429fab8811e051cd7714'
        }
    });
    const response = await fetch(request);
    const data = await response.json();
    const photos = data.photos;
    const photosContainer = document.querySelector('.photos-container');
    photosContainer.innerHTML = '';
    photos.forEach(photo => {
        const img = document.createElement('img');
        img.classList.add('photo');
        img.src = `${photo.src.portrait}`;
        photosContainer.appendChild(img);
    });
}

searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        fetchPhotos();
});






