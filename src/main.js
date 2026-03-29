import { loadHeaderFooter} from './js/utils.mjs';
import { renderImage } from './js/unsplash.mjs';
import { handleLogout, isAuthed } from "./js/auth.mjs";
import { displayFonts } from './js/fonts.mjs';

document.querySelector("#fontCheck").addEventListener("change", (e) => {
    e.preventDefault();
    if (e.target.checked) {
        displayFonts("minimalist");
    } else {
        const fontsContainer = document.querySelector(".fontsContainer");
        fontsContainer.innerHTML = "";
    }
})

handleLogout();
renderImage();
loadHeaderFooter();
isAuthed();