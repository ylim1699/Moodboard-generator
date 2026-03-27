import { loadHeaderFooter } from "./utils.mjs";
import { setLocalStorage } from "./utils.mjs";


function handleLogin(email, password) {
    if (email === 'test@gmail.com' && password === 'test1234') {
        setLocalStorage('isAuthed', 'true');
        showHTML();
    } else {
        window.location.href = '/login/index.html'
    }
}

document.querySelector(".login-btn").addEventListener("click", (e) => {
    e.preventDefault();

    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value.trim();

    handleLogin(email, password);
});

function showHTML() {
    console.log('logged in!');
}
loadHeaderFooter();