"use script";
document.querySelector(".menu-icon").addEventListener("click", function () {
  const menuLinks = document.querySelector(".nav-bar");
  menuLinks.classList.toggle("show");
  const icon = document.querySelector("#barz");
});
