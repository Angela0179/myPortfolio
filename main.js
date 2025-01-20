"use script";
document.querySelector(".menu-icon").addEventListener("click", function () {
  const menuLinks = document.querySelector(".nav-bar");
  menuLinks.classList.toggle("show");
  const icon = document.querySelector("#barz");
});

// Get the container element
var myContainer = document.getElementById("navigation");

// Get all buttons with class="btn" inside the container
var tags = myContainer.getElementsByClassName("tag");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < tags.length; i++) {
  tags[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
// let sections = document.querySelector("section");
// let navLinks = document.querySelectorAll("header nav a");

// window.onscroll = () => {
//   sections.forEach((sec) => {
//     let top = window.scrollY;
//     let offset = sec.offsetTop;
//     let height = sec.offsetHeight;
//     let id = sec.getAttribute("id");

//     if (top >= offset && top < offset + height) {
//       navLinks.forEach((links) => {
//         links.classList.remove("active");
//         document
//           .querySelector("header nav a[href*=" + id + "]")
//           .classlist.add("active");
//       });
//     }
//   });
// };
