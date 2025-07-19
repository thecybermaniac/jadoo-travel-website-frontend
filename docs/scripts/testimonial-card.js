const cards = document.querySelectorAll(".testimonial-card");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

function showCard(index) {
  cards.forEach((card) => card.classList.add("inactive"));
  dots.forEach((dot) => dot.classList.remove("active"));

  cards[index].classList.remove("inactive");
  dots[index].classList.add("active");
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  showCard(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % cards.length;
  showCard(currentIndex);
});
