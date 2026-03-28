import { loadHeaderFooter } from "./utils.mjs";
import { handleLogout, handleLogin, isAuthed } from "./auth.mjs";

document.querySelector(".login-btn").addEventListener("click", (e) => {
    e.preventDefault();

    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value.trim();

    handleLogin(email, password);
});

handleLogout();
loadHeaderFooter();
isAuthed();