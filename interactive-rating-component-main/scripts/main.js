//Interactive elements
const ratingContainer = document.querySelector(".rating-state-container");
const confirmContainer = document.querySelector(".confirm-container");
const ratingButtons = document.querySelectorAll("input[type=button]");
const submitButton = document.querySelector(".btn-submit");
const selectedValue = document.querySelector("span");
const errorField = document.querySelector(".error");

let rating;

//handler functions
const handleBtnClick = (event) => {
  event.preventDefault();
  //loop remove classes first
  for (let button of ratingButtons) {
    button.classList.remove("btn-active");
  }
  event.target.classList.add("btn-active");
  rating = event.target.value;
};

const handleSubmitClick = (event) => {
  if (!rating) {
    event.preventDefault();
    errorField.style.display = "block";
  }
  event.target.value = rating;
};

//Add event listeners
for (let button of ratingButtons) {
  button.addEventListener("click", handleBtnClick);
}

submitButton.addEventListener("click", handleSubmitClick);
