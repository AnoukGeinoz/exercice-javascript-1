var yellowBox = document.querySelector(".change-color");

var changeColorToBlue = function () {
  yellowBox.classList.add("is-active");
};

yellowBox.addEventListener("click", changeColorToBlue);

var redBox = document.querySelector(".toggle-color");

var changeColorToRed = function () {
  redBox.classList.toggle("red");
};

redBox.addEventListener("click", changeColorToRed);
