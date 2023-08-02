const menu_icon = document.querySelector(".menu-icon");
const menu = document.querySelector(".navbar__links");
const close_icon = document.querySelector(".close-icon");

menu_icon.addEventListener("click", (e) => {
  e.preventDefault();
  menu.style.visibility = "visible";
});
close_icon.addEventListener("click", () => {
  menu.style.visibility = "hidden";
});
