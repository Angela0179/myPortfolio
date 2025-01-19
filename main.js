"use script";
document.querySelector(".menu-icon").addEventListener("click", function () {
  const menuLinks = document.querySelector(".nav-bar");
  menuLinks.classList.toggle("show");
  const icon = document.querySelector("#barz");
});

let header = document.getElementById("navigation");
let btns = header.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
