//Get the query params
const urlParams = new URLSearchParams(window.location.search);
const rating = urlParams.get("rating");

//select the span
const selectedValue = document.querySelector("span");

//manipulate span
selectedValue.innerHTML = rating;
