console.log("this is working");

var myVariable = 7;
var otherVariable = "five";

var result = myVariable + otherVariable;

console.log(result);

var myBox = document.querySelector("h1");



function changeHeading() {
  myBox.innerHTML = "all your headings are belong to us";
}
myBox.addEventListener("click", changeHeading);
