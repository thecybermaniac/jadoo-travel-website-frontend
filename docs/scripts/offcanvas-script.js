const offcanvas = document.getElementById("offcanvas");
const menu = document.getElementById("menu");
const cancel = document.getElementById("cancel");
let showMenu = false;

menu.addEventListener("click", () => {
  if (showMenu == false) {
    showMenu = true;
    offcanvas.style.display = "block";
  }
});

cancel.addEventListener("click", () => {
  if (showMenu == true) {
    showMenu = false;
    offcanvas.style.display = "none";
  }
});
