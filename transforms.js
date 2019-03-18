const translateXButton = document.querySelector("#translate-x-button");
const translateYButton = document.querySelector("#translate-y-button");
const translateBothButton = document.querySelector("#translate-both-button");

translateXButton.addEventListener("click", translateX);
translateYButton.addEventListener("click", translateY);
translateBothButton.addEventListener("click", translateXAndY);

function translateX() {
  const cat = document.querySelector("#translate-x-cat");
  toggleClassAndText(cat, translateXButton, "translate-x");
}

function translateY() {
  const cat = document.querySelector("#translate-y-cat");
  toggleClassAndText(cat, translateYButton, "translate-y");
}

function translateXAndY() {
  const cat = document.querySelector("#translate-both-cat");
  toggleClassAndText(cat, translateBothButton, "translate-both");
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
