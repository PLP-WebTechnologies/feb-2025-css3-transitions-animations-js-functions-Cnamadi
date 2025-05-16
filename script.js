// Retrieve stored theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
}

// Button Event Listeners
document.getElementById("lightBtn").addEventListener("click", () => {
  document.body.classList.remove("dark-mode");
  localStorage.setItem("theme", "light");
});

document.getElementById("darkBtn").addEventListener("click", () => {
  document.body.classList.add("dark-mode");
  localStorage.setItem("theme", "dark");
});

// Animate box on click
const box = document.getElementById("animateBox");
box.addEventListener("click", () => {
  box.classList.add("animate");

  // Remove the class after animation ends so it can be triggered again
  box.addEventListener("animationend", () => {
    box.classList.remove("animate");
  }, { once: true });
});
