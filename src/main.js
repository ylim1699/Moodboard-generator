import { loadHeaderFooter} from './js/utils.mjs';
import { renderImage } from './js/unsplash.mjs';
import { handleLogout, isAuthed } from "./js/auth.mjs";
import { geminiAI } from './js/openai.mjs';

geminiAI();
handleLogout();
renderImage();
loadHeaderFooter();
isAuthed();