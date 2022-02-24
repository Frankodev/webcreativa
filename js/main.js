/** @format */

// variables
const checkbox = document.getElementById("menu-icon");
const navLinks = document.querySelectorAll("#nav ul li a");

//función para abrir y cerrar nav
checkbox.addEventListener("click", function () {
  if (checkbox.checked == true) {
    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        checkbox.checked = false;
      });
    });
  }
});
