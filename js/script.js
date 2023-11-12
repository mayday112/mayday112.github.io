// menu click open close
let menuIcon = document.querySelector(".menu-icon");
let menuOpen = document.querySelector(".menu-container");
menuIcon.addEventListener("click", () => {
  //   console.log("okeeeee");
  menuIcon.classList.toggle("click");
  menuOpen.classList.toggle("active");
});

let jadwalIcon = document.querySelector(".tombol-wrapper > a");

jadwalIcon.addEventListener("click", () => {
  jadwalIcon.classList.toggle("click");
});

// navbar sticky

// window.onscroll = function () {
//   myFunction();
// };

// var navbar = document.querySelector(".navbar");
// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     navbar.classList.add("sticky");
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }
