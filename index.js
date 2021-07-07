function myFunction() {
  var x = document.querySelector(".nav-container");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

document.getElementById("hamburger").addEventListener("click", hamburgerClose);
