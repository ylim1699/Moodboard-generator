import { loadHeaderFooter } from './js/utils.mjs';

const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_API_KEY;
const UNSPLASH_API_URL = 'https://api.unsplash.com/photos'

async function fetchImage() {
    const response = await fetch(
        `${UNSPLASH_API_URL}?client_id=${UNSPLASH_ACCESS_KEY}`
    );

    let data = await response.json();
    console.log(data);
    return data;
}


async function displayImage() {
    const imageData = await fetchImage();
    const imageContainer = document.querySelector(".image-container");
    imageData.map(image => {
        imageContainer.innerHTML += imageTemplate(image);
    });
}

function imageTemplate(data) {
    return `<div>
    <img src="${data.urls.small}" alt="${data.alt_description}">
    </div>`
}

fetchImage();
displayImage();
loadHeaderFooter();