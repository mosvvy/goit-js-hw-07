const form = document.querySelector(".login-form");

const validateForm = (event) => {
  event.preventDefault();

  const userAnswer = {
    email: event.target.elements.email.value,
    password: event.target.elements.password.value,
  };

  for (const field of Object.values(userAnswer)) {
    if (field.length === 0) {
      alert("All form fields must be filled in");
      return;
    }
  }

  console.log(userAnswer);

  event.target.reset();
};

form.addEventListener("submit", validateForm);
