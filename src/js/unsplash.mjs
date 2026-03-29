// thief.getPalette(sourceImage, colorCount, quality (1high-50low))
const thief = new ColorThief();
// const extractColor = thief.getPalette()

const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_API_KEY;
const UNSPLASH_API_URL = 'https://api.unsplash.com/'

document.querySelector(".search-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const query = document.querySelector("#search").value.trim();
    renderImage(query);
});

async function fetchImage(query = "nature") {
    console.log(query);
    
    const totalPagesCheck = await fetch(
        `${UNSPLASH_API_URL}search/photos?query=${encodeURIComponent(query)}&client_id=${UNSPLASH_ACCESS_KEY}`
    );
    
    let numData = await totalPagesCheck.json();
    const totalPages = numData.total_pages;
    
    function limitPage() {
        if (Number(totalPages) > 10) {
            let newPages = '10';
            const randomPage = Math.floor(Math.random() * Number(newPages) + 1);
            console.log(newPages);
            return randomPage
        } else {
            console.log(totalPages);
            const randomPage = Math.floor(Math.random() * Number(totalPages) + 1);
            return randomPage;
        }
    }
    
    const response = await fetch(
        `${UNSPLASH_API_URL}search/photos?query=${encodeURIComponent(query)}&per_page=9&page=${limitPage()}&client_id=${UNSPLASH_ACCESS_KEY}`
    );

    let data = await response.json();
    console.log(data);
    return data.results;
}

export function imageTemplate(imageData) {
    return `<div>
        <img src="${imageData.urls.regular}" alt="${imageData.alt_description}">
        </div>`
}

async function displayImage(query) {
    const imageData = await fetchImage(query);
    const imageContainer = document.querySelector(".image-container");

    if(imageContainer) {
        imageContainer.innerHTML="";
        // const extractColor = thief.getPalette()
    }
    
    imageData.map(image => {
        const generatedHTML = imageTemplate(image);

        imageContainer.innerHTML += generatedHTML;
    });
}

export async function renderImage(query) {
    displayImage(query);
}

const select = document.querySelector("#template-select");

select.addEventListener('change', (e) => {
    const style = e.target.value;
    console.log(`grid: ${style}`);

    if(style === "1") {
        document.querySelector(".image-container")?.classList.remove("template1", "template2", "template3", "defaultTemplate");
        document.querySelector(".image-container")?.classList.add(`template${style}`);
    } else if (style === "2") {
        document.querySelector(".image-container")?.classList.remove("template1", "template2", "template3", "defaultTemplate");
        document.querySelector(".image-container")?.classList.add(`template${style}`);
    } else if (style === "3") {
        document.querySelector(".image-container")?.classList.remove("template1", "template2", "template3", "defaultTemplate");
        document.querySelector(".image-container")?.classList.add(`template${style}`);
    } else {
        document.querySelector(".image-container")?.classList.remove("template1", "template2", "template3",);
        document.querySelector(".image-container")?.classList.add(`defaultTemplate`);
    }
})

