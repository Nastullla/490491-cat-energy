var navMain = document.querySelector(".page-header");
var navToggle = document.querySelector(".page-header__toggle");

navMain.classList.remove("page-header--nojs");
navMain.classList.add("page-header--menu-close");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("page-header--menu-close")) {
    navMain.classList.remove("page-header--menu-close");
  } else {
    navMain.classList.add("page-header--menu-close");
  }
});
