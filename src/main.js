import { loadHeaderFooter} from './js/utils.mjs';
import { renderImage } from './js/unsplash.mjs';
import { handleLogout, isAuthed } from "./js/auth.mjs";

handleLogout();
renderImage();
loadHeaderFooter();
isAuthed();