const translateXButton = document.querySelector("#translate-x-button");
const translateYButton = document.querySelector("#translate-y-button");
const translateXANdYButton = document.querySelector(
  "#translate-x-and-y-button"
);

translateXButton.addEventListener("click", translateX);
translateYButton.addEventListener("click", translateY);
translateXANdYButton.addEventListener("click", translateXAndY);

function translateX() {
  const cat = document.querySelector("#translate-x-cat");
  toggleClassAndText(cat, translateXButton, "translate-x");
}

function translateY() {
  const cat = document.querySelector("#translate-y-cat");
  toggleClassAndText(cat, translateYButton, "translate-y");
}

function translateXAndY() {
  const cat = document.querySelector("#translate-x-and-y-cat");
  toggleClassAndText(cat, translateXANdYButton, "translate-x-and-y");
}

function toggleClassAndText(cat, button, className) {
  if (cat.classList.contains(className)) {
    cat.classList.remove(className);
    button.textContent = "Let's Go";
  } else {
    cat.classList.add(className);
    button.textContent = "Reset";
  }
}