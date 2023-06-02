//selected items
const shareBtn = document.body.querySelector("#share-btn");
const shareBtnActive = document.body.querySelector("#share-btn-active");
const container = document.body.querySelector(".container");
const shareContainer = document.body.querySelector(".share-container");
const triangle = document.body.querySelector(".triangle");
const iconContainer = document.body.querySelector(".icon-container");

//variables
let isActive = false;
const widthWindow = 769; //mobile breakpoint

//find the position of the button to set the icon container always above
const setPosition = () => {
  const posX = iconContainer.getBoundingClientRect().x;
  const posY = iconContainer.getBoundingClientRect().y;
  shareContainer.style.top = `${posY - 100}px`;
  shareContainer.style.left = `${posX - 120}px`;
  triangle.style.top = `${posY - 50}px`;
  triangle.style.left = `${posX}px`;
};
// toggle options to change the styles
const toggle = (e) => {
  e.preventDefault();
  isActive = !isActive;
  if (isActive) {
    setPosition();
    iconContainer.classList.add("icon-container-active");
    if (window.innerWidth < widthWindow) {
      container.style.display = "none";
      shareBtnActive.style.display = "block";
    }
    shareContainer.style.display = "flex";
    if (window.innerWidth > widthWindow) shareBtnActive.style.display = "none";
    triangle.style.display = "block";
  } else {
    iconContainer.classList.remove("icon-container-active");
    container.style.display = "flex";
    shareContainer.style.display = "none";
    triangle.style.display = "none";
    shareBtnActive.style.display = "none";
  }
};
//changing styles on resizing of the window like changing from landscape to portrait
const onResize = () => {
  if (isActive && window.innerWidth < widthWindow) {
    container.style.display = "none";
    shareBtnActive.style.display = "block";
    triangle.style.display = "block";
  } else if (isActive && window.innerWidth > widthWindow) {
    setPosition();
    container.style.display = "flex";
    shareBtnActive.style.display = "none";
  }
};
//listeners
shareBtn.addEventListener("click", toggle);
shareBtnActive.addEventListener("click", toggle);
window.addEventListener("resize", onResize);
