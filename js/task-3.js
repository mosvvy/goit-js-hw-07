const inputName = document.querySelector("#name-input");
const titleName = document.querySelector("#name-output");

const translateInput = () => {
  // Оскільки для input немає атрибуту name, через event.target.elements... не доступитися
  let name = inputName.value.trim();

  if (name.length === 0) {
    name = "Anonymous";
  }

  titleName.textContent = name;
};

inputName.addEventListener("input", translateInput);
