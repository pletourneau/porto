// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap";
// import "./css/styles.css";

document.addEventListener("DOMContentLoaded", function () {
  // var hamburger = document.getElementById("hamburger");
  // var menu = document.getElementById("menu");

  // hamburger.addEventListener("click", function () {
  //   menu.classList.toggle("show");
  // });
  // var aboutMeDiv = document.getElementById("aboutMe");

  // // Create the first image element
  // var uxImage = document.createElement("img");
  // uxImage.src = "../UX.png"; // Update the path if necessary
  // uxImage.alt = "UX Design";

  // // Create the second image element
  // var devImage = document.createElement("img");
  // devImage.src = "../Dev.png"; // Update the path if necessary
  // devImage.alt = "Developer";

  // aboutMeDiv.appendChild(devImage);
  // aboutMeDiv.appendChild(uxImage);

  const image = document.querySelector(".grid-item.two img");
  image.classList.add("rotating");
});
