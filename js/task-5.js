function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyElement = document.querySelector("body");
const textElement = document.querySelector(".color");
const btn = document.querySelector(".change-color");

const changeBgColor = (element) => {
  const color = getRandomHexColor();

  bodyElement.style.backgroundColor = color;
  textElement.textContent = color.toString();
};

btn.addEventListener("click", changeBgColor);
