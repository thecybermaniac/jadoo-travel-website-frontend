window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  const scrollThreshold = 100;

  if (window.scrollY > scrollThreshold) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const navbar = document.getElementById("navbar");
const scrollThreshold = 100;

if (window.scrollY > scrollThreshold) {
  navbar.classList.add("scrolled");
} else {
  navbar.classList.remove("scrolled");
}
