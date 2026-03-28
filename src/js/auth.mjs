import { setLocalStorage, getLocalStorage } from "./utils.mjs";

export function isAuthed() {
    const authStatus = getLocalStorage('isAuthed');
    if (authStatus === 'true') {
        showHTML(true);
    } else {
        showHTML(false);
    }
}

export function handleLogin(email, password) {
    if (email === 'test@gmail.com' && password === 'test1234') {
        setLocalStorage('isAuthed', 'true');
        window.location.href = '/';
        alert('Successfully logged in!');
        isAuthed();
    } else {
        window.location.href = '/login/index.html'
        alert('Invalid credentials, try again');
    }
}

export function handleLogout() {
    document.querySelectorAll('.logout-btn').forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            setLocalStorage('isAuthed', 'false');
            alert('successfully logged out!');
            isAuthed();
        })
    })
}

function showHTML(yes) {
    let decision = yes;

    if (decision) {
        document.querySelector('.image-container')?.classList.remove('hide');
        document.querySelectorAll('.logout-btn')?.forEach(el => {
            el.classList.remove('hide');
        });
        document.querySelector('.login-page-btn')?.classList.add('hide');
        document.querySelector('.login-btn')?.classList.add('hide');

        console.log('logged in');
    } else {
        document.querySelector('.image-container')?.classList.add('hide');
        document.querySelectorAll('.logout-btn')?.forEach(el => {
            el.classList.add('hide');
        });
        document.querySelector('.login-page-btn')?.classList.remove('hide');
        document.querySelector('.login-btn')?.classList.remove('hide');
        console.log('logged out');
    }
}

