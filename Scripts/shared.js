const navbar = document.querySelector(".navbar");
const hamFold = document.querySelector(".hamburgerFold");

hamFold.addEventListener("click", () => {
    navbar.classList.toggle("navToggle");
    hamFold.classList.toggle("hamToggle");
});

navbar.addEventListener("click", () => {
    navbar.classList.remove("navToggle");
    hamFold.classList.remove("hamToggle");
});