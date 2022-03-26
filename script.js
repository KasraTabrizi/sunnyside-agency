// GET ELEMENTS

const navBarOption = document.getElementById("navbar_option");
const navBarHamburger = document.getElementsByClassName("navbar-hamburger");

navBarHamburger[0].addEventListener("click", () => {
  navBarOption.classList.add("mobile-clicked");
});
