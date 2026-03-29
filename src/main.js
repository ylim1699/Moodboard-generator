import { loadHeaderFooter} from './js/utils.mjs';
import { renderImage, getSearchValue } from './js/unsplash.mjs';
import { handleLogout, isAuthed } from "./js/auth.mjs";
import { getFonts } from './js/fonts.mjs';

document.querySelector("#fontCheck").addEventListener("change", (e) => {
    e.preventDefault();
    if (e.target.checked) {
        console.log(`getQuery value: ${getSearchValue()}`);
        getFonts(getSearchValue());
    } else {
        const fontsContainer = document.querySelector(".fontsContainer");
        fontsContainer.innerHTML = "";
    }
})

handleLogout();
renderImage();
loadHeaderFooter();
isAuthed();