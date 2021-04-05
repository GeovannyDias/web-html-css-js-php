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


// SCROLL UP
const buttonUp = document.getElementById('button-up');
buttonUp.addEventListener('click', scrollUp);

function scrollUp() {
    const currentScroll = document.documentElement.scrollTop;
    if (currentScroll > 0) { // 674
        // window.requestAnimationFrame(scrollUp);  // currentScroll - (currentScroll / 10)
        window.scrollTo(0, 0); // (x,y)
    }
}

window.onscroll = () => {
    const scroll = document.documentElement.scrollTop;
    if (scroll > 590) {
        buttonUp.style.transform = "scale(1)";
    } else {
        buttonUp.style.transform = "scale(0)";
    }
}




// Evento click
// const menuT = document.getElementById("menuToggle");
// const menuT = document.querySelector(".menuToggle");

// menuT.addEventListener('click', ()=> {
//     alert('Menu toggle');
//     menuT.classList.toggle("active");
// });



// Funcion Autoivocada
// (()=> {})()
// (async () => {
//     conts { value: pais } = await Swal.fire({});
//     if (pais) {
//         // Code
//     }
// })()

