// import Typed from "./typed.js";

// var typed = new Typed(".auto-input", {
//   strings: [" &nbsp;  Your Country"],
//   typeSpeed: 100,
//   backSpeed: 100,
//   loop: true,
// });

// $(".menu").on("click", function () {
//   $("nav").toggleClass("active");
// });

// $(".btn").on("click", function () {
//   $("h1").toggle();
// });

// const hamburger = document.querySelector(".menu");
// const navbar = document.querySelector("nav");

$(".menu").on("click", function () {
  $("nav").slideToggle("active");
});
