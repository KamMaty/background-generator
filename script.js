var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var defaultValues = true;

if (defaultValues) {
  color1.value = "#FF0000";
  color2.value = "#FFFF00";
  updateBackground();
  defaultValues = false;
}

function updateBackground() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  css.textContent = body.style.background + ";";
}

function generateRadient() {
  var randomRadient =
    "rgb(" +
    Math.floor(Math.random() * 256) +
    ", " +
    Math.floor(Math.random() * 256) +
    ", " +
    Math.floor(Math.random() * 256) +
    ")";
  return randomRadient;
}
function generateBackground() {
  newColor1 = generateRadient();
  newColor2 = generateRadient();
  body.style.background =
    "linear-gradient(to right, " + newColor1 + ", " + newColor2 + ")";
  css.textContent = body.style.background + ";";
}
