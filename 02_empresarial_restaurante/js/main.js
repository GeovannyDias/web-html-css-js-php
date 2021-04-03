// Crea una clase ("sticky") al mover el scroll cuando la altura sea mayor a cero
// La misma ("sticky") puede ser tratada desde css

window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

// Copyright
const cp = document.getElementById("cp");
let date = new Date();
let year = '';
if (date.getFullYear() === 2021) {
    year = "2021";
} else {
    year = "2021" + " - " + date.getFullYear();
}
cp.innerHTML = year;

// MENU TOGGLE
function toggleMenu() {
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle("active");
    navigation.classList.toggle("active");
}