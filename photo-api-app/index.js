const searchForm = document.querySelector('#search-form');

async function fetchPhotos() {
    const searchBarText = document.querySelector('#search-bar').value;
    const res = await fetch(`https://api.pexels.com/v1/search?query=${searchBarText}`, {
        method: 'GET',
        headers: {
            Authorization: '563492ad6f91700001000001635f6558d3a6429fab8811e051cd7714'
        }
    });
    const data = await res.json();
    console.log(data);
    const photos = data.photos;
    console.log(photos)
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




