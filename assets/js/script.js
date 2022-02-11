
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var submit = document.getElementsByClassName("submit")[0];



btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}




submit.onclick = function() {
let favFood = document.getElementById("fav-food").favFood;
localStorage.setItem("textareaValue", favFood);

}
