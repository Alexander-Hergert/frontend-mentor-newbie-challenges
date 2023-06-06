const inputFields = document.body.querySelectorAll("form div input");
const inputFieldImages = document.body.querySelectorAll("form div img");
const errorMessages = document.body.querySelectorAll("form h6");
const submitForm = document.body.querySelector("form");

const checkInput = (index) => {
  if (!inputFields[index].value) {
    inputFields[index].style.borderColor = "red";
    inputFieldImages[index].style.display = "block";
    errorMessages[index].style.display = "block";
    return false;
  }
  return true;
};

const checkEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(inputFields[2].value)) {
    inputFields[2].style.borderColor = "red";
    inputFieldImages[2].style.display = "block";
    errorMessages[2].style.display = "block";
    return false;
  }
  return true;
};

const resetInput = (i) => {
  inputFields[i].style.borderColor = "hsl(248, 32%, 49%)";
  inputFieldImages[i].style.display = "none";
  errorMessages[i].style.display = "none";
};

const handleSubmit = (e) => {
  const isFirstName = checkInput(0);
  const isLastName = checkInput(1);
  const isEmail = checkEmail();
  const isPassword = checkInput(3);
  if (isFirstName && isLastName && isEmail && isPassword) {
  } else {
    e.preventDefault();
  }
};

submitForm.addEventListener("submit", handleSubmit);
for (let i = 0; i < inputFields.length; i++) {
  inputFields[i].addEventListener("focusin", () => resetInput(i));
  if (i === 2) {
    inputFields[i].addEventListener("focusout", checkEmail);
    continue;
  }
  inputFields[i].addEventListener("focusout", () => checkInput(i));
}
