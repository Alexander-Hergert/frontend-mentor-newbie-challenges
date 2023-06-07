const form = document.body.querySelector("form");
const emailField = document.body.querySelector('input[type="email"]');
const errorMessage = document.body.querySelector("form p");

const handleSubmit = (e) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(emailField.value)) {
  } else {
    e.preventDefault();
    errorMessage.style.display = "block";
    emailField.style.borderColor = "var(--light-red)";
    emailField.classList.add("error-placeholder");
  }
};

const resetError = () => {
  emailField.style.borderColor = "var(--pale-blue)";
  errorMessage.style.display = "none";
  emailField.classList.remove("error-placeholder");
};

form.addEventListener("submit", handleSubmit);
emailField.addEventListener("focusin", resetError);
emailField.addEventListener("focusout", handleSubmit);
