import { geminiAI } from './openai.mjs'

export async function displayFonts(userInput) {
    try {
        const response = await geminiAI(userInput);
        const [ font1, font2, font3 ] = response.split(",");
        console.log(font1);
        console.log(font2);
        console.log(font3);
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
    return `<p>
        ${data}
    </p>`
}

const displayedFont = document.querySelector('.fontsContainer');





























