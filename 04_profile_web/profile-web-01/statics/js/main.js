"use strict";

const menu = document.querySelector(".menu");
const btnOpenMenu = document.querySelector(".open-menu");
const btnCloseMenu = document.querySelector(".close-menu");

function toggleMenu() {
  menu.classList.toggle("menu_opened");
}
btnOpenMenu.addEventListener("click", toggleMenu);
btnCloseMenu.addEventListener("click", toggleMenu);

// INTERSECTION OBSERVER
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const menuLink = document.querySelector(`.menu a[href^="#${id}"]`);
      if (entry.isIntersecting) {
        document.querySelector(".menu a.selected").classList.remove("selected");
        menuLink.classList.add("selected");
      }
    });
  },
  { rootMargin: "-30% 0px -70% 0px" }
);

// MENU MOBILE CLOSE TO DO CLICK
const menuLinks = document.querySelectorAll(".menu a[href^='#']");

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", () => {
    menu.classList.remove("menu_opened");
    const hashProfile = menuLink.getAttribute("href"); //#id
    if (hashProfile === "#profile") scrollUp();
  });

  const hash = menuLink.getAttribute("href"); //#id
  const target = document.querySelector(hash);
  if (target) {
    observer.observe(target);
  }
});

function scrollUp() {
  const currentScroll = document.documentElement.scrollTop;
  if (currentScroll > 0) {
    setTimeout(() => window.scrollTo(0, 0), 100); // (x,y)
  }
}

// COPYRIGHT
const cp = document.getElementById("cp");
let date = new Date();
let year = "";
if (date.getFullYear() === 2021) {
  year = "2021";
} else {
  year = "2021" + " - " + date.getFullYear();
}
cp.innerHTML = year;
