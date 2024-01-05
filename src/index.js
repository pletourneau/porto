// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap";
// import "./css/styles.css";

document.addEventListener("DOMContentLoaded", function () {
  var hamburger = document.getElementById("hamburger");
  var menu = document.getElementById("menu");

  hamburger.addEventListener("click", function () {
    menu.classList.toggle("show");
  });
  const image = document.querySelector(".grid-item.one img");
  image.classList.add("rotating");
});
