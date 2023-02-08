var yellowBox = document.querySelector(".change-color");

var changeColorToBlue = function () {
  yellowBox.classList.add("is-active");
};

yellowBox.addEventListener("click", changeColorToBlue);

// ----------

var orangeBox = document.querySelector(".toggle-color");

var changeColorToRed = function () {
  orangeBox.classList.toggle("red");
};

orangeBox.addEventListener("click", changeColorToRed);

// ----------

var violetBox = document.querySelector(".trigger");
var redBox = document.querySelector(".target");

var hideRedBox = function () {
  redBox.classList.toggle("is-hidden");
};

violetBox.addEventListener("click", hideRedBox);

// ----------
