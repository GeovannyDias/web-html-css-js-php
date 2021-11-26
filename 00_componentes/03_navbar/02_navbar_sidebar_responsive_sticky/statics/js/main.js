const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu-list");
const btnMenu = document.querySelector(".btn-menu");
const btnClose = document.querySelector(".btn-close");

btnMenu.addEventListener("click", () => {
  menu.classList.add("active");
  btnMenu.classList.add("hide");
  body.classList.add("disabledScroll");
});

btnClose.addEventListener("click", () => {
  menu.classList.remove("active");
  btnMenu.classList.remove("hide");
  body.classList.remove("disabledScroll");
});

// sticky

window.onscroll = () => {
  this.scrollY > 20
    ? navbar.classList.add("sticky")
    : navbar.classList.remove("sticky");
};
