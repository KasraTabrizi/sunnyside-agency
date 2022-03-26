// GET ELEMENTS

const navBarOption = document.getElementById("navbar_option");
const navBarHamburger = document.getElementsByClassName("navbar-hamburger");
const navBarClose = document.getElementById("navbar_close");
let mediaQuery = window.matchMedia("(min-width: 600px)");

// OPEN HAMBURGER MENU
navBarHamburger[0].addEventListener("click", () => {
  navBarOption.classList.add("mobile-clicked");
});

// CLOSE HAMBURGER MENU
//WHEN CLICKED ON CLOSE BUTTON
navBarClose.addEventListener("click", () => {
  navBarOption.classList.remove("mobile-clicked");
});

//WHEN SCREEN SIZE GOES TO DESKTOP
mediaQuery.addEventListener("change", (e) => {
  if (e.matches) {
    navBarOption.classList.remove("mobile-clicked");
  }
});
