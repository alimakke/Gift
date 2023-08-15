const card = document.getElementById("card");
const openButton = document.getElementById("openButton");

openButton.addEventListener("click", () => {
    card.classList.toggle("open");
});