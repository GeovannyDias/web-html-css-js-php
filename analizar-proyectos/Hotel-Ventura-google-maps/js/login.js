let overlayLogin = document.getElementById('overlay-login');
let btnAbrirLogin = document.getElementById('btn-abrir-login');
let btnCerrarLogin = document.getElementById('btn-cerrar-login');
let pestanaLogin = document.querySelectorAll('.pestana');
let tab = document.querySelectorAll('.tab');
let lblOlvidasteContrasena = document.getElementById('lbl-contrasena-redirect');
let lblIngresar = document.getElementById('lbl-ingresar');
let lblRegresar = document.getElementById('lbl-regresar');
let crearCuenta = document.getElementById('crear-cuenta');
let lblIniciarSesion = document.getElementById('lbl-iniciar-sesion');

lblIniciarSesion.addEventListener('click', function(){
    btnAbrirLogin.click();
});

btnAbrirLogin.addEventListener('click', function(){
    overlayLogin.classList.add('active');
});
btnCerrarLogin.addEventListener('click', function(){
    overlayLogin.classList.remove('active');
});

pestanaLogin[0].addEventListener('click', function(){
    tab[1].classList.remove('active');
    tab[0].classList.add('active');
    tab[2].classList.remove('active');
});
pestanaLogin[1].addEventListener('click', function(){
    tab[0].classList.remove('active');
    tab[1].classList.add('active');
    tab[2].classList.remove('active');
});

lblOlvidasteContrasena.addEventListener('click',function(){
    tab[0].classList.remove('active');
    tab[1].classList.remove('active');
    tab[2].classList.add('active');
});
crearCuenta.addEventListener('click',function(){
    tab[0].classList.remove('active');
    tab[1].classList.add('active');
    tab[2].classList.remove('active');
});
lblIngresar.addEventListener('click',function(){
    tab[1].classList.remove('active');
    tab[0].classList.add('active');
    tab[2].classList.remove('active');
});
lblRegresar.addEventListener('click',function(){
    tab[1].classList.remove('active');
    tab[0].classList.add('active');
    tab[2].classList.remove('active');
});
