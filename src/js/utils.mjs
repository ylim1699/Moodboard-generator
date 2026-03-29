async function loadTemplate(filePath) {
    const response = await fetch(filePath);
    if (response.ok) {
        const html = await response.text();
        return html;
    }   
}

export function renderTemplate(
    templateHTML,
    container,
    position = "afterbegin",
    clear = true
) {

    if (clear) {
        container.innerHTML ="";
    }

    container.insertAdjacentHTML(position, templateHTML);
} 

export async function loadHeaderFooter() {
    const headerTemplate = await loadTemplate('/partials/header.html');
    const footerTemplate = await loadTemplate('/partials/footer.html');

    const headerElement = document.querySelector(".main-header");
    const footerElement = document.querySelector(".main-footer");

    renderTemplate(headerTemplate, headerElement);
    renderTemplate(footerTemplate, footerElement);
}

export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(param);
}

// local storage
export function setLocalStorage(key, value) {
    localStorage.setItem(key, value)
}

export function getLocalStorage(key) {
    return localStorage.getItem(key);
}

