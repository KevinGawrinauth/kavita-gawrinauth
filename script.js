const aboutBtn = document.getElementById("aboutBtn");
const aboutModal = document.getElementById("aboutModal");
const closeBtn = document.getElementById("closeBtn");

aboutBtn.addEventListener("click", () => {
  aboutModal.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  aboutModal.classList.remove("show");
});

window.addEventListener("click", (event) => {
  if (event.target === aboutModal) {
    aboutModal.classList.remove("show");
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    aboutModal.classList.remove("show");
  }
});