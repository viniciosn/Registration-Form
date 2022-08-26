const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const passwordConfirmationValue = passwordConfirmation.value;

  if (usernameValue === "") {
    setErrorFor(username, "Please enter a username.");
  } else {
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "Please enter your email.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Plese, enter a valid e-mail.");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Please enter a password.");
  } else if (passwordValue.length < 7) {
    setErrorFor(password, "Password length must be greater than 6 characters.");
  } else {
    setSuccessFor(password);
  }

  if (passwordConfirmationValue === "") {
    setErrorFor(passwordConfirmation, "Please, repeat the password.");
  } else if (passwordConfirmationValue != passwordValue) {
    setErrorFor(
      passwordConfirmation,
      "Password confirmation must be the same as password."
    );
  } else {
    setSuccessFor(passwordConfirmation);
  }

  const formControls = form.querySelectorAll(".form-control");
  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {
    alert("Cadastrado com sucesso!");
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // Add error message
  small.innerText = message;

  // Add error class
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  // Add success message
  formControl.className = "form-control success";
}

function checkEmail(email) {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
}
