const loader = document.querySelector('.loader');
const customerLoader = document.querySelector('.customer-loader');
window.addEventListener('load', vanish);

function vanish() {
    loader.classList.add("desppear");
    customerLoader.classList.add("desppear");
}

