//Select elements
const allCategories = document.body.querySelectorAll(".category");
const allIcons = document.body.querySelectorAll("img");
const allScores = document.body.querySelectorAll(".score");
const resultElement = document.body.querySelector(".large");

//fetch JSON
const fetchAndReplace = async () => {
  try {
    const response = await fetch("data.json");
    const ratings = await response.json();
    replace(ratings);
    calculateResult(ratings);
  } catch (error) {
    console.error("Error:", error);
  }
};
//dynamic content
const replace = (ratings) => {
  for (let i = 0; i < allCategories.length; i++) {
    allCategories[i].innerHTML = ratings[i].category;
    allScores[i].innerHTML = ratings[i].score;
    allIcons[i].src = ratings[i].icon;
  }
};

//calculate result
const calculateResult = () => {
  let resultValue = 0;
  for (let i = 0; i < allCategories.length; i++) {
    resultValue += parseInt(allScores[i].innerHTML);
  }
  resultElement.innerHTML = Math.round(resultValue / allCategories.length);
};

fetchAndReplace();
