const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_API_KEY;
const UNSPLASH_API_URL = 'https://api.unsplash.com/'

document.querySelector(".search-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const query = document.querySelector("#search").value.trim();
    renderImage(query);
});

async function fetchImage(query = "nature") {
    const randomPage = Math.floor(Math.random() * 20) + 1;
    const response = await fetch(
        `${UNSPLASH_API_URL}search/photos?query=${encodeURIComponent(query)}&per_page=6&page=${randomPage}&client_id=${UNSPLASH_ACCESS_KEY}`
    );

    let data = await response.json();
    console.log(data);
    return data.results;
}

async function displayImage(query) {
    const imageData = await fetchImage(query);
    const imageContainer = document.querySelector(".image-container");

    if(imageContainer) {
        imageContainer.innerHTML="";
    }
    
    imageData.map(image => {
        imageContainer.innerHTML += imageTemplate(image);
    });
}

function imageTemplate(data) {
    return `<div>
    <img src="${data.urls.small}" alt="${data.alt_description}">
    </div>`
}

export async function renderImage(query) {
    displayImage(query);
}
