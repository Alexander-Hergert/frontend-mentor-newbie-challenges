const emailField = document.querySelector("input");
const errorMessage = document.querySelector("form p");
const form = document.querySelector("form");
const errorIcon = document.querySelector("form > img");

const handleSubmit = (e) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //compare email with regular expression
  if (emailRegex.test(emailField.value)) {
    //email is okay email will be submitted
  } else {
    e.preventDefault();
    errorMessage.style.visibility = "visible";
    emailField.style.borderColor = "var(--soft-red)";
    errorIcon.style.visibility = "visible";
  }
};

form.addEventListener("submit", handleSubmit);
