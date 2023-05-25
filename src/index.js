import _ from "lodash";
import "./style.css";

function setupDropdown(navbarWrapper) {
  const navbarHeader = navbarWrapper.querySelector(".nav-header");
  const navbar = navbarWrapper.querySelector(".navbar");
  const navbarOptions = navbarWrapper.querySelectorAll(".navbar-option");

  navbarHeader.addEventListener("mouseover", () => {
    navbar.classList.add("visible");
  });

  navbarOptions.forEach((navbarOption) => {
    navbarOption.addEventListener("click", () => {
      navbarOptions.forEach((otherNavbarOption) => {
        if (otherNavbarOption !== navbarOption) {
          otherNavbarOption.classList.remove("selected");
        }
      });
      navbarOption.classList.toggle("selected");
    });
  });
}

const navbarWrappers = document.querySelectorAll(".navbar-wrapper");
navbarWrappers.forEach((navbarWrapper) => {
  setupDropdown(navbarWrapper);
});
