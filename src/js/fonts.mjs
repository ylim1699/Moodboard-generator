import { geminiAI } from './openai.mjs'

export async function getFonts(userInput) {
    try {
        const response = await geminiAI(userInput);
        const [ font1, font2, font3 ] = response.split(",");
        console.log(font1);
        console.log(font2);
        console.log(font3);
        
        renderFont(font1);
        renderFont(font2);
        renderFont(font3);

    } catch(error) {
        if (error.status === 429) {
            console.log('rate limit exceeded');
            console.log(error.message);
        } else {
            console.log(error);
        }
    }
}

function fontTemplate(data) {
    return `<li>
        ${data}
    </li>`
}

function displayFonts(data) {
    const html = fontTemplate(data);
    const parentHTML = document.querySelector(".fontsContainer");
    parentHTML.innerHTML += html;
}

function renderFont(data) {
    displayFonts(data);
}





























